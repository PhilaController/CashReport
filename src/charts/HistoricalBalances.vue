<template>
  <div class="card border-dark historical-balances-wrapper">
    <!-- Title -->
    <div
      class="
        card-header
        border-dark
        d-flex
        justify-content-between
        align-items-start
      "
      :class="$vuetify.breakpoint.mobile ? 'flex-column' : ''"
    >
      <!-- Header -->
      <div class="header-title">
        {{ headerTitle }}
      </div>

      <!-- Exclude/Include TRAN -->
      <v-checkbox
        v-if="quarter !== 4 && hasTRAN(selectedFund)"
        v-model="toggle"
        dense
        hide-details
        :ripple="false"
        color="#2176d2"
        label="Exclude TRAN"
        @change="handleToggleChange"
      />
    </div>

    <!-- Main Chart Area-->
    <div class="card-body">
      <!-- Overlay a lodader -->
      <v-overlay :value="rawData === null" absolute opacity="1" color="#fff">
        <v-progress-circular indeterminate size="64" color="#2176d2" />
      </v-overlay>

      <!-- Downlaod button -->
      <div class="download-button d-flex flex-row justify-content-end">
        <v-btn
          outlined
          :href="getDownloadURL(key)"
          aria-label="Download data as CSV file"
          ><i class="fas fa-lg fa-download"></i
        ></v-btn>
      </div>

      <!-- Mobile dropdown -->
      <v-select
        v-if="$vuetify.breakpoint.mobile"
        v-model="selectedFund"
        :items="names"
        label="Fund Name"
        outlined
        dense
        hide-details
        class="fund-select mt-5 mb-5"
        @change="selectData"
      ></v-select>

      <!-- Chart area-->
      <div :style="{ height: height + 'px' }">
        <!-- The Canvas -->
        <canvas
          ref="chartRef"
          :aria-label="`Tabular representation of the data in the chart entitled '${headerTitle}'`"
          role="img"
        >
          <!-- a11y table -->
          <a11yTable
            v-if="rawData !== null"
            :data="data"
            caption="Cash fund balances in millions by fiscal year."
            :formatFunction="formatFunction"
          />
        </canvas>
      </div>
    </div>

    <div class="card-footer" v-if="!$vuetify.breakpoint.mobile">
      <div class="font-italic">
        Note: Click on a specific legend element to show/hide the corresponding
        line.
      </div>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "@vue/composition-api";
import { Chart } from "chart.js";
import { fetch, formatFunction, getDownloadURL } from "@/utils";
import { QUARTER } from "@/config";
import a11yTable from "@/components/a11yTable";
import { min, max } from "d3-array";

const COLORS = {
  "Grants Fund": "#f3c613",
  "Total Capital Funds": "#f99300",
  "General Fund": "#2176d2",
  "General Fund (No TRAN)": "#2176d2",
  "Consolidated Cash": "#58c04d",
  "Consolidated Cash (No TRAN)": "#58c04d",
};

