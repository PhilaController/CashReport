<template>
  <div class="card border-dark fund-balance-accuracy-wrapper">
    <!-- Card Header -->
    <div class="card-header border-dark d-flex flex-column">
      <!-- Title -->
      <div class="header-title">{{ headerTitle }}</div>

      <v-select
        v-model="selectedFund"
        :items="names"
        label="Fund Name"
        outlined
        dense
        hide-details
        class="fund-select mt-5 mb-5"
        @change="selectData"
      ></v-select>
    </div>

    <!-- Main Chart -->
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

      <!-- The chart area -->
      <div :style="{ height: height + 'px' }">
        <!-- The canvas -->
        <canvas ref="chartRef" :aria-label="headerTitle" role="img">
          <!-- a11y table -->
          <a11yTable
            v-if="rawData !== null"
            :data="data"
            :caption="`Difference between actual and Q${quarter} projection for cash fund balances in millions by fiscal year.`"
            :formatFunction="formatFunction"
          />
        </canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "@vue/composition-api";
import { Chart } from "chart.js";
import { fetch, getDownloadURL, formatFunction } from "@/utils";
import { QUARTER } from "@/config";
import a11yTable from "@/components/a11yTable";

export default {
  name: "FundBalanceProjectionAccuracy",
  props: ["height"],
  components: { a11yTable },
  data: () => ({
    rawData: null,
    key: "projection-accuracy-fund-balance",
    selectedFund: null,
    quarter: QUARTER,
    names: [
      "General Fund",
      "Consolidated Cash",
      "Grants Fund",
      "Total Capital Funds",
    ],
  }),
  async created() {
    //   Load the data
    this.rawData = await fetch(this.key);

    // Set the default fund
    this.selectedFund = this.names[0];
  },
  computed: {
    dataColumn() {
      return `Actual - Q${QUARTER} Projection`;
    },
    headerTitle() {
      return `Year-End Cash Balances, Actual vs. Q${QUARTER} Projection`;
    },
    data() {
      let d = this.rawData.filter((d) => d["Name"] == this.selectedFund);
      let datasets = [
        {
          label: this.dataColumn,
          data: d.map((d) => d[this.dataColumn]),
          backgroundColor: function (context) {
            var index = context.dataIndex;
            var value = context.dataset.data[index];
            return value < 0 ? "#cc3000" : "#000";
          },
        },
      ];
      return {
        labels: d.map((d) => d["Fiscal Year"]),
        datasets: datasets,
      };
    },
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            mode: "point",
            borderColor: "#212121",
            borderWidth: 0.5,
            backgroundColor: "#F5F5F5",
            bodyFont: { size: 16 },
            bodyColor: "#212121",
            titleFont: { size: 16 },
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
                let value = context.parsed.y;
                if (value !== null) {
                  let v = this.formatFunction(value, 1);
                  if (value > 0) v = "+" + v;
                  label += v;
                }
                return label;
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: { size: 18 },
            },
            grid: { display: false },
          },
          y: {
            title: {
              text: `Actual — Q${this.quarter} Projection`,
              display: true,
              font: { size: 16 },
            },
            ticks: {
              font: { size: 16 },
              //eslint-disable-next-line
              callback: (value, index, values) => {
                let out = this.formatFunction(value, 0);
                if (value > 0) out = "+" + out;
                return out;
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
  },
  watch: {
    rawData(newData) {
      if (newData !== null) {
        // Chart context
        let ctx = this.$refs.chartRef.getContext("2d");

        // Initialize the chart
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
  methods: {
    formatFunction(value, decimals = 1) {
      return formatFunction(value, decimals);
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
};
</script>


<style>
.fund-balance-accuracy-wrapper input {
  background-color: transparent !important;
  border-width: 0px !important;
}

.fund-balance-accuracy-wrapper .fund-select {
  max-width: 400px;
}

.v-list-item__title {
  font-size: 1.1rem !important;
  line-height: 1.7rem !important;
}
</style>