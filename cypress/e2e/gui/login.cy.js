/// <reference types="Cypress" />

describe("LOGIN", () => {
  it("successfully", () => {
    cy.login();

    cy.get(".qa-user-avatar").should("exist");
  });
});
