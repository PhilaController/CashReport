<template>
  <!-- General Fund -->
  <div id="general-fund-revenue-spending" class="section">
    <h2>General Fund Revenue & Spending</h2>
    <hr class="titlebar" />

    <p>
      As the principal operating fund for the City, the General Fund’s finances
      offer a unique perspective on the City’s current fiscal state. Monthly
      revenues and expenditures for the General Fund are published as part of
      the QCMR and offer further insight into the cash position of the City. The
      majority of revenues for the General Fund are generated from local taxes,
      the largest of which are the
      <a
        href="https://www.phila.gov/services/payments-assistance-taxes/business-taxes/wage-tax-employers/"
        target="_blank"
        >Wage Tax</a
      >,
      <a
        href="https://www.phila.gov/services/property-lots-housing/property-taxes/real-estate-tax/"
        target="_blank"
        >Real Estate Tax</a
      >, and
      <a
        href="https://www.phila.gov/services/payments-assistance-taxes/business-taxes/business-income-receipts-tax-birt/"
        target="_blank"
        >Business Income and Receipts Tax</a
      >. On the expenditure side, the City’s largest annual costs are due to
      payroll, pension payments, and employee benefits. Other costs include
      purchases of services (e.g. contracts), debt payments, and equipment and
      supplies.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue and spending categories
      can be selected using the dropdown button below. Revenue/spending amounts
      can be viewed for this quarter (FY22 Q2) only or for all months of the
      fiscal year.
    </p>

    <!-- Charts -->
    <Comparison :height="350" flavor="revenue" />
    <Comparison class="mt-5" :height="350" flavor="spending" />

    <h3>FY22 Q2 Totals</h3>

    <p>
      General Fund cash receipts totaled $987M in FY22 Q2, an $89M (+10 percent)
      increase relative to FY21 Q2. This growth is part of an upward trend in
      collections across most of the City’s major tax streams in recent months,
      the result of the city’s ongoing recovery from the impacts of the COVID-19
      pandemic. This trend was particularly positive in FY22 Q2, with all of the
      City’s tax revenue streams showing signs of growth compared to FY21 Q2.
      The $89M year-over-year increase was largely driven by increased
      collections for the Wage Tax (+$46M), BIRT (+$46M), and the Realty
      Transfer Tax (+$23M). There were also notable increases to the City’s
      non-tax revenue (+$14M), the Parking Tax (+$9M), the Sales Tax (+$7M), the
      Real Estate Tax (+$6M), and the Amusement Tax (+$4M).
    </p>
    <p>
      Cash spending for the General Fund totaled $1,115M in FY22 Q2, a $76M (6
      percent) decrease compared to the same quarter in FY21. Most of this
      change is due to decreased spending on contributions (-$47M), payroll
      (-$42M), and contracts and leases (-$6M). Compared to FY21 Q2, spending
      increased for prior year payments (+$13M), debt service (+$2M), and
      materials and equipment (+$2M).
    </p>

    <h3>Projected FY22 Annual Totals</h3>

    <p>
      The City currently projects an annual total of $5,146M in cash receipts
      for the General Fund in FY22, a $232M increase relative to FY21 and a $63M
      increase from last quarter’s projections. The City anticipates
      transferring more COVID-19 relief funding from the Grants to the General
      Fund in FY22, resulting in a large year-over-year increase in interfund
      transfers (+$215M). Additionally, several revenue streams are projected to
      have year-over-year increases in FY22, including the Parking and Amusement
      Taxes (+$67M), the Sales Tax (+$50M), non-tax revenues (+$31M), the Wage
      Tax (+$24M), and the Beverage Tax (+$9M). These increases are partially
      offset by a year-over-year decline in BIRT collections, which are
      projected to fall $267M below last year’s total due a double payment of
      the tax in FY21, the result of a one-time shift in collection dates (from
      FY20 Q4 to FY21 Q1).
    </p>

    <p>
      Despite the projected increase in cash receipts, General Fund cash
      spending is still expected to outpace revenue, totaling $5,239M in FY22.
      This annual spending total would be more than any prior year and $548M
      (+12 percent) more than FY21. Annual expenditures are expected to increase
      across all spending areas in FY22 compared to FY21, with the exception of
      payments to other funds (-$14M). The largest anticipated increase in cost
      is payroll spending, which is projected to grow by $194M (+11 percent) in
      FY22 compared to FY21, a result of increased costs of new labor union
      contracts. The City also expects increased spending on contracts (+109M),
      pension (+105M), and employee benefits (+$82M).
    </p>

    <h3>Comparison to the Adopted FY22 Budget</h3>

    <p>
      The City’s updated projections in the FY22 Q2 QCMR reflect some
      significant changes from the cash flow projections included in the
      original adopted FY22-FY26 Five Year Plan, which was approved by City
      Council and Mayor Kenney in June 2021. The City revised down how much of
      its ARP funding it plans to use in FY22 from $575M to $250M (a net revenue
      decrease of $325M) and is now planning to use more ARP funds during FY23
      and FY24. Despite this change, the City is projecting the General Fund
      will end FY22 with a cash balance $59M more than originally expected in
      the adopted budget. Three things have allowed the City to use less ARP
      funding while increasing its cash balances: less projected spending,
      stronger-than-expected tax collections, and higher cash balances at the
      start of FY22.
    </p>
    <p>
      First, the City’s latest spending projections show a modest $34M decrease
      in total cash spending for the General Fund in FY22. Second, the City
      began FY22 with a General Fund cash balance of $981M, which is $220M more
      than the projection in the adopted budget. And finally, the City has
      revised its projection for total FY22 tax revenue projection upwards by
      $200M. This increase is driven by larger projected collections across all
      of the City’s tax revenue streams, with the largest increases projected
      for the Sales Tax (+$53M), Parking and Amusement Taxes (+$49M), the Wage
      Tax (+$38M), BIRT (+$34M), and the Realty Transfer Tax (+$18M).
    </p>
    <p>
      At the end of FY22 Q2, the City had not yet spent any of its ARP
      allocation, with the entirety of the City’s ARP funds remaining in the
      Grants Fund. By the end of FY22, the City will have received its full
      $1.4B ARP allocation and is expecting to have more than $1.1B left to
      spend before the end of FY25 Q2. In future cash reports, the Controller’s
      Office will continue to monitor the City’s progress in spending its ARP
      funds and its impact on the City’s cash balances.
    </p>
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";
export default { name: "GeneralFund", components: { Comparison } };
</script>


<style scoped>
h3 {
  margin-top: 40px !important;
}
</style>