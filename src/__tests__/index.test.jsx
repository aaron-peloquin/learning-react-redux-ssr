import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import Index from '../pages/index'
import mockStore from '../testHelpers/mockStore';

describe('Home page', () => {
  it('Renders', () => {
    const indexPage = mount(<Index store={mockStore} />)
    expect(indexPage.length).toBeGreaterThanOrEqual(1)
  })

  it('Snapshots"', () => {
    const indexPage = renderer.create(<Index store={mockStore} />)
    const tree = indexPage.toJSON()
    expect(tree).toMatchSnapshot()
  })
})