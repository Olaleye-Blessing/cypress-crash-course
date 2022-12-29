/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/accomplishments");
  });

  it("display error message for invalid accomplishment", () => {
    cy.get("[placeholder='Title']").type("My first accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I really love this");
    cy.get(".Accomplishment-btn").click();

    cy.get(".Accomplishment-error-container").should("be.visible");
  });

  it("should success message after adding an accomplishment", () => {
    cy.get("[placeholder='Title']").type("My first accomplishment");
    cy.get("[placeholder='My accomplishment...']").type("I really love this");
    cy.getByTestId("accomplishment-checkbox").click();
    cy.get(".Accomplishment-btn").click();

    cy.contains("div", /this accomplisment was successfully submitted/i);
  });
});
