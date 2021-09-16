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
      Total cash revenue for the General Fund totaled $4,627M in FY20, a decline
      of $220M from last fiscal year, while cash spending totaled $4,835M, an
      increase of about $185M. As seen in the chart below, FY20 was the first
      fiscal year that General Fund spending exceeded cash receipts since FY15.
      Over that period, the City’s annual cash spending has increased
      dramatically, by more than $1,000M. In recent years, strong economic and
      revenue growth supported the increased spending, but the economic
      contraction initiated by the COVID-19 pandemic saw City revenues fall and
      spending rise, forcing the City to rely on its reserves to account for the
      deficit.
    </p>

    <!-- CHART -->
    <GeneralFundCashFlows :height="450" />

    <p class="mt-5 pt-3">
      The fiscal impact of COVID-19 was large, leading to lower cash receipts
      and increased spending. Through three quarters of the year, cash revenue
      had increased year-over-year by about 4.2%, while spending had increased
      by 2.6%. However, by the end of the fiscal year total revenue had declined
      relative to FY19 by 4.6% and spending had increased by about 4.0%.
      Relative to FY19, the City collected $366M less in revenue during the
      fourth quarter of FY20, while spending $89M more than in FY19 Q4. As seen
      in the chart below, the largest revenue decline came in the month of April
      due to the City shifting deadlines for BIRT and the Net Profits Tax to
      July 2020 (the first month of FY21).
    </p>

    <p>
      The fiscal impact of COVID-19 was large, leading to lower cash receipts
      and increased spending. Through three quarters of the year, cash revenue
      had increased year-over-year by about 4.2%, while spending had increased
      by 2.6%. However, by the end of the fiscal year total revenue had declined
      relative to FY19 by 4.6% and spending had increased by about 4.0%.
      Relative to FY19, the City collected $366M less in revenue during the
      fourth quarter of FY20, while spending $89M more than in FY19 Q4. As seen
      in the chart below, the largest revenue decline came in the month of April
      due to the City shifting deadlines for BIRT and the Net Profits Tax to
      July 2020 (the first month of FY21).
    </p>

    <!-- Charts -->
    <Comparison :height="350" flavor="revenue" />
    <Comparison class="mt-5" :height="350" flavor="spending" />

    <p class="mt-5 pt-3">
      The year-over-year decline in General Fund revenue in FY20 Q4 (-$366M)
      underestimates the true revenue impact of COVID-19, as it includes $100M
      in additional revenue received through the CARES Act as part of the
      federal pandemic response.
      <sup>
        <a class="text-link" href="#ref2" id="fn2" title="Jump to footnote 2."
          >[2]&nbsp;</a
        >
      </sup>
      When including only tax revenue receipts, revenue collections declined by
      $467M in FY20 Q4 relative to FY19 Q4. Due to the change in the filing
      date, the decline in BIRT collections was most severe, although the City
      anticipates making up most, but not all, of the BIRT decline following the
      July filing deadline. However, collections of all major tax revenues
      declined year-over-year in FY20 Q4, a reflection of the significant
      reduction in economic activity throughout FY20 Q4.
    </p>

    <!-- Chart -->
    <p class="mt-2">
      <img
        loading="lazy"
        class="aligncenter"
        src="https://controller.phila.gov/wp-content/uploads/2020/10/FY20-Q4-Cash-Report-YOY-Declines.png"
        alt=""
        width="700"
        sizes="(max-width: 700px) 100vw, 700px"
      />
    </p>

    <p class="mt-3">
      As the City addressed the COVID-19 pandemic in FY20 Q4, spending in three
      main areas had large increases relative to the fourth quarter of last
      fiscal year. Spending on payroll for City employees increased most
      dramatically, with the City spending $137M more on payroll in FY20 Q4 than
      in FY19 Q4, a year-over-year increase of 36%. Contracted spending and
      spending on materials/equipment also saw large relative increases,
      increasing by 26% (+$49M) and 24% (+$6M), respectively, relative to the
      fourth quarter of last fiscal year.
    </p>

    <p>
      The large increase in payroll spending is the result of long-term trends,
      exacerbated by the COVID-19 pandemic. In recent years the City’s workforce
      and overtime costs have both grown by a substantial amount, typically a
      sign of poor overtime controls and management. The City ended FY20 with
      22,422 General Fund employees, 212 more employees than at the end of FY19.
      Meanwhile, the City’s annual overtime costs surpassed $200M for the first
      time ever in FY20 and increased by 16% (+$28M) relative to FY19.
      <sup>
        <a class="text-link" href="#ref3" id="fn3" title="Jump to footnote 3."
          >[3]&nbsp;</a
        >
      </sup>
      In addition to rising overtime costs, the City also agreed to temporary
      wage increases (a pay rate of 150% per hour) for about 15,000 employees
      deemed essential during the start of the pandemic. Finally, the City also
      agreed to one-year contract extensions with its four municipal unions that
      included negotiated wage increases and retroactive payments that impacts
      payroll costs in FY20 Q4.
    </p>
  </div>
</template>

<script>
import Comparison from "@/charts/Comparison";
import GeneralFundCashFlows from "@/charts/GeneralFundCashFlows.vue";

export default {
  name: "GeneralFund",
  components: { Comparison, GeneralFundCashFlows },
};
</script>

