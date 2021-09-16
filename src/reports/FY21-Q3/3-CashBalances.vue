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
      The City ended FY21 Q3 with a Consolidated Cash balance of $1,231.1M. This
      represents a $103.8M decrease from the historically high balance of
      $1,316.9M at the end of FY20 Q3, the last fiscal quarter prior to the
      onset of the COVID-19 pandemic. As seen in the figure below, this fiscal
      year’s Q3 balance for the General Fund ($788.6M) also declined slightly
      relative to FY20 Q3. However, this year’s cash balances for these two
      funds still remained above the Q3 balances for all years prior to FY20.
    </p>
    <p>
      The year-over-year decrease in the City’s Consolidated Cash account is
      largely due to a decline in the Capital Fund balance (-$165.4M), a result
      of the City using bond proceeds from an FY20 borrowing to fund
      infrastructure projects across the city. This year-over-year decline was
      partly offset by an increased balance for the Grants Fund (+78.6M), which
      has remained high due to an influx of federal and state relief funds in
      response to the COVID-19 pandemic. The General Fund’s FY21 Q3 balance is
      only slightly lower than FY21 Q3 (-$7.2M) but is temporarily boosted by
      the issuance of a $300M Tax and Revenue Anticipation Note (TRAN) during
      the first quarter of FY21. This is a short-term borrowing that must be
      paid back by the end of the fiscal year and is intended to strengthen the
      City’s cash position while offsetting the seasonality of monthly cash
      flows. The TRAN has been issued in most years in recent history (except
      for FY19 and FY20) in differing amounts depending on cash needs of that
      time. The figure below highlights the effect of the TRAN on the Q3
      balances for Consolidated Cash and the General Fund. After excluding TRAN
      funding, the impact of the pandemic on the City’s finances becomes more
      apparent. The end-of-Q3 balances for both funds are lower in FY21 compared
      to FY20, with the General Fund balance dropping below the FY19 Q3 level.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      The actual Consolidated Cash balance at the end of FY21 Q3 was noticeably
      higher (+$403.5M) than last quarter’s projection. This higher fund balance
      was driven by higher balances for the General Fund (+$258.8M) and the
      Grants Fund (+$123.5M). The General Fund’s higher balance was due
      primarily to the City’s Budget Office overestimating Q3 spending levels by
      $140M and underestimating tax revenues by $96.0M in their previous
      estimates. The larger Grants Fund balance resulted in part from the
      extension of the deadline to use federal funding from the CARES Act, which
      was extended from the end of FY21 Q2 to the end of FY22 Q2, allowing the
      City more time to spend down the Grants Fund balance.
    </p>

    <p>
      At the end of FY21 Q3, the City made significant revisions to its
      end-of-fiscal-year fund balance projections to incorporate the anticipated
      federal relief funds from the American Rescue Plan (ARP) passed by
      Congress in March 2021. The City increased its projections for the
      end-of-year Consolidated Cash balance by $837.9M, which includes an
      increase of $668.0M for the end-of-year Grants Fund balance and $158.6M
      for the end-of-year General Fund balance. The City has been allocated
      $1.4B in funding through the ARP and will receive the first half of this
      total during the fourth quarter of FY21. As discussed in the next section,
      the General Fund revision is due to a combination of federal relief,
      higher-than-expected revenue, and lower-than-expected spending. While
      these Q3 projections have historically been conservative, it is difficult
      to compare current projections to past experience, as the novel economic
      impacts of the COVID-19 pandemic have created considerable uncertainty
      around revenue streams and spending requirements.
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (FY21 Q3)
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

