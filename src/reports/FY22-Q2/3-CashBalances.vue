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
      The Consolidated Cash balance at the end of FY22 Q2 was $2,000M, an
      increase from $1,460M at the end of FY21 Q2. This year-over-year growth
      was largely driven by an increase in the Grants Fund balance, which grew
      from $197M in FY21 Q2 to $788M in FY22 Q2. This increase reflects the
      influx of federal COVID-19 relief funding, including the first half of the
      City’s $1.4B allocation from the ARP during FY21 Q4.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      The General Fund balance decreased from a high of $862M in FY21 Q2 to
      $665M in FY22 Q2 (a $197M decrease). Most of this decline is due to the
      City’s issuance of a $300M Tax and Revenue Anticipation Note during FY21
      Q1, which boosted the cash fund balance relative to FY22 when no such
      borrowing was made. The Capital Fund balance increased from $235M in FY21
      Q2 to $445M in FY22 Q2 following the issuance of $295M in bond proceeds
      for capital projects during the first quarter of FY22.
    </p>

    <p>
      The City is currently projecting a historically high fiscal-year-end
      Consolidated Cash balance of $2,577M, a $371M increase from the year-end
      cash balance of FY21. This is due to higher projections for the year-end
      cash balances for the Grants Fund ($1,199M in FY22 vs. $950M in FY21) and
      Capital Fund ($385M in FY22 vs. $147M in FY21). The General Fund is
      projected to end the fiscal year with a balance of $888M, a decline of
      $93M relative to the ending balance in FY21.
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (FY22 Q2)
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

