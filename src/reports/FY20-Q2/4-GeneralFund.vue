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
      The City spent more from the General Fund during FY20 Q2 than it received
      in revenue, with cash spending outpacing total revenue by $122M. The
      City’s spending level decreased slightly, by about 1.1 percent, relative
      to the second quarter of last fiscal year. Meanwhile, General Fund cash
      revenue continued to show strong growth, increasing by 10.6 percent
      relative to Q2 of FY19.
    </p>
    <p>
      The total revenue in Q2 was $35.4M more than the City anticipated
      following Q1 of this fiscal year. Increases in BIRT revenues, which came
      in $23.1M above projections, accounted for a substantial portion of the
      difference. This BIRT increase could have a significant impact on the
      projection for the City’s end-of-year revenue total. Notably, the BIRT
      increase occurred despite the fact that most BIRT taxes are historically
      paid in April. Last fiscal year, the City significantly underestimated the
      amount of BIRT revenue for April, with the Q2 projection for April 2019
      falling short by $85.1M. The increased BIRT revenue in FY20 Q2 could
      suggest a similar scenario for the current fiscal year.
    </p>
    <p>
      The City’s Q2 General Fund spending total was a substantial $84.6M less
      than the Q1 projection. This difference is due largely to an
      overestimation of payments attributed to expenditures in past fiscal
      years. The City spent $54.6M less on these prior year payments than
      anticipated. Differences in payroll spending accounted for the next
      largest change relative to projections — actual payroll expenditures in
      FY20 Q2 were below the Q1 projection by $15.9M.
    </p>

    <p>
      At the end of FY20 Q2, the annual total for General Fund cash expenditures
      is projected to increase by about 7.9 percent, surpassing the $5B
      threshold for the first time in the City’s history. This continues the
      recent upward trajectory for the City’s spending levels, which has seen
      General Fund cash spending increase by 9.0 percent and 4.9 percent in the
      last two fiscal years. Meanwhile, total cash revenue for the General Fund
      is estimated to grow by only 2.3 percent in FY20. This is substantially
      lower than the City’s revenue growth in recent years: annual revenue grew
      by 8.3 percent and 7.7 percent in FY18 and FY19. In recent years, this
      strong revenue growth has supported the City’s large spending increases.
      With the possibility of declining revenue growth in the future, the
      Controller’s Office will continue to closely monitor the City’s spending
      levels in future cash reports.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue and spending categories
      can be selected using the dropdown button below. Revenue/spending amounts
      can be viewed for this quarter (FY20 Q2) only or for all months of the
      fiscal year.
    </p>

    <!-- Charts -->
    <Comparison :height="350" flavor="revenue" />
    <Comparison class="mt-5" :height="350" flavor="spending" />
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";

export default { name: "GeneralFund", components: { Comparison } };
</script>

