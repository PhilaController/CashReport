<template>
  <div class="card border-dark" id="monthlyTotalsCard">
    <!-- Card Header -->
    <div class="card-header border-dark d-flex flex-column">
      <!-- Title -->
      <div class="header-title">Monthly General Fund Cash Totals</div>
    </div>

    <!-- Main Chart Area-->
    <div class="card-body">
      <!-- Downlaod button -->
      <div class="download-button-wrapper d-flex">
        <v-btn
          v-for="(key, index) in datasetNames"
          :key="index"
          outlined
          :href="getDownloadURL(key)"
          aria-label="Download data as CSV file"
          class="ml-3"
          >{{ dataColumns[key] }}<i class="ml-1 fas fa-lg fa-download"></i
        ></v-btn>
      </div>

      <!-- Revenue Chart -->
      <div class="subtitle">Revenue</div>
      <Chart :height="height" kind="revenue" :rawData="selectedRevenueData" />

      <!-- Spending Chart -->
      <div class="subtitle mt-5">Expenditures</div>
      <Chart
        class="mt-5"
        :height="height"
        kind="spending"
        :rawData="selectedSpendingData"
      />

      <!-- Slider -->
      <div class="slider-description mt-5">
        Viewing data for {{ startDate }} through {{ endDate }}
      </div>
      <v-range-slider
        v-if="rawData['revenue'] !== null"
        class="mt-5 ml-5 mr-5"
        v-model="sliderRange"
        hint="Select a date range to view"
        persistent-hint
        :max="maxDate.getTime()"
        :min="minDate.getTime()"
      ></v-range-slider>
    </div>
  </div>
</template>


<script>
import Chart from "./Chart.vue";
import { getDownloadURL, fetch } from "@/utils";
import { min, max } from "d3-array";
import { differenceInMonths, format } from "date-fns";

export default {
  props: ["height"],
  components: { Chart },
  data() {
    return {
      datasetNames: ["revenue", "spending"],
      dataColumns: { revenue: "Revenue", spending: "Expenditures" },
      rawData: { revenue: null, spending: null },
      sliderRange: [null, null],
    };
  },
  async created() {
    this.rawData["revenue"] = await fetch(this.makeKey("revenue"));
    this.rawData["spending"] = await fetch(this.makeKey("spending"));

    // Set the default
    this.sliderRange = [this.minDate.getTime(), this.maxDate.getTime()];
  },
  computed: {
    minDate() {
      return new Date(min(this.rawData.revenue, (d) => d.Date));
    },
    maxDate() {
      return new Date(max(this.rawData.revenue, (d) => d.Date));
    },
    startDate() {
      return format(new Date(this.sliderRange[0]), "MMM y");
    },
    endDate() {
      return format(new Date(this.sliderRange[1]), "MMM y");
    },
    startDateIndex() {
      if (this.rawData.revenue !== null) {
        return differenceInMonths(this.sliderRange[0], this.minDate) + 1;
      }
      return 0;
    },
    endDateIndex() {
      if (this.rawData.revenue !== null) {
        return differenceInMonths(this.maxDate, this.sliderRange[1]);
      }
      return 0;
    },
    selectedRevenueData() {
      return this.getSelectedData("revenue");
    },
    selectedSpendingData() {
      return this.getSelectedData("spending");
    },
  },
  methods: {
    getSelectedData(key) {
      let d = this.rawData[key];
      if (d == null) return null;
      if (this.endDateIndex == 0) {
        return d.slice(this.startDateIndex);
      } else return d.slice(this.startDateIndex, -this.endDateIndex);
    },
    makeKey(key) {
      return `monthly-cash-totals-${key}`;
    },
    getDownloadURL(key) {
      return getDownloadURL(this.makeKey(key));
    },
  },
};
</script>

<style>
#monthlyTotalsCard .subtitle {
  font-size: 1.5rem;
  font-weight: 500;
}
#monthlyTotalsCard .slider-description {
  font-size: 1rem;
  font-style: italic;
}

#monthlyTotalsCard .download-button-wrapper {
  flex-direction: row;
  justify-content: flex-end;
}

@media screen and (max-width: 600px) {
  #monthlyTotalsCard .download-button-wrapper {
    flex-direction: column !important;
    justify-content: center;
  }
  #monthlyTotalsCard a:nth-child(2) {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
}
</style>