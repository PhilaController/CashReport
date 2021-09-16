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
      The Consolidated Cash balance at the end of FY21 Q1 was $2,043M, an
      increase from $1,518M at the end of FY20 Q1. The General Fund’s Q1 balance
      was also higher: $1,282M in FY21 as compared to $908M in FY20.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      The City issued a $300M Tax and Revenue Anticipation Note (TRAN) in FY21
      Q1, contributing to higher fund balances at the end of Q1 relative to
      FY20. To offset seasonal trends in General Fund revenues and expenditures
      and to improve its cash position, the City often borrows short-term funds,
      known as TRANs. The City typically has borrowed these funds during the
      first half of each fiscal year, which it then repays before the close of
      the year. For example, the City last issued a TRAN in December of FY18,
      which raised the General Fund balance by $125M. It then repaid this note
      in May 2018. The City’s $300M borrowing in FY21 is the largest TRAN amount
      since FY09, when the City borrowed $350M during the Great Recession.
    </p>

    <p>
      The Consolidated Cash balance is also higher in FY21 Q1 compared to FY20
      Q1 due to an increase in the balance of the Grants Fund. At the end of
      FY21 Q1, the Grants Fund had a balance of $317M, a significant increase
      over FY20 Q1’s ending balance of $25M. The City has received an increase
      in grant funding as part of the response to the COVID-19 pandemic, which
      has contributed to the historically high Grants Fund balance.
    </p>

    <p>
      The City is currently projecting a fiscal-year-end Consolidated Cash
      balance of $723M, a 48 percent decrease from the year-end cash balance of
      FY20. This is due to lower projections for the year-end cash balances for
      the General Fund ($598M in FY21 vs. $759M in FY20), Grants Fund (−$87M in
      FY21 vs. 162M in FY20), and Capital Fund ($130M in FY21 vs. $309M in
      FY20).
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (FY21 Q1)
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

