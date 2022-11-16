const { defineConfig } = require("cypress");
const fs = require("fs"); // criar, deletar arquivos, etc

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // listener  // utilizando tasks
      on("task", {
        msgConsole() {
          console.log("teste de mensagem no node");

          return null;
        },

        lerPasta(caminho) {
          return fs.readdirSync(caminho).length;
        },

        lerEmail() {
          return process.env.email;
        },
      });
    },
    baseUrl: "https://conexaoqa.herokuapp.com/",
    viewPortHeight: 1080,
    viewPortWidth: 1920,
  },
});
