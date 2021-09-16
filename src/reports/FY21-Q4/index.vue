<template>
  <div>
    <Intro />
    <KeyTakeaways />
    <CashBalances />
    <GeneralFund />
    <Conclusion />
    <Footnotes />
  </div>
</template>

<script>
import Intro from "./1-Intro";
import KeyTakeaways from "./2-KeyTakeaways";
import CashBalances from "./3-CashBalances";
import GeneralFund from "./4-GeneralFund";
import Conclusion from "./5-Conclusion";
import Footnotes from "./6-Footnotes";

export default {
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

