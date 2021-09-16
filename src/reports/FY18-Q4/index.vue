<template>
  <div>
    <Intro />
    <CashBalances />
    <GeneralFund />
    <Conclusion />
  </div>
</template>

<script>
import Intro from "./1-Intro";
import CashBalances from "./3-CashBalances";
import GeneralFund from "./4-GeneralFund";
import Conclusion from "./5-Conclusion";

export default {
  components: {
    Intro,
    CashBalances,
    GeneralFund,
    Conclusion,
  },
};
</script>

