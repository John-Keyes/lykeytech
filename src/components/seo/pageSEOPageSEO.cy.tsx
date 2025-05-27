import React from 'react'
import PageSEO from './pageSEO'

describe('<PageSEO />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<PageSEO />)
  })
})