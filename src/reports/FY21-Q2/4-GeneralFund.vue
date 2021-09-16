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

    <div class="section-text">
      <p>
        As the principal operating fund for the City, the General Fund’s
        finances offer a unique perspective on the City’s current fiscal state.
        Monthly revenues and expenditures for the General Fund are published as
        part of the QCMR and offer further insight into the cash position of the
        City. The majority of revenues for the General Fund are generated from
        local taxes, the largest of which are the
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
        purchases of services (e.g., contracts), debt payments, and equipment
        and supplies.
      </p>
    </div>

    <p>
      The City spent more from the General Fund during FY21 Q2 than it received
      in revenue, with cash spending outpacing cash revenue by $293M. As seen in
      the chart below, the City’s spending level increased by about 5.6 percent
      relative to the second quarter of last fiscal year. Meanwhile, General
      Fund cash revenue declined by about 10.7 percent relative to FY20 Q2, a
      result of the negative economic impacts of the COVID-19 pandemic. Prior to
      the onset of the pandemic, the City was experiencing historically high
      revenue growth, with revenues in FY20 Q2 reaching an all-time quarterly
      high of $1,005M (+10.6 percent growth from FY19 Q2).
    </p>
    <p>
      While revenues declined relative to last fiscal year, the City’s cash
      revenue total in Q2 was actually $12.3M more than the City’s first quarter
      projection. Increases in Wage tax revenues (+$14.3M), BIRT revenues
      (+$12.8M), and Realty Transfer Tax revenues (+$12.8M), accounted for the
      majority of the difference. However, the City’s spending was also higher
      than anticipated and by a wider margin, with an additional $78.6M in
      spending through the second quarter of the fiscal year. The higher
      spending total was due primarily to increased payroll costs (+$47.4M) due
      to a monthly shift in payments which is offset in later months, as well as
      additional spending on contracts and leases (+$28.7M).
    </p>
    <p>
      Some of the additional spending through the first half of FY21 is
      projected to be offset by declines later in the fiscal year. Despite the
      year-to-date increase of $78.6M in cash spending, the City increased the
      annual projection for the General Fund by only $43.2M. The largest
      revisions to the first-quarter projections are for increased spending on
      contracts (+$34M) and payments for prior year spending (+$21.6M). The
      current projection for the FY21 total is $4,946M, an increase of 2.3
      percent relative to last fiscal year.
    </p>

    <p>
      On the other hand, the City revised down its annual totals for nearly all
      major taxes (except the Sales Tax), lowering its annual cash revenue
      projection for the General Fund by $49.9M. The current annual projection
      of $4,693M represents an increase of only 1.4 percent relative to the
      total cash revenue in FY20. This modest growth reflects the impact of the
      COVID-19 pandemic: annual revenue grew by 8.3 percent in FY18 and 7.7
      percent in FY19 but fell by 4.6 percent in FY20 as a result of decreased
      revenue in Q4. It is also worth noting that the FY21 cash revenue total
      ($4,693M) includes FY20 revenue that was not collected until FY21 due to
      changes in filing dates. After accounting for these differences, the City
      is projecting a total of $4,602M in revenue in FY21, a decrease of $231M
      (–4.8 percent) from FY20 revenue totals.
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue and spending categories
      can be selected using the dropdown button below. Revenue/spending amounts
      can be viewed for this quarter (FY21 Q2) only or for all months of the
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

