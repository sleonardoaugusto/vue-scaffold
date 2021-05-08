describe('<Login />', () => {
  const baseUrl = Cypress.env('host')
  const apiServer = Cypress.env('api_server')

  it('Should show snackbar', () => {
    cy.visit(`${baseUrl}/login`)
    cy.loginInvalid()

    cy.get('.v-snack__wrapper').should('be.visible')
    cy.get('.v-snack__wrapper').should('contain', 'Credenciais inválidas.')
  })

  it('Should redirect to /login if is not logged in', () => {
    cy.visit(`${baseUrl}/`)

    cy.location('pathname').should('include', '/login')
  })

  it('Should logout if status code is 401', () => {
    cy.intercept('GET', `${apiServer}/attendances/`, {
      statusCode: 401
    }).as('attendances')

    cy.visit(`${baseUrl}/login`)
    cy.login()

    cy.location('pathname').should('include', '/login')
  })
})
