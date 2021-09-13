<template>
  <div class="card border-dark">
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
      <!-- Header -->
      <div class="header-title">
        Historical Cash Balances at the End of Q{{ quarter }}
      </div>

      <!-- Exclude/Include TRAN -->
      <v-checkbox
        v-if="quarter !== 4"
        v-model="toggle"
        dense
        hide-details
        :ripple="false"
        color="#2176d2"
        label="Exclude TRAN"
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

      <!-- The chart canvas -->
      <div :style="{ height: height + 'px' }">
        <canvas ref="chartRef" />
      </div>
    </div>

    <div class="card-footer">
      <div class="font-italic">
        Note: Click on a specific legend element to show/hide the corresponding
        line.
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import { fetch, formatFunction, getDownloadURL } from "@/utils";
import { QUARTER } from "@/config";

const COLORS = {
  "Grants Fund": "#f3c613",
  "Total Capital Funds": "#f99300",
  "General Fund": "#2176d2",
  "Consolidated Cash": "#58c04d",
};

export default {
  name: "HistoricalBalances",
  props: ["height"],
  data() {
    return {
      toggle: false,
      key: "end-of-quarter-balances",
      quarter: QUARTER,
      rawData: null,
    };
  },
  async created() {
    this.rawData = await fetch(this.key);
  },
  methods: {
    formatFunction(value, decimals) {
      return formatFunction(value, decimals);
    },
    getDownloadURL(key) {
      return getDownloadURL(key);
    },
  },
  computed: {
    names() {
      if (this.toggle == false)
        return [
          "Consolidated Cash",
          "General Fund",
          "Grants Fund",
          "Total Capital Funds",
        ];
      else
        return [
          "Consolidated Cash (No TRAN)",
          "General Fund (No TRAN)",
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
      for (let i = 0; i < this.names.length; i++) {
        let name = this.names[i];
        datasets.push({
          label: name,
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
        new Chart(ctx, {
          type: "line",
          data: this.data,
          options: this.options,
        });
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
</style>
