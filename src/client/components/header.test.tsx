import * as React from 'react'
import * as Sinon from 'sinon'
import { shallow, render, mount } from 'enzyme'
import { Header } from './header'

describe('visuals', () => {
  it('renders consistently', () => {
    const statefulFunction = render(
      <Header
        handleInitCallback={() => {}}
        setCookedCallback={() => {}}
        setFilterCallback={() => {}}
      />
    )
    expect(statefulFunction).toMatchSnapshot()
  })

  it('displays dropdown on filter input focus', () => {
    const statefulFunction = mount(
      <Header
        handleInitCallback={() => {}}
        setCookedCallback={() => {}}
        setFilterCallback={() => {}}
      />
    )
    expect(statefulFunction.find('div.hidden').length).toBe(1)
    statefulFunction
      .find('input.filter-input')
      .first()
      .simulate('click')
    expect(statefulFunction.find('div.hidden').length).toBe(0)
  })
})

describe('verify callbacks get called properly', () => {
  it('renders with button that calls initialize callback', () => {
    const spy = Sinon.spy()
    const statefulFunction = mount(
      <Header
        setCookedCallback={() => {}}
        setFilterCallback={() => {}}
        handleInitCallback={spy}
      />
    )
    statefulFunction
      .find('div.push-button')
      .first()
      .simulate('click')
    expect(spy.calledOnce).toBe(true)
  })

  it('renders with cooked timer input that fires callback', () => {
    const spy = Sinon.spy()
    const statefulFunction = mount(
      <Header
        handleInitCallback={() => {}}
        setFilterCallback={() => {}}
        setCookedCallback={spy}
      />
    )
    statefulFunction
      .find('input.cooked-input')
      .first()
      .simulate('change')
    expect(spy.calledOnce).toBe(true)
  })

  it('renders with filter input that fires callback', () => {
    const spy = Sinon.spy()
    const statefulFunction = mount(
      <Header
        handleInitCallback={() => {}}
        setCookedCallback={() => {}}
        setFilterCallback={spy}
      />
    )
    statefulFunction
      .find('li.t-shadow')
      .first()
      .simulate('click')
    expect(spy.calledOnce).toBe(true)
  })
})
