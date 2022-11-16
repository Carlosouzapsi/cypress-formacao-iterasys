/*
- BOA PRATICA DE ORGANIZAÇÃO DE TESTES:
- Estado de execução
- Quando construimos um teste tempos etapas de pré execução (pré-requisitos)
- OS testes com hooks similares ou iguais podem estar dentro dos contexts
- Não existe no final das contas uma formula magica para hooks
*/
/*
Limpeza de ambiente, sempre usar no before, e não nos afters
*/
describe.skip("DESCRIBE - testes do site iterasys", () => {
  before(() => {
    // executa 1x antes de tudo e todos.
    cy.log("DESCRIBE - BEFORE ALL ");
  });
  beforeEach(() => {
    // executa 1x para todos os its (testes) da suite
    cy.log("DESCRIBE - BEFORE EACH");
  });
  after(() => {
    cy.log("DESCRIBE - AFTER ALL");
  });
  afterEach(() => {
    cy.log("DESCRIBE - executado ao final de cada teste");
  });
  // Usar o context para organizar os testes
  context("CONTEXT - página inicial", () => {
    before(() => {
      // executa 1x antes de tudo e todos somente dentro desse context.
      cy.log("CONTEXT - BEFORE ALL ");
    });
    // Eu crio testes em cypress com o it
    it("meu primeiro teste", () => {
      cy.log("Meu primeiro teste");
    });
    it("meu segundo caso de teste", () => {
      cy.log("Meu segundo teste");
    });
  });
  context("CONTEXT - cursos", () => {
    before(() => {
      // executa 1x antes de tudo e todos somente dentro desse context.
      cy.log("SEGUNDO CONTEXT - BEFORE ALL ");
    });
    beforeEach(() => {
      // executa 1x para todos os its (testes) da suite
      cy.log("SEGUNDO CONTEXT - BEFORE EACH");
    });
    after(() => {
      cy.log("CONTEXT - after");
    });
    afterEach(() => {
      cy.log("CONTEXT - executado ao final de cada teste");
    });
    it("meu terceiro teste", () => {
      cy.log("terceiro teste");
    });
    it("meu quarto teste", () => {
      cy.log("quarto teste");
    });
    it("meu quarto teste", () => {
      cy.log("quarto teste");
    });
    it("meu quinto teste", () => {
      cy.log("quinto teste");
    });
  });
});
