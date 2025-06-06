import React from 'react'
import Tag from '../../components/tag'

describe('<Tag />', () => {
  it("Renders and correct href", () => {
    cy.mount(<Tag id="test-tag" aria-label="Test Tag" href="#about" text="Tag" />);
    cy.get("#test-tag-link").invoke("attr", "href").should("eq", "#about");
  })
});