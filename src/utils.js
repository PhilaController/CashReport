import { FISCAL_YEAR, QUARTER } from "@/config"
import { csv } from 'd3-fetch';
import { format } from 'd3-format';

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function formatFunction(value, decimals = 1) {

    // Format the value
    let out = format(`,.${decimals}f`)(Math.abs(value));

    // Add dollar sign and millions marker
    out = "$" + out + "M";

    // Add minus sign
    if (value < 0) out = "\u2212" + out;
    return out;
}

function getFiscalYearTag(fiscalYear) {
    return `FY${fiscalYear.toString().slice(2)}`
}

function getFiscalQuarterTag(fiscalYear, quarter) {
    return `FY${fiscalYear.toString().slice(2)} Q${quarter}`
}

function getReportTag() {
    return `${getFiscalYearTag(FISCAL_YEAR)}-Q${QUARTER}`
}

const MONTHS = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

function getMonths(quarter) {
    if (quarter === 1) return MONTHS.slice(0, 3);
    else if (quarter == 2) return MONTHS.slice(3, 6);
    else if (quarter == 3) return MONTHS.slice(6, 9);
    else return MONTHS.slice(9, 12);
}

function getDownloadURL(key) {

    let folder = getReportTag();
    return `https://cash-report-public.s3.amazonaws.com/${folder}/${key}.csv`;
}

function fetch(key) {
    try {
        let data = csv(getDownloadURL(key));
        return data
    } catch (e) {
        console.error(e);
    }
}


const fundOptions = [
    "General Fund",
    "Consolidated Cash",
    "Grants Fund",
    "Total Capital Funds"
];

const revenueOptions = [
    "Total Cash Receipts",
    "Wage, Earnings, Net Profits",
    "Real Estate Tax",
    "BIRT",
    "Realty Transfer Tax",
    "Sales Tax",
    "Beverage Tax",
    "Other Taxes",
    "Locally Generated Non-Tax",
    "Prior Year Revenue",
    "Other Governments"
];

const spendingOptions = [
    "Total Disbursements",
    "Payroll",
    "Employee Benefits",
    "Contracts / Leases",
    "Materials / Equipment",
    "Advances / Labor Obligations",
    "Pension",
    "Contributions / Indemnities",
    "Debt Service",
    "Prior Year Payments"
];

function getDataCategories(flavor) {
    if (flavor === "fund-balance") return fundOptions;
    if (flavor === "revenue") return revenueOptions;
    if (flavor === "spending") return spendingOptions;
}

function isProjection(dataset, month) {
    let thisFYTag = getFiscalYearTag(FISCAL_YEAR);

    // Determine the quarter
    let quarter = QUARTER;
    if (dataset.indexOf("Q") > -1) quarter = parseInt(dataset.slice(-1));

    // Last fiscal year are actuals
    if (!dataset.startsWith(thisFYTag)) return false

    // Need to check the months
    let month_index = MONTHS.indexOf(month);
    if (quarter == 4) return false
    else if (quarter == 1 && month_index < 3) return false;
    else if (quarter == 2 && month_index < 6) return false;
    else if (quarter == 3 && month_index < 9) return false;

    return true;
}

export {
    getReportTag,
    getDownloadURL,
    fetch,
    getDataCategories,
    getFiscalQuarterTag,
    getFiscalYearTag,
    getMonths,
    isProjection,
    MONTHS,
    formatFunction,
    capitalize
}