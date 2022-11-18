import LoginPage from "../../pageObjects/LoginPage";

describe("cabecalho home page", () => {
  const validarMenu = (seletor, link, nome) => {
    cy.getElement(seletor)
      .should("have.attr", "href", link)
      .and("not.have.attr", "target", "_blank")
      .and("have.text", nome);
  };
  context("não logado", () => {
    beforeEach(() => {
      cy.visit("/");
    });
    it("valida o cabecalho da area não logada", () => {
      // DRY - DONT REPEAT YOURSELF:
      // O terceiro parâmetro é o valor do href!
      // Página Inicial
      cy.getElement("navbar-conexaoQA")
        .should("have.attr", "href", "/")
        .and("not.have.attr", "target", "_blank");
      // QAs
      cy.getElement("navbar-QAs")
        .should("have.attr", "href", "/perfis")
        .and("not.have.attr", "target", "_blank");

      // Cadastrar
      //   cy.get("navbar-register")
      //     .should("have.attr", "href", "/cadastrar")
      //     .and("not.have.attr", "target", "_blank");

      // Sobre
      cy.getElement("navbar-about")
        .should("have.attr", "href", "/sobre")
        .and("not.have.attr", "target", "_blank");
      /* 
      O cypress indica que um elemento tem um href e se é o que foi desenvolvido pelo dev. 
      Caso o href n funcione, o problema é o browser que está com problema
      */
      // Login
      cy.getElement("navbar-login")
        .should("have.attr", "href", "/login")
        .and("not.have.attr", "target", "_blank");
    });
    it("valida o cabecalho da area não logada com JSON", () => {
      const menus = [
        { seletor: "navbar-conexaoQA", link: "/" },
        { seletor: "navbar-QAs", link: "/perfis" },
        { seletor: "navbar-about", link: "/sobre" },
        { seletor: "navbar-login", link: "/login" },
      ];

      menus.forEach((menu) => {
        cy.getElement(menu.seletor)
          .should("have.attr", "href", menu.link)
          .and("not.have.attr", "target", "_blank");
      });
    });
    // forma mais "funcional de criar um it"
    [
      { seletor: "navbar-conexaoQA", link: "/", nome: " ConexãoQA" },
      { seletor: "navbar-QAs", link: "/perfis", nome: "QAs" },
      { seletor: "navbar-about", link: "/sobre", nome: "Sobre" },
      { seletor: "navbar-login", link: "/login", nome: "Login" },
    ].forEach(({ seletor, link, nome }) => {
      it.only(`valida o menu ${nome}`, () => {
        validarMenu(seletor, link, nome);
      });
    });
  });
  context.only("logado - Usando POM", () => {
    beforeEach(() => {
      const login = new LoginPage();
      login.visitar();
      login.preencherEmail(Cypress.env("email"));
      login.preencherSenha(Cypress.env("password"));
      login.submeter();
    });
    let dashboard = [
      { seletor: "navbar-conexaoQA", link: "/", nome: " ConexãoQA" },
      { seletor: "navbar-QAs", link: "/perfis", nome: "QAs" },
      { seletor: "navbar-posts", link: "/posts", nome: "Posts" },
      { seletor: "navbar-dashboard", link: "/dashboard", nome: " Dashboard" },
      { seletor: "navbar-about", link: "/sobre", nome: "Sobre" },
      { seletor: "navbar-logout", link: "/", nome: " Sair" },
    ];
    dashboard.forEach(({ seletor, link, nome }) => {
      it(`valida o menu ${nome} da área logada`, () => {
        validarMenu(seletor, link, nome);
      });
    });
    // it("valida o menu logado", () => {});
  });
});
