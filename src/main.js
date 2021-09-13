import Vue from 'vue'
import '@/plugins/composition'
import '@/plugins/chartjs'
import vuetify from '@/plugins/vuetify'
import App from '@/App.vue'
import $ from "jquery"

Vue.config.productionTip = false

// load and set the HTML template we are using
let audit_content = $(".audit-content");
audit_content.html(`<div id="app"></div>`);

function add_help_message() {

  if ($(".help-message").length > 0) return;

  let helpMessage = `<p class='help-message'>
  Comments or feedback? Please contact
  <a href="mailto:controller@phila.gov">controller@phila.gov</a>.
  </p>`;
  $(".back-link").after(helpMessage);
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// add a help message
add_help_message();