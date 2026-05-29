const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: false, // Mantemos falso para não precisar de arquivos extras de suporte
    setupNodeEvents(on, config) {
      // implemente node event listeners aqui se necessário
    },
  },
});