const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    urlApp: "https://cloud.cypress.io/login/email",
    viewportWidth: 1920,
    viewportHeight: 1080,
    appUser: "standard_user",
    appPassword: "secret_sauce"
  },
  e2e: {
    setupNodeEvents(on, config) {
    },
  },

});
