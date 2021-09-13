<template>
  <div class="card border-dark">
    <!-- Card Header -->
    <div class="card-header border-dark d-flex flex-column">
      <!-- Title -->
      <div class="header-title">Short-Term General Fund Borrowing Amounts</div>
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

      <!-- The chart canvas -->
      <div :style="{ height: height + 'px' }">
        <canvas ref="chartRef" />
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import { fetch, getDownloadURL, formatFunction } from "@/utils";

const COLOR = "#2176d2";

export default {
  name: "AnnualTRANs",
  props: ["height"],
  data: () => ({
    rawData: null,
    key: "annual-TRAN",
  }),
  async created() {
    this.rawData = await fetch(this.key);
  },
  computed: {
    data() {
      let datasets = [
        {
          label: "Amount",
          data: this.rawData.map((d) => d["TRAN"]),
          borderColor: COLOR,
          backgroundColor: COLOR,
          borderWidth: 2,
        },
      ];
      return {
        labels: this.rawData.map((d) => d["Fiscal Year"]),
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
                  label += this.formatFunction(context.parsed.y, 0);
                }
                return label;
              },
              //eslint-disable-next-line
              labelColor: (context) => {
                return {
                  borderColor: COLOR,
                  backgroundColor: COLOR,
                };
              },
            },
          },
        },
        scales: {
          x: {
            ticks: {
              font: { size: 16 },
            },
            grid: { display: false },
          },
          y: {
            ticks: {
              font: { size: 16 },
              //eslint-disable-next-line
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
  },
  watch: {
    rawData(newData) {
      if (newData !== null) {
        // Chart context
        let ctx = this.$refs.chartRef.getContext("2d");

        // Initialize the chart
        new Chart(ctx, {
          type: "bar",
          data: this.data,
          options: this.options,
        });
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
  },
};
</script>

