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
      As seen in the chart above, General Fund revenue and spending during FY19
      Q3 increased by 4.2 percent and 1.3 percent respectively, relative to FY18
      Q3. The substantial increase in monthly expenditures for the month of
      March in both FY18 and FY19 corresponds to the City’s largest annual
      payment to the Pension Fund. This year’s contribution was $606.2M.
    </p>
    <p>
      Total cash receipts in Q3 were $21.3M more than the City anticipated at
      the end of FY19 Q2, while total cash spending was $42.0M less than the
      City’s Q2 projection. These differences resulted in the end-of-Q3 General
      Fund balance being $63.3M higher than expected, as noted in the previous
      section.
    </p>
    <p>
      Annual General Fund cash receipts are now expected to grow by about 7
      percent compared to last fiscal year, up from the FY19 Q2 projection of 4
      percent. Annual General Fund expenditure projections have been revised
      downwards slightly from last quarter, with spending now expected to
      increase by about 11 percent relative to last year, down from 12 percent.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue and spending categories
      can be selected using the dropdown button below. Revenue/spending amounts
      can be viewed for this quarter (Q3) only or for all months of the fiscal
      year.
    </p>

    <!-- CHARTS -->
    <Comparison :height="350" flavor="revenue" />
    <Comparison class="mt-5" :height="350" flavor="spending" />
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";

export default { name: "GeneralFund", components: { Comparison } };
</script>

