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
      The City’s cash levels at the end of FY19 were the highest in more than a
      decade, surpassing the historic balances at the end of last fiscal year.
      The Consolidated Cash balance at the end of FY19 was $1,085.9M, while the
      General Fund balance was $966.4M. As shown in the figure below, these are
      the highest cash balances at the end of a fiscal year since FY07. The
      closing balances for Consolidated Cash and the General Fund increased by
      $92.5M and $197.5M, respectively, relative to the balances at the end of
      FY18.
    </p>
    <p>
      The end-of-year balances for the Capital Fund and Grants Fund were in line
      with historical expectations. Because the Capital Fund is comprised mostly
      of long-term debt (bond proceeds), which is usually issued on a two-year
      cycle, its balance has a cyclical nature. As bond proceeds are spent, the
      balance decreases from about $200M to about $0. When new bonds are issued,
      the balance is replenished to about $200M. FY19 was near the end of this
      cycle, with bond proceeds being spent and the end-of-year balance
      approaching $0.
    </p>

    <p>
      The Grants Fund, which is largely reimbursement-based, has struggled
      historically to maintain an end-of-year cash balance near $0, primarily
      due to delays by the Department of Human Services in filing and receiving
      reimbursements from the Commonwealth of Pennsylvania. This situation
      greatly improved in FY18, and the trend has continued in FY19. The Grants
      Fund ended FY19 with a relatively small negative cash balance of negative
      $21.9M.
    </p>

    <!-- CHART -->
    <HistoricalBalances :height="450" />
    <AnnualFundBalanceChanges class="mt-5" :height="450" />

    <p class="mt-5 pt-3">
      Given the City’s historically high General Fund balance, it’s important to
      consider the recommended level of funding reserves for municipalities.
      Rating agencies, such as Standard & Poor’s (S&P), set guidelines for what
      is deemed an adequate, good, and strong level of reserves. S&P considers
      fund balance levels that are 8% to 15% of annual expenditures to be
      strong, while 4% to 8% is considered good. The Government Finance Officers
      Association (GFOA) recommends governments, regardless of size, maintain a
      fund balance of no less than two months of General Fund expenditures,
      corresponding to about 17% of annual expenditures. Internally, the City
      aims for a General Fund balance that is between 6% and 8% of annual
      expenditures.
    </p>

    <p>
      These guidelines are set for a fund balance reported on a modified accrual
      basis, rather than a cash basis. The modified accrual basis accounts for
      future, but known, revenues and expenditures. Fund balances using this
      method are typically lower than balances on a cash basis. For example, in
      FY18 the City’s General Fund balance on a modified accrual basis was
      $368.8M, or 8.4% of annual expenditures. On a cash basis, the General Fund
      balance was $768.9M, or 18.0% of expenditures.
    </p>

    <p>
      The General Fund’s FY19 cash balance of $966.4M represents about 21% of
      the year’s cash expenditures. On a modified accrual basis, the end-of-year
      balance is currently projected to be $297.7M, which is about 6.2% of total
      expenditures. However, this balance is not yet finalized and will likely
      be adjusted during the first quarter of the next fiscal year. In the past,
      the General Fund’s cash balance at the end of the fiscal year has been a
      strong predictor of the final balance on a modified accrual basis. This
      historical relationship is shown in the figure below. The blue shaded
      region in the figure highlights the mostly likely range of values for the
      modified accrual balance.
    </p>

    <!-- CHART -->
    <FundBalanceRevisions :height="450" />
    <p class="mt-5 pt-3">
      Based on the General Fund’s cash balance at the end of FY19, the final
      modified accrual balance is likely to fall between $434M and $624M, or
      about 9% and 13% of annual expenditures, respectively. If the balance were
      to fall within this range, it would surpass the City’s internal goal of 6%
      to 8% and be considered a strong reserve level by S&P. While still short
      of the GFOA’s recommendation of 17%, it would represent substantial
      improvement over past years, when the City’s funding reserves were well
      below the recommended guidelines in the aftermath of the Great Recession.
    </p>
  </div>
</template>

<script>
import HistoricalBalances from "@/charts/HistoricalBalances";
import FundBalanceRevisions from "@/charts/FundBalanceRevisions";
import AnnualFundBalanceChanges from "@/charts/AnnualFundBalanceChanges";

export default {
  name: "CashBalances",
  components: {
    HistoricalBalances,
    FundBalanceRevisions,
    AnnualFundBalanceChanges,
  },
};
</script>

