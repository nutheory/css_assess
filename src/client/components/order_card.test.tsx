import * as React from 'react'
import * as Sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { orderCard } from '../__mocks__/instance_data'
import { OrderCard } from './order_card'

describe('interactions', () => {
  let statefulFunction
  beforeEach(() => {
    statefulFunction = mount(
      <OrderCard
        id={orderCard.id}
        destination={orderCard.destination}
        name={orderCard.name}
        msgReceivedAt={orderCard.msg_received_at}
        history={orderCard.history as []}
        eventName={orderCard.event_name}
        editOrderCallback={() => {}}
      />
    )
  })

  it('shows history when link is clicked', () => {
    expect(statefulFunction.find('div.history-view').length).toBe(0)
    statefulFunction
      .find('span.history-link')
      .first()
      .simulate('click')
    expect(statefulFunction.find('div.history-view').length).toBe(1)
  })

  it('shows status dropdown when link is clicked', () => {
    expect(statefulFunction.find('select.status-edit').length).toBe(0)
    statefulFunction
      .find('span.edit-link')
      .first()
      .simulate('click')
    expect(statefulFunction.find('select.status-edit').length).toBe(1)
  })

  it('contains full history', () => {
    statefulFunction
      .find('span.history-link')
      .first()
      .simulate('click')
    expect(statefulFunction.find('div.history-item').length).toBe(4)
  })
})

describe('interactions', () => {
  it('', () => {
    const spy = Sinon.spy()
    const statefulFunction = mount(
      <OrderCard
        id={orderCard.id}
        destination={orderCard.destination}
        name={orderCard.name}
        msgReceivedAt={orderCard.msg_received_at}
        history={[]}
        eventName={orderCard.event_name}
        editOrderCallback={spy}
      />
    )
    statefulFunction
      .find('span.edit-link')
      .first()
      .simulate('click')
    statefulFunction
      .find('select.status-edit')
      .first()
      .simulate('change')
    expect(spy.calledOnce).toBe(true)
  })
})
