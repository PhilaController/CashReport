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
      General Fund cash revenues totaled $909M in FY19 Q2, an increase of $72M
      (9 percent) relative to Q2 of last fiscal year. General Fund cash spending
      outpaced revenues, with a total of $1,140M. This spending total represents
      an increase of 18 percent relative to FY18 Q2.
    </p>

    <p>
      The total revenue in Q2 was $36M more than the City anticipated following
      Q1 while the spending total was $23M less than the City’s Q1 projection.
      These differences with the Q1 projections resulted in the end-of-Q2
      General Fund balance being $59M higher than anticipated, as discussed in
      the previous section.
    </p>
    <p>
      The projected totals for General Fund revenues and expenditures in FY19
      are consistent with those from last quarter. Relative to last fiscal year,
      total General Fund cash expenditures are projected to increase by about 12
      percent, while total revenue is expected to only grow by 4 percent. These
      annual projections are only slightly adjusted from those following Q1 of
      this fiscal year, with a net change of about $30M.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue and spending categories
      can be selected using the dropdown button below. Revenue/spending amounts
      can be viewed for this quarter (Q2) only or for all months of the fiscal
      year.
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

