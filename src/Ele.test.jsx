import React from 'react'
import renderer from 'react-test-renderer'

import Ele from './Ele'

test('<Ele /> works', () => {
  const component = renderer.create(
    <Ele></Ele>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
