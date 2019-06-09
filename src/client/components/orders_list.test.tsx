import * as React from 'react'
import * as Sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { orderList } from '../__mocks__/processed_data'
import { OrdersList } from './orders_list'
import { IOrder } from '../interfaces'

describe('order list visuals', () => {
  it('shows a special list on the left when theres a timer', () => {
    const statefulFunction = mount(
      <OrdersList
        setCookedCallback={() => {}}
        editOrderCallback={() => {}}
        orders={orderList as []}
        filter={''}
        timer={5}
      />
    )
    expect(statefulFunction.find('ul.prepped-list').length).toBe(1)
  })

  it('shows a full-sized list when theres no timer', () => {
    const statefulFunction = mount(
      <OrdersList
        setCookedCallback={() => {}}
        editOrderCallback={() => {}}
        orders={orderList as []}
        filter={''}
        timer={0}
      />
    )
    expect(statefulFunction.find('ul.w-full').length).toBe(1)
  })
})

describe('filter functionality', () => {
  it('does not filter when passed a empty string', () => {
    const statefulFunctionNoFilter = mount(
      <OrdersList
        setCookedCallback={() => {}}
        editOrderCallback={() => {}}
        orders={orderList as []}
        filter={''}
        timer={0}
      />
    )
    expect(statefulFunctionNoFilter.find('div.red').length).toBe(3)
    expect(statefulFunctionNoFilter.find('div.green').length).toBe(10)
    expect(statefulFunctionNoFilter.find('div.orange').length).toBe(1)
    expect(statefulFunctionNoFilter.find('div.yellow').length).toBe(0)
  })

  it('filters results when passed a filter in props', () => {
    const statefulFunction = mount(
      <OrdersList
        setCookedCallback={() => {}}
        editOrderCallback={() => {}}
        orders={orderList as []}
        filter={'DELIVERED'}
        timer={0}
      />
    )
    expect(statefulFunction.find('div.red').length).toBe(0)
    expect(statefulFunction.find('div.green').length).toBe(10)
  })
})

describe('timer callback', () => {
  it('renders with cooked timer input that fires callback', () => {
    const spy = Sinon.spy()
    const statefulFunction = mount(
      <OrdersList
        setCookedCallback={spy}
        editOrderCallback={() => {}}
        orders={orderList as []}
        filter={'DELIVERED'}
        timer={0}
      />
    )
    statefulFunction
      .find('input.cooked-input')
      .first()
      .simulate('change')
    expect(spy.calledOnce).toBe(true)
  })
})
