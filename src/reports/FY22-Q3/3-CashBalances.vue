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
      As seen in the figure below, the City’s cash balances for its three major
      funds, the General, Grants, and Capital Funds, ended FY22 Q3 at their
      highest end-of-Q3 levels since at least FY07. The cash balance for the
      Grants Fund continues to be at an all-time high due to the receipt of the
      first half of the City’s $1.4B allocation from the American Rescue Plan
      (ARP) during FY21. The City used its first portion of this funding during
      FY22 Q3, transferring $250M to the General Fund. This transfer contributed
      to the General Fund’s historically high end-of-Q3 balance of $975M. The
      Capital Fund balance increased from $186M in FY21 Q3 to $411M in FY22 Q3
      following the issuance of $295M in bond proceeds for capital projects
      during the first quarter of FY22. With the high balances for these three
      funds, the City’s combined Consolidated Cash account ended FY22 Q3 with a
      balance of $2.3B, about $1B higher than its previous record high in FY20
      Q3.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      As discussed in the next section, tax revenue collections, particularly
      for the Realty Transfer Tax, have exceeded expectations in FY22. With
      these stronger-than-expected tax revenue collections, the City revised its
      projected end-of-year General Fund cash balance to $1.1B, an increase of
      $192M. This balance would be the highest end-of-year cash balance ever,
      and the first time the General Fund’s cash balance would end a fiscal year
      with more than $1B. If the City had not used $250M in ARP funds, the
      end-of-year balance would be $830M, which would be the fourth time the
      balance has ended higher than $800M since FY07.
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (FY22 Q3)
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

