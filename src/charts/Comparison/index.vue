<template>
  <div class="card border-dark comparison-chart-wrapper w-100">
    <div
      class="card-header border-dark d-flex justify-content-between flex-column"
    >
      <!-- Title -->
      <div class="header-title">
        {{ title }}
      </div>

      <!-- Toolbar -->
      <div class="mt-5 toolbar">
        <v-select
          v-model="selectedDataCategory"
          :items="allowedDataCategories"
          :label="dataCategoryLabel"
          outlined
          dense
          hide-details
          class="data-category-select"
        ></v-select>
        <v-spacer />
        <v-select
          v-model="selectedComparison"
          :items="allowedComparisons"
          label="Compare To"
          outlined
          dense
          hide-details
          class="comparison-select"
        ></v-select>

        <!-- Spacer -->
        <v-spacer />

        <!-- Time period toggle -->
        <v-btn-toggle
          class="time-period-toggle"
          v-model="timePeriodToggle"
          mandatory
          dense
        >
          <v-btn
            class="h-100"
            :ripple="false"
            aria-label="Show data for full fiscal year"
          >
            Fiscal Year
          </v-btn>
          <v-btn
            class="h-100"
            :ripple="false"
            :aria-label="`Show data for quarter ${quarter} only`"
          >
            Q{{ quarter }} Only
          </v-btn>
        </v-btn-toggle>
      </div>
    </div>

    <!-- Card body -->
    <div class="card-body">
      <!-- Chart -->
      <ComparisonChart
        class="comparison-chart"
        :rawData="selectedData"
        :dataColumns="dataColumns"
        :mainColor="mainColor"
        :height="height"
        :download-key="downloadKey"
        :title="title"
      />

      <!-- Divider -->
      <div class="vl"></div>

      <!-- Side Panel -->
      <SidePanel
        class="side-panel"
        :data="selectedData"
        :selectedTimePeriod="selectedTimePeriod"
        :selectedComparison="selectedComparison"
        :flavor="flavor"
        :dataColumns="dataColumns"
      />
    </div>

    <!-- Footer -->
    <div class="card-footer">
      <div class="font-italic">
        Note: Projected values are shown as a dashed line, while actual values
        are indicated with a solid line.
      </div>
    </div>
  </div>
</template>

<script>
import {
  getDataCategories,
  fetch,
  getFiscalYearTag,
  getFiscalQuarterTag,
  getMonths,
  capitalize,
} from "@/utils";
import { QUARTER, FISCAL_YEAR } from "@/config";
import SidePanel from "./SidePanel";
import ComparisonChart from "./ComparisonChart";

export default {
  name: "Comparison",
  components: { SidePanel, ComparisonChart },
  props: ["flavor", "height"],
  data() {
    return {
      rawData: { "fiscal-year": null, quarter: null },
      quarter: QUARTER,
      allowedFlavors: ["fund-balance", "spending", "revenue"],
      allowedComparisons: [
        { value: "fiscal-year", text: "Last Fiscal Year" },
        { value: "quarter", text: "Last Quarter's Projection" },
      ],
      selectedComparison: "quarter",
      selectedDataCategory: "",
      timePeriodToggle: 0,
    };
  },
  async created() {
    //   Load the data for the fiscal year and quarter comparison
    let keys = this.allowedComparisons.map((c) => c.value);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let d = await fetch(`last-${key}-comparison-${this.flavor}`);
      this.rawData[key] = d;
    }
  },
  mounted() {
    //   Set the default data category
    this.selectedDataCategory = this.allowedDataCategories[0];
  },
  computed: {
    downloadKey() {
      let key = this.selectedComparison;
      return `last-${key}-comparison-${this.flavor}`;
    },
    mainColor() {
      // revenue is black
      if (this.flavor === "revenue") return "#000000";
      // expenditures are red
      else if (this.flavor === "spending") return "#cc3000";
      // color fund balance accordingly
      else {
        let colors = {
          "Grants Fund": "#f3c613",
          "Total Capital Funds": "#f99300",
          "General Fund": "#2176d2",
          "Consolidated Cash": "#58c04d",
        };
        return colors[this.selectedDataCategory];
      }
    },
    selectedData() {
      // Which comparison are we doing>
      let d = this.rawData[this.selectedComparison];

      //   Data has been loaded yet
      if (d === null) return null;

      // Filter by the category
      d = d.filter((d) => d.Name == this.selectedDataCategory);

      // Optionally filter by the month
      if (this.selectedTimePeriod == "quarter") {
        let months = getMonths(QUARTER);
        d = d.filter((d) => months.indexOf(d.Month) !== -1);
      }
      return d;
    },
    dataColumns() {
      // Initialize an empty array to return
      let out = { baseline: null, comparison: null };

      //
      if (this.selectedComparison == "quarter") {
        out.baseline = getFiscalQuarterTag(FISCAL_YEAR, QUARTER);
        out.comparison = getFiscalQuarterTag(FISCAL_YEAR, QUARTER - 1);
      } else {
        out.baseline = getFiscalYearTag(FISCAL_YEAR);
        out.comparison = getFiscalYearTag(FISCAL_YEAR - 1);
      }
      return out;
    },
    selectedTimePeriod() {
      return ["fiscal-year", "quarter"][this.timePeriodToggle];
    },
    dataCategoryLabel() {
      if (this.flavor == "fund-balance") return "Select Fund";
      else return `Select ${capitalize(this.flavor)} Category`;
    },
    allowedDataCategories() {
      return getDataCategories(this.flavor);
    },
    title() {
      let start = {
        "fund-balance": "Monthly Cash Balances",
        spending: "Monthly General Fund Cash Spending",
        revenue: "Monthly General Fund Cash Revenue",
      };
      let end = {
        quarter: "Quarter's Projection",
        "fiscal-year": "Fiscal Year",
      };

      start = start[this.flavor];
      end = end[this.selectedComparison];

      return `${start} vs. Last ${end}`;
    },
  },
};
</script>

<style>
.comparison-chart-wrapper input {
  background-color: transparent !important;
  border-width: 0px !important;
}
div.v-list-item__title {
  font-size: 1rem !important;
}
.comparison-select {
  width: 30%;
}
.data-category-select {
  width: 30%;
}

.comparison-chart {
  width: 70% !important;
}
.side-panel {
  width: 30% !important;
}

.vl {
  border-left: 1px solid #343a40;
  margin-top: -1.25rem;
  margin-bottom: -1.25rem;
  margin-left: 1rem;
}

.toolbar {
  display: flex;
  flex-direction: row;
}

.comparison-chart-wrapper .card-body {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 600px) {
  /* Toolbar */
  .toolbar {
    flex-direction: column;
  }
  .comparison-select {
    width: 100%;
    margin-bottom: 20px !important;
  }
  .data-category-select {
    width: 100%;
    margin-bottom: 20px !important;
  }
  .time-period-toggle {
    height: 40px !important;
    width: 100% !important;
  }
  .time-period-toggle button {
    width: 50% !important;
  }

  /* Body layout */
  .comparison-chart-wrapper .card-body {
    flex-direction: column;
  }
  .comparison-chart-wrapper .card-body .comparison-chart {
    width: 100%;
  }

  /* Vertical Line */
  .vl {
    border-bottom: 1px solid #343a40;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .comparison-chart {
    width: 100% !important;
  }
  .side-panel {
    width: 100% !important;
  }
}
</style>