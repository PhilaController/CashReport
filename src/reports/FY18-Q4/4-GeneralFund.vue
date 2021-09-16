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

    <!-- Annual General Fund Flows-->
    <GeneralFundCashFlows :height="450" />

    <p class="mt-5 pt-3">
      The chart above shows the annual fiscal year totals for General Fund
      revenues (black) and expenditures (red).<sup
        ><a href="#fn3" id="ref3">[3]</a></sup
      >
      The relative difference between these totals determines if the General
      Fund cash balance increases or decreases from year to year. To help guide
      the reader, periods when the balance decreased are shaded red, while
      periods when the balance increased are shaded black. The immense impact of
      the Great Recession is again clear, with expenditures outpacing revenues
      by a significant margin from 2008 through 2010. It’s important to note
      that in fiscal year 2012, the majority of Department of Human Services
      expenses and associated revenues were transferred from the General Fund to
      the Grants Fund, leading to a significant drop in both General Fund
      revenues and expenditures. The City’s recovery in recent years has been
      driven by a sharp increase in annual revenue, which has grown by 20% since
      2015.
    </p>

    <p>
      The sharp rise in revenues in the last three years has been driven by a
      combination of increased taxation and the recovering economic health of
      the City. An improved economy has contributed to eight consecutive years
      of growth in Wage Tax revenue, while an improved real estate market has
      led to increased receipts from the
      <a
        href="https://www.phila.gov/services/payments-assistance-taxes/property-taxes/realty-transfer-tax/"
        target="_blank"
        >Realty Transfer Tax</a
      >
      (the tax on real estate sales or transfers). The last three years have
      also seen the addition of the
      <a
        href="https://www.phila.gov/services/payments-assistance-taxes/business-taxes/philadelphia-beverage-tax/"
        target="_blank"
        >Philadelphia Beverage Tax</a
      >, as well as single-year increases to the tax rates for the Real Estate
      Tax and Realty Transfer Tax.<sup><a href="#fn4" id="ref4">[4]</a></sup
      >.
    </p>

    <p>
      Annual General Fund expenditures, which reached a low point in fiscal year
      2012, have also increased in recent years, although less significantly
      than revenues. Over the last three years, expenses have increased by 12%,
      driven primarily by the City’s rising fixed costs: pension costs alone
      increased by 16%, while debt service increased by 13%. Other increases
      have included payroll and employee benefits (8%) and contracted
      expenditures (9%).
    </p>

    <p>
      The General Fund revenues and expenditures on a monthly basis provide a
      window into the fiscal challenges of the day-to-day operations of the
      City. As seen in the top panel of the chart below, monthly expenditures
      for the General Fund are typically at least $200 million, but can vary
      significantly from month to month. In particular, the large spending
      spikes in the chart below are due to the City’s pension payment, which is
      its single largest expense. Prior to fiscal year 2010, the payment was
      made each year in the fall, but has since been moved to the spring in
      order to better align with the timing of revenue receipts. Over the past
      decade, the City’s pension costs have grown substantially, which is
      reflected in the growing size of the spikes in the chart below.
    </p>

    <!-- Monthly General Fund Flows -->
    <MonthlyCashTotals :height="200" />

    <p class="mt-5 pt-3">
      Monthly General Fund revenues also show seasonal trends, but to a lesser
      extent than expenditures. Revenue receipts have two particularly strong
      months, as seen in the lower panel of the above chart. The first spike
      occurs in February and is from Real Estate Tax receipts, while the second
      is in April due to receipts from the Business Income and Receipts Tax.
    </p>

    <p>
      The seasonal trends in revenue receipts are not aligned with those of
      expenditures, leading to fluctuations in the cash balance from month to
      month. Like many other local governments, the timing of expenditures and
      revenues presents one of the main challenges of monthly operations. To
      relieve the seasonal trends in its cash flow, the City borrows short-term
      funds, known as Tax and Revenue Anticipation Notes (TRANs), which are paid
      back by the end of the fiscal year. The size of the TRANs issued each year
      provides an indicator of the cash position of the General Fund. With lower
      cash balances, the City must borrow more money to cover the monthly
      fluctuations in expenditures.
    </p>

    <p>
      The chart below shows these annual short-term borrowing amounts for fiscal
      years dating back to 2007. The weak General Fund cash position in the
      years directly after the Great Recession is apparent—the City issued $350
      million, $275 million, and $285 million in fiscal years 2009, 2010, and
      2011, respectively. For comparison, the TRAN amount for fiscal year 2018,
      with the strongest cash position of the past decade, was only $125
      million.
    </p>

    <!-- TRAN -->
    <AnnualTRANs :height="400" />
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

