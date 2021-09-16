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
        and infrastructure throughout the city. The majority of its revenue
        arises from bond proceeds.
      </li>
    </ul>

    <p>
      The recent upward trend for the City’s cash position has continued through
      the first quarter of fiscal year 2020. As seen in the figure below, the
      cash balances at the end of FY20 Q1 for the General Fund ($896M) and the
      Consolidated Cash account ($1,506M) were both historic highs. Following
      relatively slow progress since the Great Recession, the City’s cash levels
      have increased more dramatically over the last three fiscal years. Since
      FY17 Q1, the Consolidated Cash balance has increased by more than $1B,
      while the General Fund cash balance has increased by more than $500M.
    </p>

    <!-- Chart -->
    <HistoricalBalances :height="450" />

    <p class="mt-5 pt-3">
      The Consolidated Cash balance at the end of FY20 Q1 ($1,506M) is nearly
      $500M higher than the end-of-Q1 balance for last fiscal year. This large
      increase is due in part to new bond proceeds for the Capital Fund. In FY20
      Q1, the City replenished the Capital Fund with an uncommonly large
      issuance of new debt (about $300M). As such, the Capital Fund balance,
      which typically reaches a peak balance of about $200M, had a balance of
      $436M at the end of FY20 Q1. These funds should be spent down over the
      course of the next several years, as capital projects for facilities and
      infrastructure across the city are undertaken.
    </p>

    <p>
      These end-of-Q1 fund balances are significantly higher than the City’s
      projections from just a few months ago. During the annual budget process,
      the City produces a
      <a
        href="https://www.picapa.org/wp-content/uploads/2019/06/FY20-24-Five-Year-Plan-Adopted.pdf"
        target="blank_"
        >Five Year Plan</a
      >, which includes projections for the City’s cash levels during the
      upcoming fiscal year. The projections for FY20, adopted by City Council in
      June 2019, substantially underestimated the fund balances at the close of
      Q1 (Sept 30, 2019). The actual end-of-Q1 balance for the General Fund was
      $343M higher than the projected amount in the Five Year Plan, while the
      actual Consolidated Cash balance was $515M higher. Some of the reasons for
      these differences include:
    </p>
    <ul>
      <li>
        The City received more revenue and kept expenditures lower than
        projected amounts during the last quarter of FY19. As a result, the
        General Fund began FY20 with a cash balance that was $126M higher than
        projected in the Five Year Plan;
      </li>
      <li>
        The City spent $230M less from the General Fund during FY20 Q1 than the
        projection in the Five Year Plan; and
      </li>
      <li>
        The cash balances for the Capital Fund and Grants Fund each ended FY20
        Q1 about $60M higher than anticipated in the Five Year Plan.
      </li>
    </ul>

    <p>
      The Five Year Plan projections illustrate the City’s tendency to err on
      the conservative side when producing fund balance projections. This is
      important context when considering the City’s Q1 projections for the FY20
      year-end fund balances. The year-end cash balance for the General Fund is
      projected to be $851M, about $115M less than the FY19 closing balance. The
      projected year-end balance for Consolidated Cash this year, $1,159M, is
      similar to the Q1 year-end balance projection for FY19, only $73M higher.
      Based on recent history, these Q1 estimates for year-end balances are most
      likely underestimated.
    </p>

    <!-- Monthly Historical Balances -->
    <Comparison :height="350" flavor="fund-balance" />

    <p class="mt-5 pt-3">
      Using data since 2007, the figure below shows the differences between the
      actual year-end cash balances and the projected year-end balances
      estimated in Q1. The figure also illustrates the typically conservative
      nature of the City’s Q1 projection. For both Consolidated Cash and the
      General Fund, Q1 projections of year-end cash balances have underestimated
      (black bars) actual balances for most years since 2007. The actual balance
      for Consolidated Cash has been $178M higher than the Q1 projection on
      average, while the actual General Fund balance has been $156M higher than
      the Q1 projection on average. Last fiscal year, the actual year-end
      balances for Consolidated Cash and the General Fund exceeded the Q1
      projection by $421M and $282M, respectively.
    </p>

    <!-- Accuracy of Fund Balance Projections -->
    <FundBalanceProjectionAccuracy :height="400" />
  </div>
</template>

<script>
import HistoricalBalances from "@/charts/HistoricalBalances";
import Comparison from "@/charts/Comparison";
import FundBalanceProjectionAccuracy from "@/charts/FundBalanceProjectionAccuracy";

export default {
  name: "CashBalances",
  components: { HistoricalBalances, Comparison, FundBalanceProjectionAccuracy },
};
</script>

