<template>
  <!-- General Fund -->
  <div id="general-fund-revenue-spending" class="section">
    <h2>The General Fund</h2>
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

    <h3>Cash Revenues</h3>

    <p>
      The City’s cash receipts for the General Fund, composed largely of local
      tax revenue, are expected to show modest growth in FY20. General Fund
      receipts for the first quarter of FY20 were $1,052M, an increase of only
      $3.8M over the first quarter of FY19. The City estimates the total revenue
      for the year to be $4,911M, an increase of $63M (1.3 percent) over FY19.
    </p>

    <!-- Monthly Revenue -->
    <Comparison :height="350" flavor="revenue" />

    <p class="mt-5 pt-3">
      The projection for total cash receipts in FY20 is in line with the broader
      economic projections for the Philadelphia area. The City has experienced
      several years of strong economic growth and as a result, has seen
      corresponding increases in annual revenue: total cash receipts increased
      by 8.3 percent in FY18 and an additional 7.7 percent last fiscal year.
      Looking to the future, economists believe we may be approaching the end of
      this unprecedented period of economic expansion, with increasing chances
      of a recession or economic slowdown in the near future. The City’s Q1
      projection of only 1.3 percent growth in the total cash receipts in FY20
      is consistent with this expectation.
    </p>

    <p>
      The figure below shows the year-over-year change in total General Fund
      cash receipts, comparing the actual change (blue) to the Q1 projection
      (grey, dashed). The figure illustrates the difficulties associated with
      predicting the City’s annual revenue total after only three months of the
      fiscal year. For each year since fiscal year 2012, the Q1 projection for
      revenue growth has underestimated the actual change. This has resulted
      from a combination of factors, including the conservative nature of the
      projections and the City’s ongoing economic expansion. If the region’s
      economy begins to slow in 2020 as predicted, the City’s actual revenue
      growth in FY20 should be more in line with the Q1 projection. Note that
      the Q1 projection for FY15 has been removed from the chart since it
      included additional expected revenue from the sale of the Philadelphia Gas
      Works, which ultimately did not occur.
    </p>

    <!-- Revenue Accuracy -->
    <CashTotalsProjectionAccuracy :height="400" flavor="revenue" />

    <h3 class="mt-5 pt-3">Cash Expenditures</h3>

    <p>
      Total General Fund cash expenditures totaled $1,122M in FY20 Q1. This is
      $53M, or 4.9 percent, more than in the first quarter of FY19. Spending is
      projected to increase throughout the year, growing by $376M (8.1 percent)
      over FY19 to an estimated $5,026M.
    </p>

    <!-- Monthly Spending -->
    <Comparison :height="350" flavor="spending" />

    <p class="mt-5 pt-3">
      The FY20 General Fund spending increase continues the City’s recent
      spending trajectory. Annual General Fund spending has increased over the
      last four fiscal years, peaking last fiscal year when cash spending
      increased by 9.0 percent. The largest planned spending increases in FY20
      are for the City’s payroll (+$125M), contracts and leases (+$75M), and
      contributions and indemnities (+$52M), which includes the City’s
      additional payments to the School District of Philadelphia.
    </p>

    <p>
      The chart below compares the actual (blue) and Q1-projected (grey, dashed)
      year-over-year change in General Fund expenditures. The Q1 projection for
      FY15 is not shown on this chart since, as discussed earlier, the
      projections included the sale of Philadelphia Gas Works. Prior to fiscal
      year 2017, the differences between the Q1 projection and actual
      expenditure totals were small, with an average difference of about $27M.
      In the past three fiscal years, however, this difference has increased,
      with the Q1-projected spending total overestimated by an average of $143M.
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

