/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("habit dashboard", () => {
  beforeEach(() => {
    cy.visit("/habits");
  });

  it("should display modal when add button is clicked", () => {
    cy.contains("button", /add/i).click();

    cy.contains(/add a new habit/i).should("be.visible");
  });

  it("should display modal if empty habit is added", () => {
    cy.get("#habit-add-btn").click();

    cy.contains("[type='button']", /save changes/i).click();

    cy.contains(/add a new habit/i).should("be.visible");
  });

  it("should display the newly added habit", () => {
    let habitText = "Learning tests";

    cy.get("#habit-add-btn").click();

    cy.get("[placeholder='Habit']").type(habitText);

    cy.contains("[type='button']", /save changes/i).click();

    cy.contains(habitText)
      .should("be.visible")
      .and("have.class", "HabitCard__habit-container");
  });

  it("should toggle icon when habit card is clicked", () => {
    let habitText = "Learning tests";

    cy.get("#habit-add-btn").click();

    cy.get("[placeholder='Habit']").type(habitText);

    cy.contains("[type='button']", /save changes/i).click();

    cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible");

    cy.contains(habitText).click();

    cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible");
  });
});
