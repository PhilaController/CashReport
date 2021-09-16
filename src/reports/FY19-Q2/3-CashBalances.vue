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
      The Consolidated Cash balance at the end of FY19 Q2 was $643.4M, down from
      $798.1M at the end of FY18 Q2. The General Fund’s Q2 balance was also
      lower: $515.8M in FY19 as compared to $570.6M in FY18.
    </p>
    <p>
      The first reason for the lower Consolidated Cash balance is that the
      Capital Fund ended FY19 Q2 with a balance $123M lower than the balance
      after FY18 Q2. This year-over-year change is typical of the Capital Fund’s
      financial cycle, as the City spends down its bond proceeds. The City would
      replenish this account with the expected issuance of new debt in FY20.
    </p>
    <p>
      The second reason for the lower Consolidated Cash balance is a lower
      General Fund balance as a result of the City not issuing a Tax and Revenue
      Anticipation Note (TRAN) during the last quarter. To offset seasonal
      trends in General Fund revenues and expenditures and to improve its cash
      position, the City often borrows short-term funds, known as TRANs. The
      City typically has borrowed these funds during the second quarter of each
      fiscal year, which it then repays before the close of the year. For
      example, the City last issued a TRAN in December of FY18, which raised the
      General Fund balance by $125M. It then repaid this note in May 2018.
    </p>
    <p>
      For the first time in more than ten years, however, the City has not
      issued a TRAN in FY19 due to the City’s historically strong cash position.
      As seen in the chart below, the General Fund balance for FY19 Q2 is the
      highest Q2 balance in more than ten years when excluding the financial
      impact of TRANs on previous Q2 General Fund balances. The Consolidated
      Cash balance at the end of FY19 Q2 is slightly lower than last fiscal
      year’s Q2 balance, after accounting for the impact of last year’s TRAN.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      The City’s cash levels following Q2 of this fiscal year are higher than
      anticipated. In particular, the Consolidated Cash balance of $643.M was
      $174M higher than the City’s projection following the first quarter of the
      fiscal year. The larger Consolidated Cash balance resulted from
      higher-than-expected balances for the General Fund (+$60M) and the Grants
      Fund (+$109M) relative to the City’s Q1 projection.
    </p>

    <p>
      Despite the higher-than-expected Consolidated Cash position, the City
      anticipates the year-end cash balance to be lower than the Q1 projection
      by about $30M. This is due in part to adjustments to General Fund revenue
      and expenditure projections for the second half of the fiscal year.
      Relative to Q1 projections, the City has lowered its General Fund total
      cash receipts projections by a cumulative $57.5M for January to June FY19,
      while raising expenditure projections for that same period by $33.8M. The
      combination of these adjustments corresponds to a net decrease in the
      General Fund balance relative to the Q1 projection. The City’s projection
      for the year-end Grants Fund balance has remained unchanged, despite its
      end-of-Q2 balance outpacing projections by $109M. If this trend continues
      throughout the fiscal year, the Consolidated Cash balance would be higher
      than anticipated, meaning that the City’s current projections are likely
      underestimated.
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (Q2) or for
      all months of the fiscal year.
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

