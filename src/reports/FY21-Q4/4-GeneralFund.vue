<template>
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

    <h3 class="pt-3">FY21 vs. FY20</h3>

    <p class="mb-5 pb-3">
      Cash revenue for the General Fund totaled $4.9B in FY21, an increase of
      $286M from last fiscal year, while cash spending totaled $4.7B, a decrease
      of about $144M. With a surplus of $223M, the City’s General Fund cash
      balance increased year-over-year in FY21. As seen in the chart on the
      following page, this differs from last fiscal year when annual cash
      spending outpaced revenue, and the General Fund’s cash balance declined
      year-over-year by $207M. This was the first decline since FY15 and the
      largest single-year decline since the Great Recession in FY08.
    </p>

    <!-- CHART -->
    <GeneralFundCashFlows :height="450" />

    <p class="mt-5 pt-3">
      Total cash revenue for the General Fund increased year-over-year by 6.2%,
      in FY21. This increase is primarily due to the shift in collection date
      for BIRT from April to July 2020, which resulted in the City receiving
      BIRT collections twice in FY21, in July 2020 and then again in April 2021.
      In total, the City collected $823M in BIRT cash receipts in FY21, a
      year-over-year increase of $536M.<sup
        ><a href="#ref1" id="fn1" title="Jump to the reference for footnote 1."
          >[1]</a
        ></sup
      >
    </p>
    <p>
      While cash revenue increased by $286M in FY21 as compared to FY20, cash
      revenue would have declined by $250M without the year-over-year increase
      for BIRT. As shown in the chart on the following page, total collections
      for the Wage, Amusement, Parking, and Beverage Taxes all declined in FY21
      relative to FY20, with the Sales Tax, Realty Transfer Tax, and the Real
      Estate Tax experiencing modest year-over-year increases. The increase in
      Sales Tax collections is particularly noteworthy, given widespread
      restaurant and business closures and record unemployment during FY21.
    </p>

    <p>
      In response to the pandemic, the City implemented budget cuts and layoffs
      during FY21, and as a result, cash spending declined year-over-year by
      $144M, or about 3%. Spending related to the City’s Pension Fund had the
      largest decline, the result of the City restructuring its debt service on
      pension-related bonds in response to the pandemic’s impact on City
      finances. The City ended FY21 with 792 fewer full-time positions funded
      through the General Fund, and as a result, payroll spending declined by
      $87M in FY21 relative to FY20. The City also reduced contract spending by
      $53M (6.2%) and spending on materials and equipment by $26M, or 31%. Prior
      year payments, which are cash expenditures for spending approved during
      FY20, increased year-over-year by $100M, the largest increase of any
      category.
    </p>

    <!-- Chart -->
    <div class="mt-5 mb-5">
      <img
        loading="lazy"
        class="aligncenter"
        src="https://controller.phila.gov/wp-content/uploads/2021/09/Cash-Report-FY21-vs.-FY20.png"
        alt=""
        width="900"
        sizes="(max-width: 900px) 100vw, 900px"
      />
    </div>

    <h3 class="pt-3">FY21 Actuals vs. Adopted Budget</h3>

    <p>
      The COVID-19 pandemic’s impact on City finances was not as large as
      originally projected, with the City’s General Fund ending FY21 with a cash
      balance that was $476M higher than the projection in the adopted FY21
      budget from June 2020. This higher balance resulted from
      higher-than-expected revenues and less-than-expected spending. The General
      Fund also began FY21 with a cash balance that was $107M higher than
      projected in the adopted budget. The passage of the American Rescue Plan
      in March 2021 helped to boost the General Fund’s cash balance, as the City
      transferred $26M in ARP funds to the General Fund during the second half
      of FY21. This funding was not included in the original budget projections
      and contributed to the higher-than-expected revenue totals for FY21.
    </p>

    <p>
      Compared to the FY21 adopted budget, total cash revenue came in $127M over
      budgeted projections. As seen in the chart on the next page, nearly all
      taxes outperformed expectations, including BIRT (+$118M), the Real Estate
      Tax (+$54M), the Sales Tax (+$48M), the Realty Transfer Tax (+$23M), and
      the Beverage Tax (+$4.8M). The ARP funds (+$26M) are included in the
      Interfund Transfer category in the chart, as the funding was transferred
      from the Grants Fund to the General Fund. Note that the overperformance of
      BIRT occurred over and above the double payment in FY21, which the City
      accounted for in their budgeted projections. Only collections for the Wage
      Tax, Parking Tax, and Amusement Tax were below expectations. The Wage Tax
      was particularly impacted during the pandemic, with the City refunding an
      estimated $105M in Wage Tax collections in FY21 for non-residents who
      worked remotely throughout the pandemic.
    </p>
    <p>
      Similar to the budgeted revenue estimates, the City’s spending projections
      in the adopted FY21 budget were also conservative. The City’s cash
      spending for the General Fund totaled $243M less than the budget’s
      projections from June 2020. Payments against prior year expenditures
      accounted for the largest difference (-$89M). The City also reduced
      spending in several other areas relative to its original projections,
      including materials and equipment (-$40M), payroll (-$30M), and employee
      benefits (-$20M). Only spending on contracts increased (+2.1M) relative to
      the City’s budgeted spending projections.
    </p>

    <!-- Chart -->
    <div class="mt-5 mb-5">
      <img
        loading="lazy"
        class="aligncenter"
        src="https://controller.phila.gov/wp-content/uploads/2021/09/Cash-Report-Comparison-to-Adopted.png"
        alt=""
        width="900"
        sizes="(max-width: 900px) 100vw, 900px"
      />
    </div>
  </div>
</template>

<script>
import GeneralFundCashFlows from "@/charts/GeneralFundCashFlows";

export default { name: "GeneralFund", components: { GeneralFundCashFlows } };
</script>

