import LoginPage from "../../pageObjects/LoginPage";
import loginPage from "../../pageObjects/LoginPage";

// npx cypress run --env grepTags=smoke
// verifica primeiro em todas as specs e busca as tags smoke.
// a tag smoke também pode ser colocada dentro de um describe, context ou it
// https://github.com/cypress-io/cypress-grep
// dicas para nomes de tags: smokeTests, regressão ou com @regressionTests
// npx cypress run --env grepTags=regressionTests
// npx cypress run --env grepTags=smoke
// TESTE BURN: VERIFICAR SE UM TESTE N É FLAKY => ORA QUEBRA ORA PASSA.
/* exemplo de burn: 
npx cypress run --spec cypress\e2e\ui\conexaoQA_qas.cy.js --env grepTags=flaky (exemplo)
npx cypress run --spec "cypress\e2e\ui\conexaoQA_qas.cy.js" --env grepTags="flaky",burn=10
pesquisar com o ctrl + f => Burn (repeat) tests (doc github do grep)
*/
describe("alertas", { tags: "regressionTests" }, () => {
  const login = new LoginPage();
  it.skip("valida o alerta de senha inválida", { tags: "smoke" }, () => {
    // usar o clock para controlar o tempo da aplicação!
    cy.clock();
    login.visitar();
    login.preencherEmail("emailinvalido@teste123.com");
    login.preencherSenha("123456");
    login.submeter();
    //cy.get('[data-test="alert"]')
    cy.getElement("alert")
      .should("exist")
      .and("have.text", "Credenciais inválidas");
    // Quero que um elemento dure no máximo 10 segundos!
    cy.tick(10000); // vinculado ao clock!
    // comando customizado não aceita options!
    cy.getElement("alert").should("not.exist");
  });
  it("Esse roda", { tags: "smoke" }, () => {
    // usar o clock para controlar o tempo da aplicação!
    cy.clock();
    login.visitar();
    login.preencherEmail("emailinvalido@teste123.com");
    login.preencherSenha("123456");
    login.submeter();
    //cy.get('[data-test="alert"]')
    cy.getElement("alert")
      .should("exist")
      .and("have.text", "Credenciais inválidas");
    // Quero que um elemento dure no máximo 10 segundos!
    cy.tick(10000); // vinculado ao clock!
    // comando customizado não aceita options!
    cy.getElement("alert").should("not.exist");
  });
  it("Esse não roda", () => {
    // usar o clock para controlar o tempo da aplicação!
    cy.clock();
    login.visitar();
    login.preencherEmail("emailinvalido@teste123.com");
    login.preencherSenha("123456");
    login.submeter();
    //cy.get('[data-test="alert"]')
    cy.getElement("alert")
      .should("exist")
      .and("have.text", "Credenciais inválidas");
    // Quero que um elemento dure no máximo 10 segundos!
    cy.tick(10000); // vinculado ao clock!
    // comando customizado não aceita options!
    cy.getElement("alert").should("not.exist");
  });
});
