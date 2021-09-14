<template>
  <v-app>
    <v-main>
      <!-- <Intro />
      <KeyTakeaways />
      <CashBalances />
      <GeneralFund />
      <Conclusion />
      <Footnotes /> -->

      <FundBalanceProjectionAccuracy :height="450" />
      <CashTotalsProjectionAccuracy
        class="mt-5"
        :height="450"
        flavor="revenue"
      />
      <CashTotalsProjectionAccuracy
        class="mt-5"
        :height="450"
        flavor="spending"
      />
    </v-main>
  </v-app>
</template>

<script>
// import Intro from "@/sections/1-Intro";
// import KeyTakeaways from "@/sections/2-KeyTakeaways";
// import CashBalances from "@/sections/3-CashBalances";
// import GeneralFund from "@/sections/4-GeneralFund";
// import Conclusion from "@/sections/5-Conclusion";
// import Footnotes from "@/sections/6-Footnotes";
import FundBalanceProjectionAccuracy from "@/charts/FundBalanceProjectionAccuracy";
import CashTotalsProjectionAccuracy from "@/charts/CashTotalsProjectionAccuracy";

export default {
  name: "CashReportApp",

  components: {
    FundBalanceProjectionAccuracy,
    CashTotalsProjectionAccuracy,
    // Intro,
    // KeyTakeaways,
    // CashBalances,
    // GeneralFund,
    // Conclusion,
    // Footnotes,
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
.section {
  margin-top: 2.5rem;
}
</style>