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

    <!-- Annual Cash Flows -->
    <h3>Annual Cash Flows</h3>

    <p>
      Total cash revenue for the General Fund totaled $4.85B in FY19, an
      increase of 7.7% from last fiscal year, while cash spending totaled
      $4.65B, an increase of about 9%. The surplus of revenue receipts, about
      $200M, resulted in an overall increase to the General Fund’s cash balance
      during FY19.
    </p>

    <p>
      As shown in the figure below, the spending and revenue totals in FY19
      continued a broader trend in recent years that has seen both revenue and
      spending increase substantially from year to year. While both have
      increased, revenues have outpaced spending, buoyed by the City’s continued
      economic expansion. Since FY15, annual revenues have increased by 29%,
      while annual cash spending has increased by 22%. Over that same time
      period, the General Fund’s cash balance has more than doubled, increasing
      from $400.4M at the end of FY15 to its current level of $966.4M. While
      strong revenue growth has sustained spending increases and helped to grow
      the City’s cash balances, the City’s rising spending levels would be
      difficult to maintain in the event of an economic downturn.
    </p>

    <!-- CHART -->
    <GeneralFundCashFlows :height="450" />

    <p class="mt-5 pt-3">
      In FY19, taxes sensitive to the City’s economic health saw substantial
      increases: receipts for the Business Income and Receipts Tax increased by
      $99M and receipts for the Wage Tax increased by $69M relative to FY18. In
      fact, Wage Tax revenues have increased each year since 2011, a sign of
      Philadelphia’s economic recovery since the Great Recession. Increased
      taxation has also contributed in part to the sharp rise in revenues in
      recent years. The last four years have seen the addition of the
      Philadelphia Beverage Tax, as well as single-year increases to the tax
      rates for the Real Estate Tax and the Realty Transfer Tax.
    </p>

    <p>
      The 9% increase in General Fund expenditures in FY19 resulted primarily
      from increases in spending on payroll and employee benefits (+$120M) and
      contributions/indemnities (+$85M). The latter, which represents a 43%
      increase compared to FY18, includes the City’s increased contribution to
      the School District. In past years, the City’s rising fixed costs have
      also contributed to the rise in spending. Since FY16, debt service
      payments increased by 21% while pension costs increased by 12.5%. Other
      increases over that same period have included payroll and employee
      benefits (12%) and contracted expenditures (6%).
    </p>

    <!-- Monthly Cash Flows -->
    <h3>Monthly Cash Flows</h3>

    <p>
      The chart below shows the monthly General Fund cash revenues (top panel)
      and expenditures (bottom panel) since FY07. Monthly totals for revenue and
      spending are typically at least $200M, but they can vary significantly
      from month to month. Revenue receipts have two particularly strong months.
      The first spike occurs in February and is a result of Real Estate Tax
      receipts, while the second is in April due to BIRT receipts. The large
      increase in BIRT receipts in FY19 is evident in the top panel of the chart
      — the total revenue in April 2019 was the largest monthly total recorded
      since 2007. Unlike revenues, there is only a single spike in monthly
      spending, which occurs when the City makes its annual pension payment.
      Over the past decade, the City’s pension costs have grown substantially,
      which is reflected in the growing size of the spikes in the chart below.
    </p>

    <!-- CHART -->
    <MonthlyCashTotals :height="200" />

    <p class="mt-5 pt-3">
      Because the monthly spikes in General Fund revenue receipts and spending
      requirements are not aligned, the City typically borrows short-term funds,
      known as Tax and Revenue Anticipation Notes (TRANs), which are paid back
      by the end of the fiscal year. The size of the TRANs issued each year
      provides an indicator of the cash position of the General Fund. With lower
      cash balances, the City must borrow more money to cover the monthly
      fluctuations in expenditures. Due to its historically strong General Fund
      cash balance, the City did not have to borrow any short-term funds during
      FY19. As seen in the chart below, this is the first time the City has not
      done so since FY07.
    </p>

    <!-- CHART -->
    <AnnualTRANs :height="350" />
  </div>
</template>

<script>
import GeneralFundCashFlows from "@/charts/GeneralFundCashFlows";
import MonthlyCashTotals from "@/charts/MonthlyCashTotals";
import AnnualTRANs from "@/charts/AnnualTRANs";

export default {
  name: "GeneralFund",
  components: {
    GeneralFundCashFlows,
    MonthlyCashTotals,
    AnnualTRANs,
  },
};
</script>

