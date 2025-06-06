import React from 'react'
import Link from 'next/link';
import PopMenu from '../../components/popMenu';

describe('<PopMenu />', () => {
  const popMenuComponent = (
      <PopMenu trigger={<iframe className="space-above border border-light-blue button-glow-blue" width="300" height="190" src="https://www.youtube.com/embed/Jrz03x38rs8" />} id="pu-test" aria-label="Popmenu Aria Label Test">                               
        <Link href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
          <span className="fa-solid fa-up-right-from-square text-hover-clear-blue"/>
        </Link>
      </PopMenu>
    );
  it("Component not displayed", () => {
    cy.mount(popMenuComponent);
    cy.get("#pu-test-body").should("not.visible");
  })
  it("Component displayed", () => {
    cy.mount(popMenuComponent);
    cy.get("#pu-test-trigger").trigger("mouseenter");
    cy.get("#pu-test-body").should("exist");
    cy.get("#pu-test").trigger("mouseleave");
  })
});