<template>
  <div class="card border-dark cash-totals-accuracy-wrapper">
    <!-- Card Header -->
    <div class="card-header border-dark d-flex flex-column">
      <div class="header-title">{{ headerTitle }}</div>
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
            :caption="`Actual and projected changes in annual cash ${flavor} totals for the General Fund in millions by fiscal year.`"
            :formatFunction="formatFunction"
          />
        </canvas>
      </div>
    </div>

    <div class="card-footer" v-if="quarter === 1">
      <div class="font-italic">
        Note: Q1 projection for fiscal year 2015 now shown due to the budgeted
        sale of Philadelphia Gas Works that did not occur.
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import { fetch, getDownloadURL, formatFunction, capitalize } from "@/utils";
import a11yTable from "@/components/a11yTable";
import { QUARTER } from "@/config";

export default {
  name: "CashTotalsProjectionAccuracy",
  props: ["height", "flavor"],
  components: { a11yTable },
  data: () => ({
    rawData: null,
    keyPrefix: "projection-accuracy",
    quarter: QUARTER,
  }),
  async created() {
    //   Load the data
    this.rawData = await fetch(this.key);

    // Convert to floats
    for (let i = 0; i < this.rawData.length; i++) {
      for (let key in this.rawData[i]) {
        this.rawData[i][key] = parseFloat(this.rawData[i][key]);
      }
    }
  },
  computed: {
    key() {
      return `${this.keyPrefix}-${this.flavor}`;
    },
    names() {
      return ["Actual Change", "Projected Change"];
    },
    headerTitle() {
      let flavor = capitalize(this.flavor);
      return `Year-over-Year Change in Cash ${flavor}: Actual vs. Q${QUARTER} Projection`;
    },
    data() {
      let datasets = [];
      for (let i = 0; i < this.names.length; i++) {
        let name = this.names[i];
        datasets.push({
          label: name,
          data: this.rawData.map((d) => d[name]),
          fill: false,
          borderColor: name == "Actual Change" ? "#25cef7" : "#666",
          tension: 0.1,
          borderWidth: 4,
          borderDash: name == "Actual Change" ? [] : [20, 5],
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

                  let percentChange = this.formatPercent(
                    this.rawData[context.dataIndex][
                      context.dataset.label + " (Percent)"
                    ]
                  );
                  label += ` (${percentChange})`;
                }
                return label;
              },
            },
          },
        },
        scales: {
          x: {
            offset: true,
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
        new Chart(ctx, {
          type: "line",
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
    formatPercent(value) {
      value *= 100;
      let out = `${value.toFixed(1)}%`;
      if (value > 0) out = "+" + out;
      return out;
    },
    getDownloadURL(key) {
      return getDownloadURL(key);
    },
  },
};
</script>

