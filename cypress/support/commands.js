Cypress.Commands.add("apiLogin", (email, password) => {
  cy.request({
    method: "POST",
    url: `/api/auth`,
    body: {
      email: email,
      password: password,
    },
  }).then(({ status }) => {
    expect(status).to.eq(200);
    // Comando depreciado, contudo ainda é mais estável que o cypress.session.. ver docs
    Cypress.Cookies.defaults({
      preserve: "jwt",
    });
    // no erase browser cookie
  });
});
