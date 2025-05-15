describe("forms tests", () => {
    beforeEach(() => cy.visit("/forms"))
    it('Test subscribe form', () => {
        cy.contains(/Testing Forms/i)
        cy.getDataTest("subscribe-form").find('input').as("subscribe-input")
        cy.get('@subscribe-input').type("charlie.stone649@gmail.com")
        cy.contains(/Successfully subbed: charlie.stone649@gmail.com!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/Successfully subbed: charlie.stone649@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: charlie.stone649@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('charlie.stone.dev@proton.me')
        cy.contains(/invalid email: charlie.stone.dev@proton.me!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/invalid email: charlie.stone.dev@proton.me!/i).should("exist")
        cy.wait(3000)

        cy.contains(/invalid email: charlie.stone.dev@proton.me!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/fail!/i).should("exist")
    })

})