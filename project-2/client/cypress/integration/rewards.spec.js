/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Rewards dashboard", () => {
  beforeEach(() => {
    cy.visit("/rewards");
  });

  it("should display a list of rewards", () => {
    cy.get("ul").contains(
      /500 points for drinking 8 cups of water for 7 straight days/i
    );
  });

  // mock http request
  it("diplay a list of rewards with mock", () => {
    cy.intercept("GET", "http://localhost:4000/rewards", {
      fixture: "rewards.json",
    });

    cy.get("ul").contains(/5 points for staring into a wall for 30 seconds/i);
  });
});
