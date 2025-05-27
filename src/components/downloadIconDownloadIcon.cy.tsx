import React from 'react'
import DownloadIcon from './downloadIcon'

describe('<DownloadIcon />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DownloadIcon />)
  })
})