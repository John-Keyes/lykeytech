import React from 'react'
import Endorsement from './endorsement'

describe('<Endorsement />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Endorsement />)
  })
})