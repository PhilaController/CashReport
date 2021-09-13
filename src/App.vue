<template>
  <v-app>
    <v-main>
      <!-- 1. Introduction -->
      <Intro />

      <!-- 2. Key Takeaways -->
      <KeyTakeaways />

      <!-- 3. Cash Balances -->
      <CashBalances />

      <!-- 4. General Fund -->
      <GeneralFund />

      <!-- 5. Conclusion -->
      <Conclusion />

      <!-- 6. Footnotes -->
      <Footnotes />
    </v-main>
  </v-app>
</template>

<script>
import Intro from "@/sections/1-Intro";
import KeyTakeaways from "@/sections/2-KeyTakeaways";
import CashBalances from "@/sections/3-CashBalances";
import GeneralFund from "@/sections/4-GeneralFund";
import Conclusion from "@/sections/5-Conclusion";
import Footnotes from "@/sections/6-Footnotes";

export default {
  name: "CashReportApp",

  components: {
    Intro,
    KeyTakeaways,
    CashBalances,
    GeneralFund,
    Conclusion,
    Footnotes,
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