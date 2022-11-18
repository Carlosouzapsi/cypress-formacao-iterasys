// Arquivo de interface para documentar coisas do cypress
/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Loga na aplicação Conexão via API
     * @param email Email do usuário que será logado
     * @param password Senha do email que será logado na aplicação
     * @example cy.login('teste@teste.com', '123456')
     */
    login(email: string, password: string): Chainable<any>;
    /* ao usar esse comando a doc explicando o que ele faz aparece.. */

    /**
     * Retorna o elemento selecionado a partir do data-testid
     * @param seletor valor do atributo data-test
     * @example cy.getElement('btn-login')
     * @return retorna o elemento seleciona
     */
    getElement(seletor: string): Chainable<any>;
  }
}
