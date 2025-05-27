import React from 'react'
import Title from './title'

describe('<Title />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Title text="thing" />)
  })
})