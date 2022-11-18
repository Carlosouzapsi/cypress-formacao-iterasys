describe("home page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.skip(" Anotações Aula: valida o título e o subtítulo da aplicação", () => {
    // cy.get(`[data-test="landing-title"]`).should("exist"); // mesma solução

    // usar and(condition) depois de um should evitar repetir should
    cy.get(`[data-test="landing-title"]`)
      .should("be.visible")
      .and("have.class", "x-large");

    // "parente do método cy.get()"
    cy.contains(
      "Crie um perfil/portfolio, compartilhe posts e obtenha ajuda da comunidade de QA"
    ); // nem precisa ser o texto inteiro
    cy.contains("portfolio").should("exist"); // pegando tbm pelo texto.

    cy.contains("h1", "QAs");
  });
  it.skip(" Anotações Aula: seleciona vários elementos", () => {
    // $$(`a`) -> verificar a quantidade de um determinado seletor no console do nav.
    cy.get("a")
      .eq(5) // encadeando comandos tag <a> do html que tem o indice 5
      .should("have.text", "Cadastrar");
    cy.get("a").eq(6).should("have.text", "Login");

    // Elemento a que tenha a classe btn-primary:
    cy.get("a.btn-primary").should("have.text", "Cadastrar");
  });
  it.skip(" Anotações Aula: seleciona os elementos com o find", () => {
    // buscando um h1 dentro de uma tag section com o comando find() "procurar"
    cy.get(".landing").find("h1").should("have.text", "Conectando QAs ...");
  });
  it.only(" Anotações Aula: Seleciona elementos com o next", () => {
    cy.get("li").eq(0).next(); // proximo elemento da lista
  });
});
