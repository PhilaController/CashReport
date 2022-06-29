<template>
  <!-- General Fund -->
  <div id="general-fund-revenue-spending" class="section">
    <h2>The General Fund Revenue & Spending</h2>
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

    <p>
      Boosted by $250M in revenue from the ARP, the General Fund’s cash revenues
      outpaced its spending by about $310M in FY22 Q3. As seen in the charts on
      the next page, the City’s spending level increased by about 7% (+$106M)
      relative to the third quarter of last fiscal year, while cash revenue
      increased by 34% (+$486M). This revenue increase includes the $250M in ARP
      funds — even without this additional federal funding, revenue increased by
      $236M (+17%) in the third quarter relative to last fiscal year.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue and spending categories
      can be selected using the dropdown button below. Revenue/spending amounts
      can be viewed for this quarter (FY22 Q3) only or for all months of the
      fiscal year.
    </p>

    <!-- Chart -->
    <Comparison :height="350" flavor="revenue" />
    <Comparison :height="350" class="mt-5" flavor="spending" />

    <p class="mt-5 pt-3">
      Record-breaking collections for the Realty Transfer Tax (RTT) helped drive
      strong growth in General Fund cash receipts during FY22 Q3. As noted in
      the QCMR, a high volume of real estate sales, combined with processing
      delays from earlier in the year, have contributed to an unprecedented
      level of RTT collections in FY22 Q3. RTT collections totaled $195M during
      FY22 Q3, $129M more than the third quarter of last fiscal year and $108M
      more than the City’s original projections. Collections for two other taxes
      during FY22 Q3 came in above last quarter’s projection as well: the Wage
      Tax (+$34M) and BIRT (+$14M).
    </p>
    <p>
      With the higher-than-expected revenue totals in FY22 Q3, the City made
      significant changes to its annual cash revenue projections. Total cash
      revenue for FY22 was revised upwards by $259M for a total of $5.4B, which
      would represent annual growth of more than 10%. The updated total reflects
      increases for the fiscal year totals for RTT (+$176M), BIRT (+$83M), and
      Wage Tax (+$12M) collections.
    </p>
    <p>
      The City’s annual contribution to the Pension Fund in March, totaling
      $653M, accounted for about 40% of the total $1.6B in cash spending in FY22
      Q3. Overall, spending increased by $106M relative to FY21 Q3, driven by
      additional spending on pensions (+$121M) and payroll (+$53M). Last year,
      the City restructured its debt service on pension-related bonds, which
      resulted in a one-year reduction in pension spending during FY21 Q3. These
      spending increases were partially offset by a decline in payments for
      prior year expenditures. The City spent $90M less on these payments during
      FY22 Q3, as a result of a timing difference that shifted these payments
      into Q4 of this fiscal year.
    </p>
    <p>
      Overall, the City has revised its projection for annual General Fund cash
      spending upwards slightly by $66M for a total of $5.3B. This would
      represent a 13% year-over-year increase in cash spending relative to FY21.
    </p>
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";

export default { name: "GeneralFund", components: { Comparison } };
</script>

