<template>
  <!-- General Fund -->
  <div id="general-fund-revenue-spending" class="section">
    <h2>The General Fund</h2>
    <hr class="titlebar" />

    <h3>Cash Revenues</h3>

    <p>
      The City’s cash receipts for the General Fund, composed largely of local
      tax revenue, are expected to show strong growth in FY19. General Fund
      receipts for the first quarter of FY19, shown in the chart below, were
      $1.05B, an increase of $42M, or 4 percent, over the first quarter of FY18.
      The City estimates the total revenue for the year to be $4.70B, an
      increase of $198M (4 percent) over FY18.
    </p>

    <!-- Monthly Revenue -->
    <Comparison :height="350" flavor="revenue" />

    <p class="mt-5 pt-3">
      This revenue growth largely reflects the strong economy during the first
      quarter of FY19 and its expected continuation throughout the fiscal year.
      The Wage Tax is particularly sensitive to the city’s economic health, and
      despite a slight decrease to its tax rate, Wage Tax revenue grew by $18M
      in FY19 Q1 relative to FY18 Q1. Over the entirety of FY19, revenue from
      the Wage Tax is expected to increase by $85M. Annual revenue from the
      Business Income and Receipts Tax (BIRT), which is also sensitive to the
      city’s economy, is estimated to be $17M more than last year, despite a
      lowering of the BIRT tax rate. Finally, Real Estate Tax revenue is
      expected to grow by $16M in FY19, due in large part to increased
      residential property assessments.
    </p>

    <p>
      Because the City’s tax revenues depend upon the economic health of
      Philadelphia, it can be difficult to accurately estimate the year-end
      total for cash receipts. Historically, the City’s Q1 revenue estimate has
      been under-projected relative to the actual value. For example, the FY18
      Q1 value for total General Fund receipts was $86M less than the actual
      year-end total. Below, we show the year-over-year change in the total
      General Fund revenues, comparing the actual change (blue) to the Q1
      projection (grey, dashed). The Q1 projection has been underestimated
      relative to the actual year-end total in six of the last seven years.
      Fiscal Year 2015 stands out as an outlier due to additional expected
      revenue from the sale of the Philadelphia Gas Works, which ultimately did
      not occur. For this reason, we have removed the Q1 projection for FY15
      from the chart below.
    </p>

    <!-- Revenue Accuracy -->
    <CashTotalsProjectionAccuracy :height="400" flavor="revenue" />

    <h3 class="mt-5 pt-3">Cash Expenditures</h3>

    <p>
      Total General Fund expenditures for Q1, shown in the chart below, totaled
      $1.07B. This is $107M, or 11 percent, more than in the first quarter of
      FY18. Increased spending is projected to continue throughout the year,
      with the annual spending total in FY19 estimated to be $4.79B, an increase
      of $517M (12 percent) over FY18.
    </p>

    <!-- Monthly Spending -->
    <Comparison :height="350" flavor="spending" />

    <p class="mt-5 pt-3">
      The 12 percent increase in total General Fund spending in FY19 is the
      largest projected increase of the last ten years other than Fiscal Year
      2015, which included inflated projections due to the anticipated sale of
      the Philadelphia Gas Works that did not occur. The largest planned
      spending increases in FY19 are for the City’s payroll (+$111M) and
      contributions / indemnities (+$87M). The latter includes payments to the
      School District of Philadelphia from the City.
    </p>

    <p>
      The chart below compares the actual (blue) and Q1-projected (grey, dashed)
      year-over-year change in General Fund expenditures. The Q1 projection for
      FY15 is not shown on this chart since, as discussed earlier, the
      projections included the sale of Philadelphia Gas Works. Prior to 2017,
      the difference between the Q1 projection and actual expenditure totals
      were small, with an average difference of only $27M. This difference has
      increased in the past two fiscal years, with the Q1-projected spending
      total overestimated by an average of $146M.
    </p>

    <!-- Spending Accuracy -->
    <CashTotalsProjectionAccuracy :height="400" flavor="spending" />
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";
import CashTotalsProjectionAccuracy from "@/charts/CashTotalsProjectionAccuracy";

export default {
  name: "GeneralFund",
  components: { Comparison, CashTotalsProjectionAccuracy },
};
</script>

