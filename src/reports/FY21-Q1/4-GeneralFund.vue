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
      purchases of services (e.g., contracts), debt payments, and equipment and
      supplies.
    </p>

    <p>
      General Fund cash receipts totaled $1,205M in FY21 Q1, a $154M (15
      percent) increase relative to FY20 Q1. One reason for the higher revenues
      is the timing of payments for the Business Income and Receipts Tax (BIRT),
      which is typically due in April each fiscal year but was delayed in FY20
      to July of FY21 due to the COVID-19 pandemic. BIRT revenue for the General
      Fund in FY21 Q1 totaled $313M compared to only $39M in FY20 Q1. The timing
      of BIRT payments accounts for a large portion of the increase in the
      General Fund balance in FY21 Q1 compared to last fiscal year.
    </p>

    <p>
      Aside from the increase in BIRT revenue, other tax revenue streams have
      largely experienced declines in FY21 Q1 compared to FY20 Q1 due to the
      COVID-19 pandemic. Comparing tax revenue between the first quarters of
      FY21 and FY20, declines have been realized in the Wage tax (−$11.4M), the
      Sales tax (−$10.1M), and the Beverage tax (−$2.8M). There were also
      significant declines to non-tax revenue (−$21M).
    </p>

    <p>
      The City currently projects an annual total of $4,743M in cash revenue for
      the General Fund in FY21, a $115M increase relative to FY20. However, this
      total includes the FY20 revenue that was not collected until FY21 due to
      changes in filing dates. After accounting for these differences, the City
      is projecting a total of $4,582M in revenue in FY21, a decrease of $251M
      (−5.2 percent) from FY20 revenue totals.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue categories can be
      selected using the dropdown button below. Revenue/spending amounts can be
      viewed for this quarter (FY21 Q1) only or for all months of the fiscal
      year.
    </p>

    <Comparison :height="350" flavor="revenue" />

    <p class="mt-5 pt-3">
      Cash spending for the General Fund decreased by 11.6 percent in FY21 Q1
      compared to the same quarter in FY20. The majority of this $128M decrease
      is due to reduced spending on contribution and indemnities (−$54.5M),
      professional service contracts (−$27.3M), and employee benefits (−$15.8M).
    </p>

    <p>
      General Fund cash spending is projected to total $4,903M in FY21, a $68.3M
      increase compared to the annual FY20 total. This increase is driven
      primarily by projected increases for payments against prior year spending
      (+$131M) and contributions/indemnities (+$48.6M). The contributions
      category includes a budgeted $25.4M increase in the City’s contribution to
      the School District as well as an $8.1M increase in the contribution to
      the Community College of Philadelphia. These increases are partially
      offset by a projected decrease of $86M in pension-related payments.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund spending categories can be
      selected using the dropdown button below. Revenue/spending amounts can be
      viewed for this quarter (FY21 Q1) only or for all months of the fiscal
      year.
    </p>

    <Comparison :height="350" flavor="spending" />
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";

export default { name: "GeneralFund", components: { Comparison } };
</script>

