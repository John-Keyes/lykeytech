import React from 'react'
import SubTitle from './subTitle'

describe('<SubTitle />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SubTitle />)
  })
})