<template>
  <div id="cash-fund-balances" class="section">
    <h2>End-of-Fiscal-Year Cash Balances, 2007 - 2018</h2>
    <hr class="titlebar" />

    <!-- Annual Balances  -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      The above chart shows the fiscal year-end cash balances from 2007 to 2018
      for the General Fund (blue), Capital Fund (orange), and Grants Fund
      (yellow). The combined total of these funds, plus a few smaller funds as
      mentioned previously, is shown as the Consolidated Cash account (green).
      FY18 was a noteworthy year for the Consolidated Cash account, having both
      the largest single-year increase and the highest end-of-year balance since
      2007. With a closing balance of $993 million, the Consolidated Cash
      account has surpassed its pre-Great Recession balance of $787 million in
      2007.
    </p>
    <p>
      As the primary component of the Consolidated Cash account, the General
      Fund balance closely tracks the Consolidated Cash balance from year to
      year. The General Fund, with the majority of its revenue generated through
      local taxes, is more sensitive to the economic climate than either the
      Grants or Capital Funds. The General Fund cash balance reached its low
      point in the years following the Great Recession, with an end-of-year
      deficit of $31 million in 2010. From that low point, the General Fund cash
      balance has climbed slowly to its FY18 closing balance of $769 million
      from a combination of economic growth and tax rate increases.
    </p>
    <p>
      Unlike the General Fund, the Capital Fund is comprised mostly of long-term
      debt (bond proceeds) usually issued on a two-year cycle. This funding
      process results in the Capital Fund cash balance decreasing over the
      course of several years from about $200 million to about $0 as bond
      proceeds are spent. When new bonds are issued, the balance is replenished
      to about $200 million.
    </p>
    <p>
      The majority of revenues for the Grants Fund are reimbursement-based,
      which often results in the fund having a negative cash balance at the end
      of the fiscal year (as was the case from 2012 to 2017). In particular, the
      Department of Human Services experienced issues with filing and receiving
      reimbursements from the Commonwealth of Pennsylvania in a timely fashion
      in the past. These issues saw great improvement in FY18, contributing to
      the $250 million increase from 2017 to 2018 in the Grants Fund cash
      balance. This is an important development because when the Grants Fund
      balance is negative, the General Fund and other funds within the
      Consolidated Cash account must loan funds to the Grants Fund to pay its
      obligations.
    </p>

    <!-- Annual Changes  -->
    <AnnualFundBalanceChanges :height="450" />

    <p class="mt-5 pt-3">
      Another way to view the historical trends in the cash position of the City
      is through the year-over-year changes in the balances of the various
      funds. The strong growth in cash in FY18 brackets the City’s recovery from
      the large cash losses experienced in 2008 due to the Great Recession. The
      year-over-year changes also show FY18 as the only year in the past decade
      with balance increases for each of the Grants, Capital, and General Funds,
      leading to an increase of more than $600 million in the Consolidated Cash
      balance in a single year.
    </p>
  </div>
</template>

<script>
import HistoricalBalances from "@/charts/HistoricalBalances";
import AnnualFundBalanceChanges from "@/charts/AnnualFundBalanceChanges";

export default {
  name: "CashBalances",
  components: {
    HistoricalBalances,
    AnnualFundBalanceChanges,
  },
};
</script>

