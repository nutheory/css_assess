import * as React from 'react'
import { Header } from './header'
// import Enzyme from 'enzyme'
import { shallow, render, mount } from 'enzyme'

it('renders', () => {
  const wrapper = shallow(
    <Header
      handleInitCallback={() => {}}
      setFilterCallback={() => {}}
      eventOptions={[]}
    />
  )

  expect(wrapper).toMatchSnapshot()
})
