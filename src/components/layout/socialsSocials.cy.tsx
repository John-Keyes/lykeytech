import React from 'react'
import Socials from './socials'

describe('<Socials />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Socials />)
  })
})