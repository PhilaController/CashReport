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
      The Consolidated Cash balance at the end of FY19 Q3 was $770.6M, down from
      $890.4M at the end of FY18 Q3. The General Fund balance shows a similar
      trend: this year’s end-of-Q3 balance of $548.4M is $14.1M lower than last
      year’s Q3 balance. As noted in
      <a
        href="https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2019-q2/"
        target="_blank"
        >last quarter’s cash report</a
      >, this year’s lower balances are driven primarily by two factors:
      increased Capital spending due to the financial cycle of the Capital Fund
      and the City’s decision not to issue a Tax and Revenue Anticipation Note
      (TRAN) this year.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />
    <p class="mt-5 pt-3">
      While lower than last fiscal year, the City’s cash levels following FY19
      Q3 are higher than anticipated. The FY19 Q3 Consolidated Cash balance
      exceeded projections from last quarter by $299.2M. This increase is the
      result of higher than anticipated balances for the Grants Fund (+$224.2M)
      and the General Fund (+$63.3M).
    </p>

    <p>
      The projected end-of-year balance for the General Fund is $843.2M, about
      $74M (10 percent) larger than last fiscal year’s ending balance and the
      largest end-of-year balance in more than ten years. This represents an
      increase of $190.1M from last quarter’s end-of-year projection.
    </p>
    <p>
      The projected end-of-year balance for Consolidated Cash is $832.4M,
      revised upwards by $197.3M since last quarter, but down slightly from last
      year’s ending balance of $993.4M. However, this projection uses a
      conservative estimate for the Grants Fund balance, and as such, the
      Consolidated Cash account’s actual balance will likely exceed its current
      projection. For context, while the FY18 Q3 end-of-year projection for the
      Grants Fund was negative $119.4M, the actual balance at the close of FY18
      was positive $7.2M.
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (Q3) or for
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

