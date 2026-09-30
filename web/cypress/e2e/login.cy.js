describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
    .should('be.visible')
    .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
    .should('be.visible').and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

  })
  it('Não Deve logar com senha invalida', () => {
    cy.submitLoginForm('papito@webdojo.com', 'katana12')

    cy.contains('Acesso negado! Tente novamente.').should('be.visible')


  })
  it('Não Deve logar com email não cadastrado', () => {
    cy.submitLoginForm('404@webdojo.com', 'katana123')

    cy.contains('Acesso negado! Tente novamente.').should('be.visible')


  })
})