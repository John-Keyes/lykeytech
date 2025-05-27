import React from 'react'
import MobileMenu from './mobileMenu'

describe('<MobileMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MobileMenu />)
  })
})