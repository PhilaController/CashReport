# Tracking the City of Philadelphia's Cash Balances

The code behind the interactive reports analyzing the City of Philadelphia's cash balances. 
These reports are produced quarterly using data from the Quarterly City Manager's Report. 

View the past cash reports::

- [FY21 Q4](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2021/)
- [FY21 Q3](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2021-q3/)
- [FY21 Q2](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2021-q2/)
- [FY20 Q1](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2021-q1/)
- [FY20 Q4](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2020/)
- [FY20 Q3](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2020-q3/)
- [FY20 Q2](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2020-q2/)
- [FY19 Q1](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2020-q1/)
- [FY19 Q4](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2019/)
- [FY19 Q3](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2019-q3/)
- [FY19 Q2](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2019-q2/)
- [FY10 Q1](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2019-q1/)
- [FY19 Q4](https://controller.phila.gov/philadelphia-audits/cash-report-fiscal-year-2018/)


![Interactive Dashboard Part 1](public/screenshot-1.png)
![Interactive Dashboard Part 2](public/screenshot-2.png)

## Tools

The application is built using a combination of open-source tools, including
[vue](https://github.com/vuejs/vue), [vuetify](https://github.com/vuetifyjs/vuetify), and [Chart.js](https://github.com/chartjs).


## Development
### Project setup
```
yarn install
```
#### Compiles and hot-reloads for development
```
make serve fy=XXXX q=Y
```

where `XXXX` is the fiscal year and `Y` is the quarter that you wish to show.

#### Compiles and minifies for production
```
make build fy=XXXX q=Y
```
where `XXXX` is the fiscal year and `Y` is the quarter that you wish to show.
