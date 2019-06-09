import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { orderStream } from './__mocks__/server_data'
import { App } from './app'

describe('initializes and can recieve data', () => {
  let component
  let appInstance
  beforeEach(() => {
    component = shallow(<App />)
    appInstance = component.instance()
  })

  it('initializes with proper state', () => {
    const orderState = appInstance.state
    expect(orderState.orders.length).toBe(0)
    expect(orderState.filter).toBe('')
    expect(orderState.timer).toBe(0)
    expect(orderState.initialized).toBe(false)
  })

  it('populates orders with stream data', () => {
    appInstance.processIncoming(orderStream)
    const orderState = appInstance.state
    expect(orderState.orders.length).toBe(15)
  })

  it('creates order history for present orders', () => {
    appInstance.processIncoming(orderStream)
    const orderState = appInstance.state
    expect(orderState.orders[0].history.length).toBe(3)
  })
})

describe('editing existing orders', () => {
  let component, appInstance, orderUpdate, stateBefore
  beforeEach(() => {
    component = shallow(<App />)
    appInstance = component.instance()
    appInstance.processIncoming(orderStream)
    orderUpdate = { id: 'f7711c3b', event_name: 'DRIVER_RECEIVED' }
    stateBefore = appInstance.state
  })

  afterEach(() => {
    appInstance.state.orders = []
  })

  it('can update status of an order', () => {
    expect(stateBefore.orders[0].event_name).toBe('CANCELLED')
    appInstance.editOrder(orderUpdate)
    const orderState = appInstance.state
    expect(orderState.orders[0].event_name).toBe('DRIVER_RECEIVED')
  })

  it('updates history with edit', () => {
    expect(stateBefore.orders[0].history.length).toBe(3)
    appInstance.editOrder(orderUpdate)
    const orderState = appInstance.state
    expect(orderState.orders[0].history.length).toBe(4)
    expect(orderState.orders[0].history[3].event_name).toBe('DRIVER_RECEIVED')
  })
})

describe('updating states through callbacks', () => {
  let component, appInstance, stateBefore
  beforeEach(() => {
    component = shallow(<App />)
    appInstance = component.instance()
    stateBefore = appInstance.state
  })

  it('updates filter', () => {
    expect(stateBefore.filter).toBe('')
    appInstance.setFilter('CANCELLED')
    const orderState = appInstance.state
    expect(orderState.filter).toBe('CANCELLED')
  })

  it('updates timer', () => {
    expect(stateBefore.timer).toBe(0)
    appInstance.setCookedTimer(15)
    const orderState = appInstance.state
    expect(orderState.timer).toBe(15)
  })
})

describe('visuals', () => {
  let component
  beforeEach(() => {
    component = mount(<App />)
  })

  it('renders a header and intro text', () => {
    expect(component.find('header.main-header').length).toBe(1)
  })
})
