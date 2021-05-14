describe('Game page', () => {
    it('has word mode', () => {
        cy.visit('/')
        cy.contains('New Game').click()
        cy.contains('Words only').click()
        cy.contains('Japanese').click()
        cy.contains('12').click()
        cy.contains('Start Game').click()

        cy.url().should('include', '/game')

        cy.get('[id=card-deck]>li').each((li) => {
            cy.get('div').should('have.class', 'deck card')
            cy.get('img').should('not.exist')
            cy.contains(/[a-zA-Z]+/)
        })
    })
    
    // it('has picture mode', () => {
    //     cy.visit('/')
    //     cy.contains('New Game').click()
    //     cy.contains('Pictures only').click()
    //     cy.contains('12').click()
    //     cy.contains('Start Game').click()

    //     cy.url().should('include', '/game')

    //     cy.get('[id=card-deck]>li').each((li) => {
    //         cy.get('div').should('have.class', 'deck card')
    //         cy.get('img').should('exist')
    //         cy.get('[class="deck card"]').get(/[a-zA-Z]+/).should('not.exist')
    //     })
    // })
    
    it('has words and pictures mode', () => {
        cy.visit('/')
        cy.contains('New Game').click()
        cy.contains('Words with pictures').click()
        cy.contains('Japanese').click()
        cy.contains('12').click()
        cy.contains('Start Game').click()

        cy.url().should('include', '/game')

        cy.get('[id=card-deck]>li').each((li) => {
            cy.get('div').should('have.class', 'deck card')
            cy.get('img').should('exist')
            cy.contains(/[a-zA-Z]+/)
        })
    })

    it('has size 12', () => {
        cy.visit('/')
        cy.contains('New Game').click()

        cy.contains('Words with pictures').click()
        cy.contains('Japanese').click()

        cy.contains('12').click()

        cy.contains('Start Game').click()

        cy.url().should('include', '/game')

        cy.get('[id=card-deck]>li').should('have.length', 12).each((li) => {
            cy.get('div').should('have.class', 'deck card')
        })
    })

    it('has size 16', () => {
        cy.visit('/')
        cy.contains('New Game').click()

        cy.contains('Words with pictures').click()
        cy.contains('Japanese').click()

        cy.contains('16').click()

        cy.contains('Start Game').click()

        cy.url().should('include', '/game')

        cy.get('[id=card-deck]>li').should('have.length', 16).each((li) => {
            cy.get('div').should('have.class', 'deck card')
        })
    })

    it('has size 20', () => {
        cy.visit('/')
        cy.contains('New Game').click()

        cy.contains('Words with pictures').click()
        cy.contains('Japanese').click()

        cy.contains('20').click()

        cy.contains('Start Game').click()

        cy.url().should('include', '/game')

        cy.get('[id=card-deck]>li').should('have.length', 20).each((li) => {
            cy.get('div').should('have.class', 'deck card')
        })
    })

    it('has correct card behavior', () => {
        
    })

    it('has correct end game behavior', () => {

    })
})