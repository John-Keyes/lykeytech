import React from 'react'
import PopMenu from './popMenu'

describe('<PopMenu />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PopMenu />)
  })
})