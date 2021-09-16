<template>
  <div id="cash-fund-balances" class="section">
    <h2>Cash Balances</h2>
    <hr class="titlebar" />

    <p>
      The City publishes the monthly cash balance, actual and projected, for
      each of its major funds, within the QCMR. For its day-to-day operations,
      the City pools together the cash balances associated with several funds
      into a single account, known as the Consolidated Cash account. Three major
      funds, listed below, and several smaller funds, including the Housing
      Trust and Hospital Assessment Funds, contribute to the Consolidated Cash
      account:
    </p>
    <ul>
      <li>
        the General Fund, which is the principal operating fund of the City.
        About three-quarters of the revenue flowing into the General Fund is
        generated from local taxes;
      </li>
      <li>
        the Grants Fund, which manages grants received from state, federal, and
        private agencies; and
      </li>
      <li>
        the Capital Fund, which manages resources for investing in facilities
        and infrastructure throughout the city. The majority of its revenue
        arises from bond proceeds.
      </li>
    </ul>

    <p>
      The City ended FY20 Q2 with a Consolidated Cash balance of $1.25B, which
      is more than $1B higher than the Q2 balance from just three fiscal years
      ago. The FY20 Q2 balance also increased significantly from last fiscal
      year, when the City ended FY19 Q2 with a Consolidated Cash balance of
      $643M.
    </p>
    <p>
      The increase in the Consolidated Cash balance is driven by historically
      high cash balances for the General Fund and the Capital Fund. As seen in
      the figure below, both funds have the highest end-of-Q2 balances since
      2007. As noted in the
      <a
        href="https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2020-q1"
        target="blank_"
        >cash report</a
      >
      for last quarter, the large Capital Fund balance is due in part to a debt
      borrowing totaling close to $300M that occurred during the first quarter
      of FY20. The Capital Fund’s balance of $397M at the end of FY20 Q2 is $39M
      lower than its balance at the end of FY20 Q1. The balance should continue
      to decline over the next year as capital projects for facilities and
      infrastructure across the city are undertaken.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      On trend with recent years, the City’s cash levels following FY20 Q2 were
      higher than anticipated. The Consolidated Cash balance ($1.25B) was
      $176.5M higher than the City’s projection following the first quarter,
      driven by higher-than-expected balances for the General Fund (+$120M) and
      the Grants Fund (+$43.4M). This also occurred last fiscal year: the actual
      FY19 Q2 balances for the General Fund and Grants Fund were $60M and $109M
      higher than their respective Q1 projections.
    </p>

    <p>
      The $120M difference between the actual FY20 Q2 General Fund balance and
      Q1 projection is the largest difference in recent history. The actual Q2
      balance for the General Fund has outpaced the City’s Q1 projection every
      year since FY15, an indication of the City’s tendency to produce
      conservative estimates for its fund balance projections.
    </p>

    <p>
      With its current cash levels higher than expected, the City also increased
      its projections for the year-end balances of the Consolidated Cash account
      (+$52M) and the General Fund (+$56M). As of FY20 Q2, the Consolidated Cash
      account is projected to end the year with a balance of $1.21B, while the
      General Fund is projected to end the year with a balance of $908M.
      However, it is worth noting that these Q2 projections have been
      historically conservative, underestimating the actual year-end balance by
      a significant margin. For example, last fiscal year, the Q2 projection for
      Consolidated Cash underestimated the actual year-end balance by $451M,
      while the Q2 General Fund projection was $313M below the actual year-end
      balance.
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (FY20 Q2)
      or for all months of the fiscal year.
    </p>

    <!-- CHART -->
    <Comparison :height="350" flavor="fund-balance" />
  </div>
</template>

<script>
import HistoricalBalances from "@/charts/HistoricalBalances";
import Comparison from "@/charts/Comparison";

export default {
  name: "CashBalances",
  components: { HistoricalBalances, Comparison },
};
</script>

