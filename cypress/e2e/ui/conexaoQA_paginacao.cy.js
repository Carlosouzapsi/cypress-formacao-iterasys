describe("Paginação QAs", () => {
  const pagination = () => cy.get(".paginationBttns li");
  it("valida 7 perfis", () => {
    cy.intercept("GET", "/api/profile", {
      fixture: "paginacao_7_usuarios.json",
    });
    cy.visit("/perfis");

    pagination().should("not.exist");
  });
  it("Valida 8 perfis", () => {
    // dica pesquisar no browser console:
    // $$('.".paginationBttns li"') -> consegue verificar a quantidade.
    cy.intercept("GET", "/api/profile", {
      fixture: "paginacao_8_usuarios.json",
    }).as("perfis");
    cy.visit("/perfis").wait("@perfis");

    const RESULTADO_ESPERADO = ["<", "1", "2", ">"];

    // each -> É um comando cypress / forEach é js
    // os elementos do parametro el, viram do tipo string não interativo.
    // wrap -> converte um elemento para um el interativo /comando jquery
    pagination()
      .should("have.length", RESULTADO_ESPERADO.length)
      .each((el, index) => {
        //usando o wrap é possivel tornar esse elemento clicavel de novo.
        cy.wrap(el).should("have.text", RESULTADO_ESPERADO[index]);
      });
  });
  it.only("Valida 99 perfis", () => {
    cy.intercept("GET", "/api/profile", {
      fixture: "paginacao_63_usuarios.json",
    }).as("perfis");
    cy.visit("/perfis").wait("@perfis");
    const RESULTADO_ESPERADO = [
      "<",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ">",
    ];
    pagination()
      .should("have.length", RESULTADO_ESPERADO.length)
      .each((el, index) => {
        //usando o wrap é possivel tornar esse elemento clicavel de novo.
        cy.wrap(el).should("have.text", RESULTADO_ESPERADO[index]);
      });
  });
});
