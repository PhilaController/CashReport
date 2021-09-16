<template>
  <div id="cash-fund-balances" class="section">
    <h2>Cash Balances</h2>
    <hr class="titlebar" />

    <p>
      The City publishes the monthly cash balance, actual and projected, for
      each of its major funds, within the QCMR. For its day-to-day operations,
      the City pools together the cash balances associated with several funds
      into a single account, known as the Consolidated Cash account. Three major
      funds, listed below, and several smaller funds, including the Housing
      Trust and Hospital Assessment Funds, contribute to the Consolidated Cash
      account:
    </p>
    <ul>
      <li>
        the General Fund, which is the principal operating fund of the City.
        About three-quarters of the revenue flowing into the General Fund is
        generated from local taxes;
      </li>
      <li>
        the Grants Fund, which manages grants received from state, federal, and
        private agencies; and
      </li>
      <li>
        the Capital Fund, which manages resources for investing in facilities
        and infrastructure throughout the City. The majority of its revenue
        arises from bond proceeds.
      </li>
    </ul>

    <p>
      Following years of strong economic growth, the City began FY20 with
      historically high cash levels, a trend that continued through the first
      three quarters of the fiscal year. However, beginning in April 2020, the
      COVID-19 pandemic had a dramatic and immediate effect on the City’s cash
      levels. Social distancing measures and the city’s stay-at-home order led
      to a sharp decline in economic activity, leading tax revenue collections
      to fall sharply in the last quarter of FY20. In addition to declining
      revenues, the City shifted the filing dates for the Business Income and
      Receipts Tax (BIRT) and the Net Profits Tax from April 2020 to July 2020
      to match changes to the federal tax filing date. For these reasons,
      revenue collection fell sharply in FY20 Q4, and the City’s General Fund
      ended the fiscal year with a balance of $759M, a decline of $208M from the
      year-end balance for FY19. While this represents the largest
      year-over-year decline for the General Fund since the Great Recession in
      FY08, the year-end balance in FY20 is similar to the year-end balance for
      FY18 and is still larger than any closing balance from FY07 to FY17. These
      reserves will be necessary throughout the next fiscal year, as the
      economic impact of the ongoing pandemic continues. The City projected
      further declines in the adopted FY21 budget and is expecting to end the
      year with a General Fund cash balance of $505M.
    </p>
    <p>
      Despite the General Fund’s lower balance, the City’s Consolidated Cash
      account ended the fiscal year with a balance of $1,382M, an increase of
      $296M from FY19 and the highest year-end balance since at least 2007. This
      was due in part to higher balances for both the Capital Fund and Grants
      Fund at the end of FY20. The year-end Capital Fund balance remained
      historically high following an uncommonly large issuance of new debt
      (about $300M) in the first quarter of FY20. These funds will continue to
      be spent down over the course of the next several years, as capital
      projects for facilities and infrastructure across the city are undertaken.
      The Grants Fund ended the fiscal year with a positive balance of $162M
      resulting from an influx of grant funding in response to the ongoing
      COVID-19 pandemic. This funding included $276M from the federal CARES Act,
      <sup>
        <a class="text-link" href="#ref1" id="fn1" title="Jump to footnote 1."
          >[1]&nbsp;</a
        >
      </sup>
      with $100M going to the General Fund and the remaining amount ($176M)
      going to the Grants Fund.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      As the COVID-19 pandemic continues, the City is expecting revenue declines
      to persist through the next fiscal year, and the City’s reserves will be
      an important tool in weathering the economic downturn. Internally, the
      City aims for a General Fund balance that is between 6% and 8% of annual
      expenditures, while the Government Finance Officers Association (GFOA)
      recommends municipalities, regardless of size, maintain a fund balance
      equal to at least 17% of annual expenditures. These guidelines are set for
      a fund balance reported on a modified accrual basis, rather than a cash
      basis. The modified accrual basis accounts for future, but known, revenues
      and expenditures. Fund balances using this method are typically lower than
      balances on a cash basis. For example, in FY19 the City’s General Fund
      balance on a modified accrual basis was $438.7M, or 9.2% of annual
      expenditures. On a cash basis, the General Fund balance was $996.4M, or
      21% of expenditures.
    </p>

    <p>
      The General Fund’s FY20 cash balance of $758.8M represents about 16% of
      the year’s cash expenditures. On a modified accrual basis, the end-of-year
      balance is currently projected to be $254.9M, which is about 5.0% of total
      expenditures. As seen in the chart below, this modified accrual projection
      is likely to be underestimated. Based on the General Fund’s cash balance
      at the end of FY20, the final modified accrual balance is likely to fall
      between $191M and $441M, or about 3.8% and 8.8% of annual expenditures,
      respectively. If the balance were to fall within this range, it could
      satisfy the City’s internal goal of 6% to 8% but still fall short of the
      GFOA’s recommended level.
    </p>

    <!-- CHART -->
    <FundBalanceRevisions :height="450" />
  </div>
</template>

<script>
import HistoricalBalances from "@/charts/HistoricalBalances";
import FundBalanceRevisions from "@/charts/FundBalanceRevisions";

export default {
  name: "CashBalances",
  components: { HistoricalBalances, FundBalanceRevisions },
};
</script>

