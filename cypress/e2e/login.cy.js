const validEmail = 'Cypresstest@noroff.no';
const validPassword = 'Cypress123';

const invalidEmail = 'myfake@email.com';
const invalidPassword = 'pasword';

describe('Authentication', () => {
  it('can login', () => {
    cy.visit('http://127.0.0.1:5500/');
  });
});
