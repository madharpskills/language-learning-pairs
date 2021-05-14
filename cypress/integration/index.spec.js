describe('Home page', () => {
    it('has all option headers and buttons', () => {
        cy.visit('/')

        cy.contains('New Game').click()

        cy.contains('Mode')
        cy.contains('Words with pictures')
        cy.contains('Words only')
        cy.contains('Pictures only')
        cy.contains('Language')
        cy.contains('Japanese')
        cy.contains('Size')
        cy.contains('12')
        cy.contains('16')
        cy.contains('20')
        
        cy.contains('Start Game').should('not.exist')
    })

    it('option select works correctly', () => {
        cy.contains('Words with pictures').click()
        cy.contains('Start Game').should('not.exist')
        cy.contains('Words only').click()
        cy.contains('Start Game').should('not.exist')
        cy.contains('Pictures only').click()
        cy.contains('Start Game').should('not.exist')
        
        cy.contains('Japanese').should('not.exist')
        
        cy.contains('Words only').click()
        cy.contains('Japanese').click()
        cy.contains('Start Game').should('not.exist')

        cy.contains('12').click()
        cy.contains('16').click()
        cy.contains('20').click()

        cy.contains('Start Game')
    })
})