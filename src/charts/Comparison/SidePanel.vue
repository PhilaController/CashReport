<template>
  <div
    class="
      side-panel
      d-flex
      justify-content-between
      align-items-center
      flex-column
      w-100
    "
  >
    <div class="text-center">{{ title }}</div>
    <div
      class="
        d-flex
        justify-content-center
        align-items-center
        flex-column
        baseline-total
      "
      v-if="data !== null"
    >
      <div class="text-center mb-2">{{ labels.baseline }}</div>
      <div>{{ formatFunction(annualTotals.baseline) }}</div>
    </div>
    <div
      class="
        d-flex
        justify-content-center
        align-items-center
        flex-column
        comparison-total
      "
      v-if="data !== null"
    >
      <div :class="signClass">{{ formatFunction(Math.abs(change)) }}</div>
      <div class="text-center comparison-label">{{ labels.comparison }}</div>
    </div>
  </div>
</template>

<script>
import { formatFunction, capitalize } from "@/utils";

import { sum } from "d3-array";
import { QUARTER } from "@/config";

export default {
  name: "SidePanel",
  props: [
    "selectedTimePeriod",
    "selectedComparison",
    "flavor",
    "data",
    "dataColumns",
  ],
  methods: {
    formatFunction(value) {
      return formatFunction(value);
    },
  },
  computed: {
    annualTotals() {
      //   Fund balance: get June
      if (this.flavor == "fund-balance") {
        let d = this.data.filter((d) => d.Month == "Jun")[0];
        return {
          baseline: parseFloat(d[this.dataColumns.baseline]),
          comparison: parseFloat(d[this.dataColumns.comparison]),
        };
      }
      //   Revenue/Spending: Sum over all months
      else {
        return {
          baseline: sum(this.data, (d) =>
            parseFloat(d[this.dataColumns.baseline])
          ),
          comparison: sum(this.data, (d) =>
            parseFloat(d[this.dataColumns.comparison])
          ),
        };
      }
    },
    change() {
      return this.annualTotals.baseline - this.annualTotals.comparison;
    },
    labels() {
      // Label for the baseline
      let baseline = this.dataColumns.baseline;
      if (this.selectedTimePeriod == "quarter") {
        baseline += " Actual";
      } else if (QUARTER < 4) {
        baseline += " Projection";
      } else {
        baseline += " Actual";
      }

      // Label for the baseline comparison
      let comparison = this.change < 0 ? "less" : "more";
      if (this.selectedComparison == "quarter") {
        comparison += ` than the ${this.dataColumns.comparison} projection`;
      } else {
        comparison += ` than ${this.dataColumns.comparison}`;
      }

      return { comparison: comparison, baseline: baseline };
    },
    signClass: function () {
      return this.change < 0 ? "negative" : "positive";
    },
    title: function () {
      if (this.flavor === "fund-balance") {
        if (this.selectedTimePeriod === "quarter" && QUARTER < 4)
          return `Ending Q${QUARTER} Balance`;
        else return "Ending Fiscal Year Balance";
      } else {
        if (this.selectedTimePeriod === "quarter") {
          return `Total Q${QUARTER} ${capitalize(this.flavor)}`;
        } else return `Total Fiscal Year ${capitalize(this.flavor)}`;
      }
    },
  },
};
</script>

<style>
.side-panel {
  margin-top: 3%;
  margin-bottom: 5%;
  font-size: 2rem;
  font-weight: 500;
  padding-left: 1.25rem;
}

.side-panel .comparison-label {
  font-size: 1.7rem;
  line-height: 1;
}

.positive {
  color: #3a833c;
}
.negative {
  color: #cc3000;
}
.side-panel {
  line-height: 1.1;
}
@media screen and (max-width: 600px) {
  .side-panel {
    font-size: 1.7rem;
    min-height: 225px;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .side-panel .comparison-label {
    font-size: 1.4rem;
  }
}
</style>

