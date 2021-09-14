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
        {{ headerTitle }}
      </div>
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

      <!-- The chart wrapper -->
      <div :style="{ height: height + 'px' }">
        <!-- The Canvas -->
        <canvas ref="chartRef" :aria-label="headerTitle" role="img">
          <table v-if="rawData !== null">
            <caption>
              Scatter chart of final modified accrual balance vs. Q4 cash
              balance for the General Fund
            </caption>
            <!-- Header -->
            <thead>
              <tr>
                <th scope="col">Modified Accrual Fund Balance</th>
                <th scope="col">Q4 Cash Fund Balance</th>
              </tr>
            </thead>
            <!-- Body -->
            <tbody>
              <tr
                v-for="(label, rowIndex) in data.labels"
                :key="`row-header-${rowIndex}`"
              >
                <th scope="row">{{ label }}</th>
                <td>
                  {{ formatFunction(data.datasets[0].data[rowIndex].y) }}
                </td>
                <td>
                  {{ formatFunction(data.datasets[0].data[rowIndex].x) }}
                </td>
              </tr>
            </tbody>
          </table>
          <p v-if="rawData !== null">
            {{ a11ySummary }}
          </p>
        </canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import {
  fetch,
  formatFunction,
  getDownloadURL,
  getFiscalYearTag,
} from "@/utils";
import { FISCAL_YEAR } from "@/config";

export default {
  name: "FundBalanceRevisions",
  props: ["height"],
  data() {
    return {
      key: "fund-balance-revisions",
      rawData: null,
      headerTitle:
        "Estimating the General Fund's Modified Accrual Balance from the Q4 Cash Balance",
    };
  },
  async created() {
    this.rawData = await fetch(this.key);
  },
  methods: {
    formatFunction(value, decimals = 1) {
      return formatFunction(value, decimals);
    },
    getDownloadURL(key) {
      return getDownloadURL(key);
    },
  },
  computed: {
    currentQ4CashBalance() {
      return this.rawData.filter((d) => d["Fiscal Year"] == FISCAL_YEAR)[0][
        "Q4 Cash Balance"
      ];
    },
    a11ySummary() {
      let q4CashBalance = this.formatFunction(this.currentQ4CashBalance);
      let lowerEstimate = this.formatFunction(this.data.datasets[1].data[0].y);
      let upperEstimate = this.formatFunction(this.data.datasets[1].data[1].y);
      return `For fiscal year ${FISCAL_YEAR}, the Q4 cash balance for the General Fund is 
            ${q4CashBalance}. With this Q4 cash balance, the lower and upper estimates for 
            the General Fund's final modified accrual balance are
            ${lowerEstimate} and ${upperEstimate}, respectively.`;
    },
    options() {
      let q4_cash_balance = this.currentQ4CashBalance;

      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          annotation: {
            annotations: {
              line1: {
                type: "line",
                scaleID: "x",
                value: q4_cash_balance,
                borderColor: "#cc3000",
                borderWidth: 4,
                drawTime: "beforeDatasetsDraw",
                label: {
                  content: "FY21 Q4 Cash Balance",
                  enabled: true,
                  rotation: -90,
                  backgroundColor: "#fff",
                  color: "#000",
                  xAdjust: !this.$vuetify.breakpoint.mobile ? -15 : 0,
                  yAdjust: 70,
                  font: { size: 16 },
                },
              },
            },
          },
          legend: {
            onClick: () => {},
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
              title: (ctx) => {
                let datasetIndex = ctx[0].datasetIndex;
                let fiscalYear = this.rawData[ctx[0].dataIndex]["Fiscal Year"];
                if (datasetIndex == 0) {
                  let value = this.formatFunction(ctx[0].parsed.x);
                  return `${getFiscalYearTag(
                    fiscalYear
                  )} Q4 Cash Balance: ${value}`;
                } else {
                  let prefix = ctx[0].dataIndex == 0 ? "Lower" : "Upper";
                  return `${getFiscalYearTag(FISCAL_YEAR)} ${prefix} Estimate`;
                }
              },
              label: (context) => {
                let label = " Modified Accrual Balance: ";
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
            title: {
              text: "Q4 Cash Balance",
              display: true,
              font: { size: 16 },
            },
            type: "linear",
            bounds: !this.$vuetify.breakpoint.mobile ? "ticks" : "data",
            grid: {
              lineWidth: 1,
              color: function (context) {
                if (context.tick.value == 0) {
                  return "#212121";
                }

                return "#cfcfcf";
              },
            },
            ticks: {
              font: { size: 16 },
              // eslint-disable-next-line
              callback: (value, index, values) => {
                return this.formatFunction(value, 0);
              },
            },
          },
          y: {
            title: {
              text: "Modified Accrual Balance",
              display: true,
              font: { size: 16 },
            },
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

      let d = this.rawData.filter((d) => d["Fiscal Year"] < FISCAL_YEAR);
      let name = "Q1 Actual";

      // Historical data points
      datasets.push({
        label: `Historical Values from FY07 to ${getFiscalYearTag(
          FISCAL_YEAR - 1
        )}`,
        data: d.map((d) => {
          return { x: d["Q4 Cash Balance"], y: d[name] };
        }),
        fill: false,
        borderWidth: 0,
        borderColor: "#666666",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
        pointRadius: 5,
        pointHoverRadius: 7,
      });

      //   Select current fiscal year
      d = this.rawData.filter((d) => d["Fiscal Year"] == FISCAL_YEAR)[0];
      let names = ["Q1 Actual (Lower Estimate)", "Q1 Actual (Upper Estimate)"];
      let data = [];
      for (let i = 0; i < names.length; i++) {
        data.push({ x: d["Q4 Cash Balance"], y: d[names[i]] });
      }

      // Current data points
      datasets.push({
        label: `Estimate for ${getFiscalYearTag(FISCAL_YEAR)}`,
        data: data,
        borderWidth: 0,
        borderColor: "#cc3000",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
        pointRadius: 7,
        pointHoverRadius: 7,
      });

      return {
        labels: this.rawData
          .map((d) => d["Fiscal Year"])
          .filter((d) => d < FISCAL_YEAR),
        datasets: datasets,
      };
    },
  },
  watch: {
    rawData(newData) {
      if (newData !== null) {
        // Chart context
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
</style>