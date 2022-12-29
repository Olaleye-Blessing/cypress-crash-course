/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating elements with the get command", () => {
    // use get to get one or more elements
    cy.get("button");

    cy.getByTestId("btn-id-1");
  });

  it("locating elements with contains command", () => {
    cy.contains("Unique Text");

    cy.contains("Not Unique Text");

    cy.get("[type='submit']").contains("Not Unique Text");
  });
});
