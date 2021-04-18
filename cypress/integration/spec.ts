it('loads examples', () => {
  cy.visit('/');
  cy.contains('angular-turkiye app is running!');
});
