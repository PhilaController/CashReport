<template>
  <div class="card border-dark annual-fund-balance-wrapper">
    <!-- Title -->
    <div
      class="
        card-header
        border-dark
        d-flex
        justify-content-between
        align-items-start
      "
    >
      <div class="header-title">{{ headerTitle }}</div>
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

      <!-- The chart canvas -->
      <div :style="{ height: height + 'px' }">
        <!-- The canvas -->
        <canvas
          ref="chartRef"
          :aria-label="`Tabular representation of the data in the chart entitled '${headerTitle}'`"
          role="img"
        >
          <!-- a11y table -->
          <a11yTable
            v-if="rawData !== null"
            :data="data"
            caption="Year-over-year change in cash fund balance in millions."
            :formatFunction="formatFunction"
          />
        </canvas>
      </div>
    </div>

    <div class="card-footer" v-if="!$vuetify.breakpoint.mobile">
      <div class="font-italic">
        Note: Click on a specific legend element to show/hide the corresponding
        dataset.
      </div>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "@vue/composition-api";
import { Chart } from "chart.js";
import { fetch, formatFunction, getDownloadURL } from "@/utils";
import a11yTable from "@/components/a11yTable";

const COLORS = {
  "Grants Fund": "#f3c613",
  "Total Capital Funds": "#f99300",
  "General Fund": "#2176d2",
  "Consolidated Cash": "#58c04d",
};

export default {
  name: "AnnualFundBalanceChanges",
  props: ["height"],
  components: { a11yTable },
  data() {
    return {
      key: "annual-fund-balance-changes",
      rawData: null,
      selectedFund: null,
      chart: null,
      headerTitle: "Year-Over-Year Cash Balance Changes",
    };
  },
  async created() {
    //   Load the data
    this.rawData = await fetch(this.key);

    // Set the dropdown default
    this.selectedFund = this.names[0];
  },
  methods: {
    formatFunction(value, decimals = 1) {
      let out = formatFunction(value, decimals);
      if (value > 0) out = "+" + out;
      return out;
    },
    getDownloadURL(key) {
      return getDownloadURL(key);
    },
    selectData() {
      // Destroy the chart
      this.chart.value.destroy();

      let ctx = this.$refs.chartRef.getContext("2d");
      this.chart = shallowRef(
        new Chart(ctx, {
          type: "bar",
          data: this.data,
          options: this.options,
        })
      );
    },
  },
  computed: {
    names() {
      return [
        "General Fund",
        "Consolidated Cash",
        "Grants Fund",
        "Total Capital Funds",
      ];
    },
    options() {
      return {
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
      let datasets = [];

      //   Determine which datasets
      let names = this.names;
      if (this.$vuetify.breakpoint.mobile) {
        names = [this.selectedFund];
      }

      for (let i = 0; i < names.length; i++) {
        let name = names[i];
        datasets.push({
          label: name,
          data: this.rawData.map((d) => d[name]),
          backgroundColor: COLORS[name],
          borderColor: "#000",
          borderWidth: 1,
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
            type: "bar",
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
.annual-fund-balance-wrapper input {
  background-color: transparent !important;
  border-width: 0px !important;
}

.v-list-item__title {
  font-size: 1rem !important;
}
</style>
