require('dotenv').config({ path: './.env' })

describe('Happy path', () => {
    it('visits', () => {
        cy.visit('/')
        expect(true).to.equal(true)
    })
})