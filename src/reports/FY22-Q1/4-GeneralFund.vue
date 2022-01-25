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

    <h3>Cash Revenue</h3>

    <p>
      As seen in the chart below, General Fund cash receipts totaled $1,011M in
      FY22 Q1, a $194M (16 percent) decrease relative to FY21 Q1. One reason for
      the lower revenues is the pandemic-related shift in the BIRT collection
      date from FY20 Q4 to FY21 Q1, resulting in unusually high BIRT revenues in
      FY21 Q1. BIRT revenue totaled $50M in FY22 Q1, a $263M decrease from FY21
      Q1, but more in line with pre-pandemic BIRT revenues for the first
      quarter. Year-over-year losses were realized in collections for the Wage
      Tax (-$44M), the Realty Transfer Tax (-$21M), and the Real Estate Tax
      (-$9M).
    </p>

    <p>
      The City’s other tax revenue streams showed signs of growth in FY22 Q1
      relative to FY21 Q1, suggesting that the City’s revenue sources might be
      experiencing recovery from the economic impacts of the pandemic. These
      improved collections include the Sales tax (+$16M), the Parking Tax
      (+$11M), the Amusement Tax ($8.6M), and the Beverage tax (+$3.0M). There
      were also significant increases to non-tax revenue (+$21M), driven
      partially by additional reimbursement opportunities for health services
      provided by the Public Health department, as well as a
      higher-than-expected volume of construction permits issues issued by the
      Licenses and Inspections department.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue categories can be
      selected using the dropdown button below. Revenue/spending amounts can be
      viewed for this quarter (FY21 Q1) only or for all months of the fiscal
      year.
    </p>

    <Comparison :height="350" flavor="revenue" />

    <p class="mt-5 pt-3">
      The City currently projects an annual total of $5,083M in cash receipts
      for the General Fund in FY21, a $169M increase relative to FY21. BIRT tax
      collections are projected to fall $278M below prior year collections due
      to the extra payments in FY21. Other tax revenue streams projected to
      decline from FY21 are the Realty Transfer Tax (-$16M) and the Real Estate
      Tax (-$13M). The City anticipates a large year-over-year increase in
      interfund transfers (+$215M) due to higher levels of funding from the
      American Rescue Plan that will be transferred from the Grants to the
      General Fund. Additionally, the City projects increased funds from other
      governments (+$81M), the Parking and Amusement Taxes (+$31M), non-tax
      revenue sources (+$30M), the Sales Tax (+$19M), the Wage Tax (+$9M), and
      the Beverage Tax (+$7M).
    </p>

    <h3>Cash Spending</h3>

    <p>
      Cash spending for the General Fund totaled $1,200M in FY21 Q1, a $91M (8
      percent) increase compared to the same quarter in FY21. Most of this
      increase is due to additional spending on contributions/indemnities
      (+$55M), employee benefits (+$25M), contracts and leases (+$23M), and
      payroll (+$6M). There were year-over-year decreases in spending on prior
      year contracts (-$14M) and pension payments (-$6M).
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund spending categories can be
      selected using the dropdown button below. Revenue/spending amounts can be
      viewed for this quarter (FY21 Q1) only or for all months of the fiscal
      year.
    </p>

    <Comparison :height="350" flavor="spending" />

    <p class="mt-5 pt-3">
      General Fund cash spending is projected to total $5,265M in FY22, more
      than any prior year and $575M more than FY21. The City anticipates
      payments to labor obligations will increase by $119M from FY21 due to
      increased costs of new and pending labor union contracts. Annual
      expenditures are expected to increase across all spending areas in FY22
      compared to FY21, including payroll (+$114M), pension (+$107M), contracts
      and leases (+$77M), prior year payments (+$53M), employee benefits
      (+$44M), materials and equipment (+$42M), contributions/indemnities
      (+$16M), and debt services (+$14M). Total cash spending for FY22 is
      projected to outpace General Fund cash revenues by $183M.
    </p>

    <p>
      It should be noted that the City’s Q1 projections tend to overestimate
      fiscal year cash spending and underestimate cash revenues. Since FY07, the
      only years when the actual end-of-year General Fund balance was lower than
      the Q1 projection occurred during unprecedented economic crises: the Great
      Recession and the first year of the COVID-19 pandemic. As seen in the
      chart below, the Q1 projections from FY21 are an outlier, with initial
      projections falling far below year-end actuals due to the unanticipated
      influx of federal COVID-19 relief funding. In all other years, actual
      end-of-year General Fund balances have fallen significantly above Q1
      projections, due to over-projections of spending and under-projections of
      revenues. As the economy recovers from the effects of the COVID-19
      pandemic, the Controller’s Office will continue to monitor the City’s
      finances and projections throughout this fiscal year.
    </p>

    <FundBalanceProjectionAccuracy height="350" />
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";
import FundBalanceProjectionAccuracy from "@/charts/FundBalanceProjectionAccuracy";

export default {
  name: "GeneralFund",
  components: { Comparison, FundBalanceProjectionAccuracy },
};
</script>

