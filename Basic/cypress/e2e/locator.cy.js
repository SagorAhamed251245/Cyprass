///  <reference types="cypress"/>

describe("locator find", () => {
  it("find product", () => {
    cy.visit("https://staging-ecom.techserve4u.com/");
    cy.get(
      "#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > input"
    ).type("product");
    cy.get(
      "#header > div.main_nav_container > nav.main_nav > div > div.search_wrapper > i"
    ).click();
    cy.get(
      "#search > div > div > div.col-lg-9.col-md-12 > div.shop_by > div.shop_by_content > div:nth-child(1) > a > div > h5"
    ).contains("first product");
  });
});
