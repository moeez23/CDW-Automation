const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r5s4ya', defaultCommandTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 1080,
  },
});
