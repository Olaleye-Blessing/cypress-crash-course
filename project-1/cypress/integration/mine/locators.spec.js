/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Locators", () => {
  beforeEach(() => {
    cy.visit("/elements");
  });

  it("locating elements with the get command", () => {
    // use get to get one or more elements
    cy.get("button");
  });
});
