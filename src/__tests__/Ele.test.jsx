import React from 'react'
import renderer from 'react-test-renderer'

import Ele from '../Ele'

test('<Ele /> works', () => {
  const component = renderer.create(
    <Ele></Ele>
  )
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})

test('<Ele /> is wrapped in a div', () => {
  expect(Ele().type).toBe("div")
})

test('<Ele /> has an ID of "test-element"', () => {
  expect(Ele().props.id).toBe("test-element")
})
