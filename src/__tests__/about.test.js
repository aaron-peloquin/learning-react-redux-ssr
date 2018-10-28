import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import About from './../pages/about'
import mockStore from './../testHelpers/mockStore';

describe('With Enzyme', () => {
  it('About page has <h1> of "About"', () => {
    const aboutPage = mount(<About store={mockStore} />)
    expect(aboutPage.find('h1').text()).toEqual('About')
  })
})

describe('With Snapshot Testing', () => {
  it('App shows "Hello world!"', () => {
    const aboutPage = renderer.create(<About store={mockStore} />)
    const tree = aboutPage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})