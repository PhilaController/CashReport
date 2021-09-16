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
      The City spent more from the General Fund during FY21 Q3 than it received
      in revenue, with cash spending outpacing cash revenue by $73.2M. As seen
      in the chart on the next page, the City’s spending level decreased by
      about 1.4 percent relative to the third quarter of last fiscal year. The
      General Fund cash revenue also declined, with cash revenues 6.9 percent
      lower than the FY20 Q3 level. These declines in both spending and revenue
      relative to the prior fiscal year reflect the impacts of the COVID-19
      pandemic on the City’s finances, with negative economic conditions
      affecting revenue and budgetary changes affecting Q3 spending.
    </p>
    <p>
      Prior to the onset of the pandemic, the City was experiencing historically
      strong revenue growth, with revenues in FY20 Q3 reaching an all-time
      quarterly high of $1,527M (+3.1 percent growth from FY19 Q3). With the
      pandemic still impacting the local economy, several taxes experienced
      large year-over-year declines in FY21 Q3, including the Real Estate tax
      (-$69.6M), the Wage Tax (-$60.6M), the Realty Transfer Tax (-$23.7M), and
      the Parking and Amusement Taxes (-$19.4M).
    </p>
    <p>
      Spending in FY21 Q3 was dominated by the City’s annual contribution to the
      Pension Fund in March. To help weather the pandemic’s impact on City
      finances, the City restructured its debt service on pension-related bonds,
      which resulted in lower pension spending in FY21 and a decrease of $103.9M
      relative to FY20 Q3. These savings were partially offset by additional
      spending on contributions and indemnities (+$17.1M) and payments for
      obligations made in previous fiscal years (+$55M). The additional spending
      on contributions is largely due to an increase in the City’s annual
      payment to the School District, with FY21 contributions totaling $189M as
      of Q3, compared to $167M through Q3 of last fiscal year (+$23M).
    </p>

    <p class="font-italic">
      Monthly totals for different General Fund revenue and spending categories
      can be selected using the dropdown button below. Revenue/spending amounts
      can be viewed for this quarter (FY21 Q3) only or for all months of the
      fiscal year.
    </p>

    <!-- Chart -->
    <Comparison :height="350" flavor="revenue" />
    <Comparison :height="350" class="mt-5" flavor="spending" />

    <p class="mt-5 pt-3">
      While revenues declined relative to last fiscal year, the City’s cash
      revenue total in Q3 was actually $118.9M more than the City’s second
      quarter projection. Higher-than-expected collections for the Real Estate
      Tax (+$90.8M) made up the majority of this increase. Actual Q3 spending
      came in significantly below projections (-$140.1M), with
      lower-than-projected spending on contracts and leases (-$70.2M) and prior
      year payments (-$47.8M) making up the majority of this decrease. Some of
      the decrease for contract spending is anticipated to be offset by
      increased spending in the fourth quarter. The latest projections for
      contract spending in FY21 Q4 anticipate a $53.8M increase relative to
      previous projections.
    </p>
    <p>
      Overall, the City has revised its projection for annual General Fund cash
      spending downward by $138.6M, while the annual cash revenue total was
      positively adjusted by $20.1M. With these changes, the projection for the
      end-of-year General Fund balance increased by $158.6M to a total of
      $663.8M.
    </p>
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";

export default { name: "GeneralFund", components: { Comparison } };
</script>

