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
      As seen in the figure below, the balances for the Consolidated Cash
      account, the General Fund, and the Grants Fund ended FY21 Q2 at their
      highest level since at least FY07. These historically high end-of-Q2 cash
      balances are notable as the City continues to weather the impact of the
      COVID-19 pandemic on its finances. The City ended FY21 Q2 with a
      Consolidated Cash balance of $1,460M, which is more than $200M higher than
      the balance at the end of FY20 Q2. The Q2 Consolidated Cash balances for
      FY21 and FY20 are significantly higher than prior years, with FY18 Q2
      having the next highest balance of $798M.
    </p>
    <p>
      There are a number of factors that have helped to boost the City’s current
      cash position. First, the City has received an influx of grant funding
      (through the federal CARES Act) as part of the response to the COVID-19
      pandemic, which has contributed to the higher Grants Fund balance.
      Remaining funds from the CARES Act are expected to be spent in the coming
      months as part of the City’s response to the ongoing pandemic. Second, the
      increase in the General Fund balance is due primarily to the issuance of a
      $300M Tax and Revenue Anticipation Note (TRAN) during the first quarter of
      FY21. This is a short-term borrowing that must be paid back by the end of
      the fiscal year. It is intended to strengthen the City’s cash position
      while offsetting the seasonality of monthly cash flows. This is the first
      TRAN issuance since FY18 and the largest amount since FY09 when the City
      borrowed $350M in the aftermath of the Great Recession. The figure below
      highlights the effect of the TRAN on the Q2 balances for Consolidated Cash
      and the General Fund. After excluding TRANs, the end-of-Q2 balances for
      both funds are lower in FY21 compared to FY20, although both remain
      relatively high compared to historical levels.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      The end-of-Q2 General Fund balance was $66.4M lower than anticipated due
      primarily to higher-than-expected spending totals during the second
      quarter. On the other hand, the City’s Consolidated Cash balance ended the
      second quarter $382M higher than the City’s first quarter projection. This
      higher balance was driven by higher balances for the Grants Fund (+$352M)
      and the Capital Fund (+$14.7M). The larger Grants Fund balance resulted in
      part from the extension of the deadline to use federal funding from the
      CARES Act, which was extended from the end of FY21 Q2 to the end of FY22
      Q2.
    </p>

    <p>
      Despite the Consolidated Cash balance being higher than previously
      projected, the City increased the projection for its end-of-year balance
      by only $2.3M. Projections for the General Fund’s end-of-year balance
      decreased by $93.2M, while the balances for the Grants and Capital Funds
      increased by $76M and $15.2M, respectively. As discussed in the next
      section, the General Fund revision is due to a combination of lower
      expected revenue and higher expected spending. While these Q2 projections
      have historically been conservative, it’s difficult to compare current
      projections to past experience, as the novel economic impacts of the
      COVID-19 pandemic have created a large amount of uncertainty around
      revenue streams and spending requirements.
    </p>

    <p class="font-italic">
      Balances for the City's four major funds can be selected using the
      dropdown button below. Balances can be viewed for this quarter (FY21 Q2)
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

