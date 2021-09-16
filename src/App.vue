<template>
  <v-app>
    <v-main>
      <!-- FY21 -->
      <FY21Q4 v-if="reportTag == 'FY21-Q4'" />
      <FY21Q3 v-if="reportTag == 'FY21-Q3'" />
      <FY21Q2 v-if="reportTag == 'FY21-Q2'" />
      <FY21Q1 v-if="reportTag == 'FY21-Q1'" />

      <!-- FY20 -->
      <FY20Q4 v-if="reportTag == 'FY20-Q4'" />
      <FY20Q2 v-if="reportTag == 'FY20-Q2'" />
      <FY20Q1 v-if="reportTag == 'FY20-Q1'" />

      <!-- FY19 -->
      <FY19Q4 v-if="reportTag == 'FY19-Q4'" />
      <FY19Q3 v-if="reportTag == 'FY19-Q3'" />
      <FY19Q2 v-if="reportTag == 'FY19-Q2'" />
      <FY19Q1 v-if="reportTag == 'FY19-Q1'" />

      <!-- FY18 -->
      <FY18Q4 v-if="reportTag == 'FY18-Q4'" />
    </v-main>
  </v-app>
</template>

<script>
// FY21
import FY21Q4 from "@/reports/FY21-Q4";
import FY21Q3 from "@/reports/FY21-Q3";
import FY21Q2 from "@/reports/FY21-Q2";
import FY21Q1 from "@/reports/FY21-Q1";

// FY20
import FY20Q4 from "@/reports/FY20-Q4";
import FY20Q2 from "@/reports/FY20-Q2";
import FY20Q1 from "@/reports/FY20-Q1";

// FY19
import FY19Q4 from "@/reports/FY19-Q4";
import FY19Q3 from "@/reports/FY19-Q3";
import FY19Q2 from "@/reports/FY19-Q2";
import FY19Q1 from "@/reports/FY19-Q1";

// FY18
import FY18Q4 from "@/reports/FY18-Q4";

// Utils
import { getReportTag } from "@/utils/";

export default {
  name: "CashReportApp",
  data() {
    return { reportTag: getReportTag() };
  },
  components: {
    FY21Q4,
    FY21Q3,
    FY21Q2,
    FY21Q1,
    FY20Q4,
    FY20Q2,
    FY20Q1,
    FY19Q4,
    FY19Q3,
    FY19Q2,
    FY19Q1,
    FY18Q4,
  },
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
.section:nth-child(n + 2) {
  margin-top: 2.5rem;
}
</style>