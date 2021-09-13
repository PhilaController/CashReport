<template>
  <div>
    <!-- Overlay a lodader -->
    <v-overlay :value="rawData === null" absolute opacity="1" color="#fff">
      <v-progress-circular indeterminate size="64" color="#2176d2" />
    </v-overlay>

    <!-- The chart canvas -->
    <div :style="{ height: height + 'px' }">
      <canvas ref="chartRef" />
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import { formatFunction } from "@/utils";
import { format } from "date-fns";
import { shallowRef } from "@vue/composition-api";

const COLORS = {
  Revenue: "#000000",
  Expenditures: "#c30000",
};

export default {
  name: "Chart",
  props: ["height", "kind", "rawData"],
  data() {
    return {
      keyPrefix: "monthly-cash-totals",
      chart: null,
      loaded: false,
    };
  },

  methods: {
    formatFunction(value, decimals) {
      return formatFunction(value, decimals);
    },
  },
  computed: {
    dataColumn() {
      return this.kind === "revenue" ? "Revenue" : "Expenditures";
    },
    key() {
      return `${this.keyPrefix}-${this.kind}`;
    },
    options() {
      return {
        animation: {
          duration: 0,
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
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
              title: (ctx) => {
                return format(new Date(ctx[0].parsed.x), "MMM y");
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
            },
          },
        },
        scales: {
          x: {
            type: "timeseries",
            offset: true,
            grid: {
              lineWidth: 1,
              // eslint-disable-next-line
              color: function (context) {
                return "#cfcfcf";
              },
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
      let pointRadius, borderWidth;
      if (!this.$vuetify.breakpoint.mobile) {
        pointRadius = 4;
        borderWidth = 3;
      } else {
        pointRadius = 0;
        borderWidth = 2;
      }
      return {
        labels: this.rawData.map((d) => d["Date"]),
        datasets: [
          {
            label: this.dataColumn,
            data: this.rawData.map((d) => d[this.dataColumn]),
            fill: false,
            borderColor: COLORS[this.dataColumn],
            tension: 0.2,
            borderWidth: borderWidth,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 2.5,
            pointHoverBorderWidth: 3,
            pointRadius: pointRadius,
            pointHoverRadius: 5,
          },
        ],
      };
    },
  },
  watch: {
    rawData(newData) {
      let ctx = this.$refs.chartRef.getContext("2d");

      if (newData !== null) {
        // Chart context
        if (!this.loaded) {
          this.chart = shallowRef(
            new Chart(ctx, {
              type: "line",
              data: this.data,
              options: this.options,
            })
          );
          this.loaded = true;
        } else {
          // Destroy the chart
          this.chart.value.destroy();

          // New chart
          this.chart = shallowRef(
            new Chart(ctx, {
              type: "line",
              data: this.data,
              options: this.options,
            })
          );
        }
      }
    },
  },
};
</script>

<style>
</style>