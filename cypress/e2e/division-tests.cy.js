describe('Division Tests', () => {
    beforeEach(() => {
      cy.visit('http://127.0.0.1:5500/'); 
      cy.get('.clear').click();
    });
  
    it('should correctly divide two numbers', () => {
      cy.get('.number').contains('8').click();
      cy.get('.operator').contains('/').click();
      cy.get('.number').contains('2').click();
      cy.get('.calculate').click();
      cy.get('#display').should('have.value', '4');
    });
  });
  