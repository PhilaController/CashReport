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

async function add_archived_reports_button() {

  // Create a dropdown element and button
  let dropdown = $(`<div class="dropdown mt-2"></div>`);
  let button = $(`<button class="btn btn-primary btn-block dropdown-toggle" 
                    type="button" 
                    id="otherReportsButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">Other Cash Reports</button>`);
  let dropdownMenu = $(
    `<div class="dropdown-menu w-100" 
          aria-labelledby="otherReportsButton"
          style="max-height: 300px; overflow-y: auto"></div>`
  );

  // Load the data
  let response = await fetch("https://raw.githubusercontent.com/PhiladelphiaController/CashReport/main/src/data/cash-reports.json");
  let data = await response.json();

  // Add each URL
  let baseURL = "https://controller.phila.gov/philadelphia-audits/";
  for (let i = 0; i < data.length; i++) {
    let item = data[i]
    dropdownMenu.append(
      `<a class="dropdown-item" style="color: #212529;" href="${baseURL}/${item.slug}">${item.label}</a>`
    );
  }
  dropdown.append(button);
  dropdown.append(dropdownMenu);

  // Don't add more than once
  if ($("#otherReportsButton").length > 0) return;

  // Add the dropdown button
  $(".entry-header .btn")
    .last()
    .after(dropdown);
}

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

// When document is loaded --> turn off FA tracking
$(document).ready(function () {

  // Add the button
  add_archived_reports_button();

  // add a help message
  add_help_message();


})