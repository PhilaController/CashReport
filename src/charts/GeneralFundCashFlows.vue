<template>
  <div class="card border-dark">
    <!-- Card Header -->
    <div class="card-header border-dark d-flex flex-column">
      <!-- Title -->
      <div class="header-title">{{ headerTitle }}</div>

      <!-- Subtitle -->
      <div class="header-subtitle mt-3">
        When revenues exceed expenditures, the General Fund cash balance
        <span class="font-weight-bold" :style="{ color: '#000' }"
          >increases</span
        >. When revenues fall below expenditures, the General Fund cash balance
        <span class="font-weight-bold" :style="{ color: '#c30000' }"
          >decreases</span
        >.
      </div>
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
            caption="Annual totals for cash revenue and spending for the General Fund in billions by fiscal year."
            :formatFunction="(d) => formatFunction(d, 2)"
          />
        </canvas>
      </div>
    </div>
  </div>
</template>

<script>
import { Chart } from "chart.js";
import { fetch, getDownloadURL } from "@/utils";
import a11yTable from "@/components/a11yTable";

const COLORS = {
  Revenue: "#000000",
  Expenditures: "#c30000",
};

export default {
  props: ["height"],
  components: { a11yTable },
  data: () => ({
    rawData: null,
    chart: null,
    key: "general-fund-cash-flows",
    names: ["Revenue", "Expenditures"],
    headerTitle: "Annual General Fund Cash Flows",
  }),
  async created() {
    this.rawData = await fetch(this.key);
  },
  computed: {
    data() {
      let datasets = [];
      for (let i = 0; i < this.names.length; i++) {
        let name = this.names[i];
        datasets.push({
          label: name,
          data: this.rawData.map((d) => d[name]),
          fill: {
            below: "#b3b2b3",
            above: "#f0bab7",
            target: "-1",
          },
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
    options() {
      return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
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
                  label += this.formatFunction(context.parsed.y, 2);
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
            ticks: {
              font: { size: 16 },
            },
          },
          y: {
            offset: true,
            ticks: {
              font: { size: 16 },
              //eslint-disable-next-line
              callback: (value, index, values) => {
                return this.formatFunction(value);
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
      return "$" + value.toFixed(decimals) + "B";
    },
    getDownloadURL(key) {
      return getDownloadURL(key);
    },
  },
};
</script>

