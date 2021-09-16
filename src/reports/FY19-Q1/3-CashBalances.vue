<template>
  <div id="cash-fund-balances" class="section">
    <h2>Cash Balances</h2>
    <hr class="titlebar" />

    <p>
      At the end of Fiscal Year 2018, the City’s cash levels were the highest of
      the last decade. This historically strong cash position has continued
      through the first quarter of Fiscal Year 2019. As shown below, the cash
      balance of the General Fund at the end of Q1 was $747M, the largest Q1
      General Fund cash balance in the last ten years. Similarly, the end-of-Q1
      balance for the combined cash account, called Consolidated Cash, was also
      the highest in ten years with a closing balance of $1.01B. The Q1 cash
      levels for the Capital and Grants Funds are more in line with historical
      norms. The Grants Fund, which is largely reimbursement-based, has had a
      negative Q1 balance in three of the last four years, but its balance
      remained positive at the end of FY19 Q1.
    </p>

    <!-- Q1 Fund Balances -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      Despite historically high Q1 balances, the year-end cash balances for the
      General Fund and Consolidated Cash are projected to be lower in FY19 than
      in FY18. The Q1 estimate for the year-end balance of the General Fund is
      $685M, or $84M below the FY18 closing balance. For Consolidated Cash, the
      planned year-end balance of $665M is $328M below the corresponding FY18
      value. These lower year-end balances in FY19 are due in large part to a 12
      percent increase in projected General Fund expenditures in FY19 relative
      to FY18. General Fund expenditures are discussed in detail later in this
      report.
    </p>

    <!-- Monthly Historical Balances -->
    <Comparison :height="350" flavor="fund-balance" />

    <p class="mt-5 pt-3">
      Projections, particularly after only the first quarter of the year, are
      uncertain and subject to change. Historically, the Q1 estimates for
      year-end balances of the General Fund and Consolidated Cash have been
      underestimated. The chart below shows the difference between the actual
      year-end cash balances and the Q1 projection since 2009. The Q1 projection
      for the year-end Consolidated Cash balance has been underestimated (black
      bars) in nine of the last ten years by an average amount of $135M.
      Similarly, actual year-end General Fund cash balances were higher than the
      Q1 projection in eight of the last ten years, by an average amount of
      $131M. In FY18, the actual year-end balances of Consolidated Cash and the
      General Fund exceeded the Q1 projection by $375M and $236M, respectively.
    </p>

    <!-- Accuracy of Fund Balance Projections -->
    <FundBalanceProjectionAccuracy :height="400" />
  </div>
</template>

<script>
import HistoricalBalances from "@/charts/HistoricalBalances";
import Comparison from "@/charts/Comparison";
import FundBalanceProjectionAccuracy from "@/charts/FundBalanceProjectionAccuracy";

export default {
  name: "CashBalances",
  components: { HistoricalBalances, Comparison, FundBalanceProjectionAccuracy },
};
</script>

