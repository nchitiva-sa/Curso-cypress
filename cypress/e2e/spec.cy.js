import { LoginMethods } from "./Pages/Login/Login.methods"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.get('a[data-target="#logInModal"]').click()
    LoginMethods.login('username','password')
    cy.wait(5000)
  })
})