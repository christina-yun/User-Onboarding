describe('Form App', () => {
//each test starts with fresh data
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
//helpers to collect dom elements
    const nameInput = () => cy.get('input[name=name]')
    const emailInput = () => cy.get('input[name=email]')
    const passwordInput = () => cy.get('input[name=password]')
    const tosInput = () => cy.get('input[name=tos]')
    const submitBtn = () => cy.get('button[disabled]')

    it('Sanity check for tests being wired', () => {
        expect(1 + 5).not.to.equal(5)
    })

    it ('All elements display', () => {
        nameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        tosInput().should('exist')
        submitBtn().should('exist')
    })
    
    describe('Filling out inputs and submit', () => {
        it ('can navigate to the site', () => {
            cy.url().should('include', 'localhost')
        })
        
        it ('submit button is disabled', () => {
            submitBtn().should('be.disabled')
        })
    })
})

