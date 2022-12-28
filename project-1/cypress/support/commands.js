/* eslint-disable no-undef */

Cypress.Commands.add("getByTestId", (testId) => {
  cy.get(`[data-cy=${testId}]`);
});
