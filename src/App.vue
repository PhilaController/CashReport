<template>
  <v-app>
    <v-main>
      <FY21Q4 v-if="reportTag == 'FY21-Q4'" />
      <FY21Q3 v-if="reportTag == 'FY21-Q3'" />
    </v-main>
  </v-app>
</template>

<script>
import FY21Q4 from "@/reports/FY21-Q4";
import FY21Q3 from "@/reports/FY21-Q3";
import { getReportTag } from "@/utils/";

export default {
  name: "CashReportApp",
  data() {
    return { reportTag: getReportTag() };
  },
  components: { FY21Q4, FY21Q3 },
};
</script>

<style>
.header-title {
  font-size: 1.7rem;
  font-family: inherit;
  font-weight: 500;
  margin-right: 1rem;
}
.header-subtitle {
  font-style: italic;
  font-size: 1rem;
}
.card-footer {
  font-size: 0.9rem;
}
.section {
  margin-top: 2.5rem;
}
</style>