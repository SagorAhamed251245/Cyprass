///  <reference types="cypress"/>
describe("myTest", () => {
  it("Verify google title positive", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("eq", "Google");
  });
  it("Verify google title negative", () => {
    cy.visit("https://www.google.com/");
    cy.title().should("not.eq", "Godogle");
  });
});
