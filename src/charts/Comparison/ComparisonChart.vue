<template>
  <!-- Main Chart Area-->
  <div class="chart-wrapper">
    <!-- Overlay a lodader -->
    <v-overlay :value="rawData === null" absolute opacity="1" color="#fff">
      <v-progress-circular indeterminate size="64" color="#2176d2" />
    </v-overlay>

    <!-- Downlaod button -->
    <div class="download-button d-flex flex-row justify-content-end">
      <v-btn
        outlined
        :href="getDownloadURL(downloadKey)"
        aria-label="Download data as CSV file"
        ><i class="fas fa-lg fa-download"></i
      ></v-btn>
    </div>

    <!-- The chart area -->
    <div :style="{ height: height + 'px' }">
      <!-- The Canvas -->
      <canvas
        ref="chartRef"
        :aria-label="`Tabular representation of the data in the chart entitled '${title}'`"
        role="img"
      >
        <!-- a11y table -->
        <a11yTable
          v-if="rawData !== null"
          :data="data"
          :caption="title"
          :formatFunction="formatFunction"
        />
      </canvas>
    </div>
  </div>
</template>

<script>
import { shallowRef } from "@vue/composition-api";
import { Chart } from "chart.js";
import { isProjection, getDownloadURL, formatFunction } from "@/utils";
import a11yTable from "@/components/a11yTable";

export default {
  name: "ComparisonChart",
  components: { a11yTable },
  props: [
    "dataColumns",
    "rawData",
    "mainColor",
    "height",
    "downloadKey",
    "title",
  ],
  data() {
    return {
      loaded: false,
      chart: null,
    };
  },

  computed: {
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
                let index = context.datasetIndex;
                let color = index == 0 ? this.mainColor : "#a1a1a1";
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
      let keys = ["baseline", "comparison"];
      let months = this.rawData.map((d) => d["Month"]);
      for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let name = this.dataColumns[key];
        datasets.push({
          label: name,
          data: this.rawData.map((d) => d[name]),
          fill: false,
          borderColor: key == "baseline" ? this.mainColor : "#a1a1a1",
          segment: {
            borderDash: (ctx) => {
              let month = months[ctx.p1DataIndex];
              if (isProjection(name, month)) {
                return [20, 5];
              } else return [];
            },
          },
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
        labels: months,
        datasets: datasets,
      };
    },
  },
  methods: {
    getDownloadURL(key) {
      return getDownloadURL(key);
    },
    formatFunction(value, decimals = 1) {
      return formatFunction(value, decimals);
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
.input__label {
  min-width: 120px;
}
div.v-input__slot > label {
  margin-bottom: 0rem !important;
}
</style>
