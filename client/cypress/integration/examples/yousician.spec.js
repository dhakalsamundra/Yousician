describe('Yousician app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })

  it('front page can be displayed', () => {
    cy.contains('FILTER BY LEVEL')
  })

  it('Song can be Searched', () => {
    cy.get('input').type('try this at home')
    cy.contains(8)
  })

  describe('Yousician App', function(){
    beforeEach(function () {
      cy.visit('http://localhost:3000')
    })
    it('Song can be add and removed from the favourite list', () => {
      cy.get('#whiteClass').click()
      cy.get('#redClass').and('have.css', 'color', 'rgb(255, 0, 0)')

      cy.get('#redClass').and('have.css', 'color', 'rgb(255, 0, 0)').click()
      cy.get('#whiteClass').and('have.css', 'color', 'rgb(255, 255, 255)')
    })
  })

})