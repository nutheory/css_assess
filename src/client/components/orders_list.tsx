import * as React from 'react'
import { OrderCard } from './order_card'
import { IOrder } from '../index'

interface IOrdersProps {
  orders: Array<IOrder>
}

interface IOrdersState {
  filter: string
}

export class OrderList extends React.Component<IOrdersProps, IOrdersState> {
  constructor(props: IOrdersProps) {
    super(props)
    this.state = {
      filter: '',
    }
  }

  public render(): JSX.Element {
    const { orders } = this.props
    return (
      <div>
        <ul className="flex flex-wrap mx--4">
          {orders.map((ord, i) => (
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
}
