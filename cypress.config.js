const { defineConfig } = require("cypress");

module.exports = defineConfig({
  baseUrl: "https://conexaoqa.herokuapp.com/",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