export default {
  name: "HistoricalBalances",
  props: ["height"],
  components: { a11yTable },
  data() {
    return {
      toggle: false,
      key: "end-of-quarter-balances",
      quarter: QUARTER,
      rawData: null,
      chart: null,
      selectedFund: null,
      maxValues: {},
      minValues: {},
    };
  },
  async created() {
    // Load the data
    this.rawData = await fetch(this.key);

    // Set the dropdown default
    this.selectedFund = this.names[0];

    // Get min/max values
    let names = [
      "Consolidated Cash",
      "General Fund",
      "Grants Fund",
      "Total Capital Funds",
    ];
    for (let i = 0; i < names.length; i++) {
      let name = names[i];

      // Determine the global min
      if (this.hasTRAN(name))
        this.minValues[name] = min(
          this.rawData,
          (d) => +d[`${name} (No TRAN)`]
        );
      else this.minValues[name] = min(this.rawData, (d) => +d[name]);

      // Determine the global max
      this.maxValues[name] = max(this.rawData, (d) => +d[name]);
    }
  },
  methods: {
    hasTRAN(name) {
      return name == "General Fund" || name == "Consolidated Cash";
    },
    formatFunction(value, decimals = 1) {
      return formatFunction(value, decimals);
    },
    getDownloadURL(key) {
      return getDownloadURL(key);
    },
    handleToggleChange() {
      let chart = this.chart.value;
      if (this.hasTRAN(this.selectedFund)) {
        // Remove data
        chart.data.datasets = [];

        // Set min/max values
        chart.options.scales.y.suggestedMin = this.minValues[this.selectedFund];
        chart.options.scales.y.suggestedMax = this.maxValues[this.selectedFund];

        // Add datasets
        chart.data.datasets = [].concat(this.data.datasets);
        chart.update();
      }
    },

    selectData() {
      // Destroy the chart
      this.chart.value.destroy();

      // Create the chart
      let ctx = this.$refs.chartRef.getContext("2d");
      this.chart = shallowRef(
        new Chart(ctx, {
          type: "line",
          data: this.data,
          options: this.options,
        })
      );
    },
  },
  computed: {
    headerTitle() {
      return `Historical Cash Balances at the End of Q${this.quarter}`;
    },
    names() {
      return [
        "Consolidated Cash",
        "General Fund",
        "Grants Fund",
        "Total Capital Funds",
      ];
    },
    options() {
      // On mobile, set the y-axis bounds
      let suggestedMax, suggestedMin;
      if (this.$vuetify.breakpoint.mobile) {
        suggestedMin = this.minValues[this.selectedFund];
        suggestedMax = this.maxValues[this.selectedFund];
      }
      return {
        animation: { duration: 0 },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: !this.$vuetify.breakpoint.mobile,
            labels: {
              font: {
                size: 16,
              },
              usePointStyle: true,
            },
          },
          tooltip: {
            mode: "point",
            borderColor: "#212121",
            borderWidth: 0.5,
            backgroundColor: "#F5F5F5",
            bodyFont: { size: 16 },
            bodyColor: "#212121",
            titleFont: { size: 18 },
            titleColor: "#212121",
            callbacks: {
              title: (context) => {
                let label = context[0].label || "";
                return `Fiscal Year ${label}`;
              },
              label: (context) => {
                let label = context.dataset.label || "";
                label = " " + label;
                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += this.formatFunction(context.parsed.y, 1);
                }
                return label;
              },

              labelColor: (context) => {
                let label = context.dataset.label;
                let color = COLORS[label];
                return {
                  borderColor: color,
                  backgroundColor: color,
                };
              },
            },
          },
        },
        scales: {
          x: {
            offset: true,
            grid: {
              lineWidth: 1,
            },
            ticks: {
              font: { size: 16 },
            },
          },
          y: {
            suggestedMax: suggestedMax,
            suggestedMin: suggestedMin,
            offset: true,
            ticks: {
              font: { size: 16 },
              // eslint-disable-next-line
              callback: (value, index, values) => {
                return this.formatFunction(value, 0);
              },
            },
            grid: {
              lineWidth: 1,
              color: function (context) {
                if (context.tick.value == 0) {
                  return "#212121";
                }

                return "#cfcfcf";
              },
            },
          },
        },
      };
    },
    data() {
      //   Determine which datasets
      let names = [].concat(this.names);
      if (this.$vuetify.breakpoint.mobile) {
        names = [this.selectedFund];
      }

      // Add (NO TRAN)?
      for (let i = 0; i < names.length; i++) {
        let name = names[i];
        if (
          this.toggle &&
          (name == "General Fund" || name == "Consolidated Cash")
        )
          names[i] = name + " (No TRAN)";
      }

      let datasets = [];
      for (let i = 0; i < names.length; i++) {
        let name = names[i];
        datasets.push({
          label: this.names[i],
          data: this.rawData.map((d) => d[name]),
          fill: false,
          borderColor: COLORS[name],
          tension: 0.2,
          borderWidth: 4,
          pointBackgroundColor: "#fff",
          pointBorderWidth: 3,
          pointHoverBorderWidth: 3,
          pointRadius: 5,
          pointHoverRadius: 7,
        });
      }
      return {
        labels: this.rawData.map((d) => d["Fiscal Year"]),
        datasets: datasets,
      };
    },
  },
  watch: {
    rawData(newData) {
      if (newData !== null) {
        let ctx = this.$refs.chartRef.getContext("2d");
        this.chart = shallowRef(
          new Chart(ctx, {
            type: "line",
            data: this.data,
            options: this.options,
          })
        );
      }
    },
  },
};
</script>


<style>
.input__label {
  min-width: 120px;
}
div.v-input__slot > label {
  margin-bottom: 0rem !important;
}

.historical-balances-wrapper input {
  background-color: transparent !important;
  border-width: 0px !important;
}

.v-list-item__title {
  font-size: 1rem !important;
}
</style>
