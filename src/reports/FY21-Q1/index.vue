<template>
  <div>
    <Intro />
    <KeyTakeaways />
    <CashBalances />
    <GeneralFund />
  </div>
</template>

<script>
import Intro from "./1-Intro";
import KeyTakeaways from "./2-KeyTakeaways";
import CashBalances from "./3-CashBalances";
import GeneralFund from "./4-GeneralFund";

export default {
  components: {
    Intro,
    KeyTakeaways,
    CashBalances,
    GeneralFund,
  },
};
</script>

