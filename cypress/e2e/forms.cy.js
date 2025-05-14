describe("forms tests", () => {
    beforeEach(() => cy.visit("/forms"))
    it('Test subscribe form', () => {
        cy.contains(/Testing Forms/i)
        cy.getDataTest("subscribe-form").find('input').type("charlie.stone649@gmail.com")
        cy.contains(/Successfully subbed: charlie.stone649@gmail.com!/i).should("not.exist")
        cy.getDataTest("subscribe-button").click()
        cy.contains(/Successfully subbed: charlie.stone649@gmail.com!/i).should('exist')
    })

})