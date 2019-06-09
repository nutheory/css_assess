import * as React from 'react'
import { OrderCard } from './order_card'
import { IOrder } from '../interfaces'

interface IOrdersProps {
  orders: Array<IOrder>
  filter: string
  timer: number
  editOrderCallback: (order: Object) => void
}

export function OrderList(props: IOrdersProps) {
  const { orders, filter, timer, editOrderCallback } = props
  const cookedOrders = orders.filter(ord => ord.event_name === 'COOKED')
  let ordersWithUrgency: Array<IOrder> = []
  let ordersWithFilter
  if (filter !== '') {
    ordersWithFilter = orders.filter(ord => ord.event_name === filter)
  } else {
    ordersWithFilter = orders
  }

  for (let cooked of cookedOrders) {
    if (cooked && timer > 0) {
      if (Date.now() - cooked.msg_received_at < timer * 1000) {
        ordersWithUrgency.push(cooked)
      }
    }
  }
  return (
    <div className={`flex flex-wrap mx--4`}>
      {timer > 0 ? (
        <div className="w-1/4 p-4">
          <div className="rtg-bg py-4">
            <h2 className="title mx-4 text-xl">Ready to go</h2>
            <ul>
              {ordersWithUrgency.map(owu => (
                <li key={`cooked_${owu.id}`} className="w-full list-none p-4">
                  <OrderCard
                    editOrderCallback={editOrderCallback}
                    destination={owu.destination}
                    eventName={owu.event_name}
                    name={owu.name}
                    history={owu.history}
                    id={owu.id}
                    msg_received_at={owu.msg_received_at}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      <ul className={`flex flex-wrap ${timer > 0 ? 'w-3/4' : 'w-full'}`}>
        {ordersWithFilter.map((ord, i) => (
          <li
            key={`ev_${i}_${ord.id}`}
            className={`w-full ${
              timer > 0 ? 'md:w-1/2 lg:w-1/3' : 'md:w-1/3 lg:w-1/4'
            } list-none p-4`}
          >
            <OrderCard
              editOrderCallback={editOrderCallback}
              destination={ord.destination}
              eventName={ord.event_name}
              name={ord.name}
              history={ord.history}
              id={ord.id}
              msg_received_at={ord.msg_received_at}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
