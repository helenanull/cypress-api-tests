const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://training.bigbyte.academy/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
