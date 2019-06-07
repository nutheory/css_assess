import * as React from 'react'
import { OrderCard } from './order_card'
import { IOrder } from '../index'

interface IOrdersProps {
  orders: Array<IOrder>
  filter: string
}

export function OrderList(props: IOrdersProps) {
  const { orders, filter } = props
  let orders_with_filter
  if (filter !== '') {
    orders_with_filter = orders.filter(ord => ord.event_name === filter)
  } else {
    orders_with_filter = orders
  }
  return (
    <div>
      <ul className="flex flex-wrap mx--4">
        {orders_with_filter.map((ord, i) => (
          <li
            key={`ev_${i}_${ord.id}`}
            className="w-full md:w-1/2 lg:w-1/4 list-none p-4"
          >
            <OrderCard
              destination={ord.destination}
              eventName={ord.event_name}
              name={ord.name}
              history={ord.history}
              id={ord.id}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
