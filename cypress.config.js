const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/TESTS/*.js",
    reporter: 'mochawesome'
  },
  env: {
    BASE_URL : 'https://en.wikipedia.org/w/index.php?search',
    BASE_API_URL : 'https://petstore.swagger.io/v2/'
  }
});
