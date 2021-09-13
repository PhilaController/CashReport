<template>
  <div class="section">
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
        The General Fund, which is the principal operating fund of the City.
        About three-quarters of the revenue flowing into the General Fund is
        generated from local taxes;
      </li>
      <li>
        The Grants Fund, which manages grants received from state, federal, and
        private agencies; and
      </li>
      <li>
        The Capital Fund, which manages resources for investing in facilities
        and infrastructure throughout the City. The majority of its revenue
        arises from bond proceeds.
      </li>
    </ul>

    <p>
      Prior to the onset of the COVID-19 pandemic in March 2020, the City’s cash
      balances had grown to their highest levels since the Great Recession.
      While the strong cash balances cushioned the immediate impact of the
      pandemic on City finances, the General Fund ended FY20 with a cash balance
      $208M lower than the closing balance from the previous year. This
      year-over-year decline resulted from a sharp drop in tax revenue during
      FY20 Q4 as the local economy was impacted by the pandemic, as well as a
      shift in the collection date for the City’s Business Income and Receipts
      Tax (BIRT) and Net Profits Tax. The filing date for these taxes was
      changed from April to July 2020. Thus, tax revenue that would have been
      collected during the fourth quarter of FY20 was not collected until the
      first quarter of FY21.
    </p>
    <p>
      For the first time since FY18, the City issued a $300M Tax and Revenue
      Anticipation Note (TRAN) in the first quarter of FY21. This short-term
      borrowing helped to offset the seasonality of monthly cash flows and
      temporarily strengthened the General Fund’s cash position throughout the
      fiscal year. After paying off the TRAN during FY21 Q4, the City’s General
      Fund ended the year with a cash balance of $981M. This represents the
      highest end-of-year cash balance since the Great Recession, an increase of
      $223M relative to FY20 and $15M more than the previous record high in
      FY19.
    </p>
    <p class="mb-5 pb-3">
      The Capital Fund’s end-of-year cash balance in FY21 was $162M lower than
      FY20, a result of the City using bond proceeds from an FY20 borrowing to
      fund infrastructure projects across the city. The City also received the
      first half of its $1.4B allocation from the American Rescue Plan (ARP)
      during the second half of FY21. This unprecedented influx of federal
      relief brought the Grants Fund to its highest-ever ending balance of
      $950M, a $788M increase over FY20. With strong cash balances for the
      General and Grants Funds, the City’s Consolidated Cash account ended FY21
      with a balance of more than $2.2B. This represents an $825M increase from
      its closing FY20 balance. Despite the negative impacts of the pandemic,
      the Consolidated Cash account, the General Fund, and the Grants Fund all
      ended FY21 with their highest cash balances since the Great Recession.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      Internally, the City aims for a General Fund balance that is between 6%
      and 8% of annual expenditures, while the Government Finance Officers
      Association (GFOA) recommends municipalities, regardless of size, maintain
      a fund balance equal to at least 17% of annual expenditures. These
      guidelines are set for a fund balance reported on a modified accrual
      basis, rather than a cash basis. The modified accrual basis accounts for
      future, but known, revenues and expenditures. Fund balances using this
      method are typically lower than balances on a cash basis. For example, in
      FY20 the City’s General Fund balance on a modified accrual basis was
      $291M, or 5.8% of annual expenditures. On a cash basis, the General Fund
      balance was $759M, or 15.7% of expenditures.
    </p>

    <p class="mb-5 pb-3">
      The General Fund’s FY21 cash balance of $981M represents 20.9% of the
      year’s cash expenditures. On a modified accrual basis, the end-of-year
      balance is currently projected to be $79M, which is only 1.7% of total
      expenditures. As seen in the chart below, this modified accrual projection
      is likely to be underestimated. This chart uses the historical
      relationship between the end-of-year cash balance and the final modified
      accrual balance to estimate the final balance in FY21. Based on the cash
      balance at the end of FY21, the final modified accrual balance is likely
      to fall between $205M and $462M, or about 4.1% and 9.4% of annual
      expenditures, respectively. If the balance were to fall within this range,
      it could potentially satisfy the City’s internal goal of 6% to 8% but
      would still fall short of the GFOA’s recommended level. However, it would
      be substantially larger than the City’s fund balances in the aftermath of
      the Great Recession, when the City ended FY09 and FY10 with negative
      modified accrual balances.
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

