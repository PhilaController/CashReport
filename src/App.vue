<template>
  <div data-vuetify>
    <v-app id="app">
      <v-main>
        <cash-report />
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "CashReportApp",
  components: {
    // eslint-disable-next-line
    "cash-report": require("@/reports/" + __REPORT_TAG__ + "/index.vue")
      .default,
  },
};
</script>

<style>
.header-title {
  font-size: 1.7rem;
  font-family: inherit;
  font-weight: 500;
  margin-right: 1rem;
}
.header-subtitle {
  font-style: italic;
  font-size: 1rem;
}
.card-footer {
  font-size: 0.9rem;
}
.section:nth-child(n + 2) {
  margin-top: 2.5rem;
}

#app h2,
h3 {
  margin-bottom: 1rem !important;
  margin-top: 1rem !important;
}

#app .card-header,
#app .card-footer {
  padding: 0.75rem 1.25rem !important;
}
#app .card-body {
  padding: 1.25rem !important;
}
</style>