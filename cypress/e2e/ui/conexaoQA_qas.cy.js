describe("valida a página de QAs", () => {
  context.skip("Espera sem intercept", () => {
    beforeEach(() => {
      cy.intercept({ method: "GET", url: "/api/profile" }, (req) => {
        req.on("response", (res) => {
          res.setDelay(8000);
        });
      });
      cy.visit("/perfis");
      // usando um intercept de requisição
    });
    it("Valida se a página carregou com espera de elemento", () => {
      cy.contains("h1", "Perfis").should("be.visible");
    });
    it("Valida se a página carregou com espera de tempo", () => {
      cy.wait(10000);
      cy.contains("p", "Navegue e conecte-se com outros QAs").should(
        "be.visible"
      );
    });
  });
  context("Espera com intercept", () => {
    beforeEach(() => {
      // spy - "espionar"
      // enquanto a api não responde, a tela n carrega.
      cy.intercept({
        // só isso já "espiona" uma api
        method: "GET",
        url: "/api/profile",
      }).as("apiPerfil");

      cy.visit("/perfis").wait("@apiPerfil");
      cy.visit("/perfis");
    });
    it("Valida se a página carregou com espera de spy", () => {
      cy.contains("p", "Navegue e conecte-se com outros QAs").should(
        "be.visible"
      );
    });
    it("Valida se a página carregou com espera de spy", () => {
      // spy - "espionar"
      // enquanto a api não responde, a tela n carrega.
      // passando options
      cy.contains("p", "Navegue e conecte-se com outros QAs", {
        timeout: 10000,
      }).should("be.visible");
    });
    it.only("clica no botão ver Perfil", () => {
      cy.getElement("profile-viewMore").eq(5).click();
      cy.wait(5000);
    });
  });
});
