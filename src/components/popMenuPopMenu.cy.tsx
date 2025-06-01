import React from 'react'
import Link from 'next/link';
import PopMenu from './popMenu';

describe('<PopMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    const popMenuComponent = (
      <PopMenu trigger={<iframe className="space-above border border-light-blue button-glow-blue" width="300" height="190" src="https://www.youtube.com/embed/Jrz03x38rs8" />} id={'popmenu-test'} ariaLabel={"popmenu-aria-label-test"}>                               
        <Link href="https://www.youtube.com/watch?v=Jrz03x38rs8" target="_blank" rel="noopener noreferrer">
          <span className="fa-solid fa-up-right-from-squaretext-hover-clear-blue"/>
        </Link>
      </PopMenu>
    );
    cy.mount(popMenuComponent);
  })
})