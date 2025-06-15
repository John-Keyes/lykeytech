import React from 'react'
import Home from 'src/pages';

describe('<Home />', () => {
  it("Images and Document Renders", () => {
    cy.mount(<Home/>);
    cy.get("img").each(($img) => {
      cy.wrap($img).scrollIntoView();
      expect($img[0].clientWidth, "Image has width").to.be.greaterThan(0);
    });
  });
});