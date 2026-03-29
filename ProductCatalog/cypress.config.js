module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
    chromeWebSecurity: false,
    video: true,
    screenshotOnRunFailure: true,
    requestTimeout: 10000,
    responseTimeout: 10000,
    defaultCommandTimeout: 5000
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite'
    }
  }
}
