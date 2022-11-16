describe("API - Posts", () => {
  before(() => {
    // Pegando do arquivo cypress.env.json:
    cy.apiLogin(Cypress.env("email"), Cypress.env("password"));
  });
  it("valida todos os posts", () => {
    cy.request({
      method: "GET",
      url: "/api/posts",
    }).then(({ status }) => {
      // usando destruct no parametro de response..
      expect(status).to.eq(200);
    });
  });
  after(() => {
    Cypress.Cookies.defaults({
      preserve: [],
    });
  });
});
