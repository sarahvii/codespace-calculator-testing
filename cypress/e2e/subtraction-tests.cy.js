describe('Subtraction Tests', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/'); 
      cy.get('.clear').click();
    });
  
    it('should correctly subtract two numbers', () => {
      cy.get('.number').contains('9').click();
      cy.get('.operator').contains('-').click();
      cy.get('.number').contains('4').click();
      cy.get('.calculate').click();
      cy.get('#display').should('have.value', '5');
    });
  });
  