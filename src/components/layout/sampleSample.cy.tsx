import React from 'react'
import Sample from './sample'

describe('<Sample />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Sample />)
  })
})