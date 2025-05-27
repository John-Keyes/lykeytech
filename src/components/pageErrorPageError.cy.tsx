import React from 'react'
import PageError from './pageError'

describe('<PageError />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PageError />)
  })
})