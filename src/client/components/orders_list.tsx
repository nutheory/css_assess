import * as React from 'react'
import { OrderCard } from './order_card'
import { IOrder } from '../interfaces'

interface IOrdersProps {
  orders: Array<IOrder>
  filter: string
  timer: number
  editOrderCallback: (order: Object) => void
  setCookedCallback: (timer: number | undefined) => void
}

export function OrdersList(props: IOrdersProps) {
  const { orders, filter, timer, editOrderCallback, setCookedCallback } = props
  const [cookedTimer, setCookedTimer] = React.useState(timer)
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

  function handleCookedChange(e: React.ChangeEvent<HTMLInputElement>) {
    const ev = e.currentTarget
    setCookedTimer(parseInt(ev.value))
    setCookedCallback(parseInt(ev.value))
  }

  return (
    <div className={`flex flex-wrap mx--4`}>
      <div className="w-full lg:w-1/4 p-4">
        <div className="rtg-bg py-4">
          <div className="flex flex-wrap mx-4">
            <div className="">
              <h2 className="title pt-1 text-lg">Prepared within...</h2>
              <p className="text-xs">(seconds)</p>
            </div>
            <input
              className="ml-8 block w-12 cooked-input"
              type="number"
              min="0"
              placeholder="Sec"
              value={cookedTimer}
              onChange={handleCookedChange}
            />
          </div>
          <ul className="prepped-list">
            {ordersWithUrgency.map(owu => (
              <li key={`cooked_${owu.id}`} className="w-full list-none p-4">
                <OrderCard
                  editOrderCallback={editOrderCallback}
                  destination={owu.destination}
                  eventName={owu.event_name}
                  name={owu.name}
                  history={owu.history}
                  id={owu.id}
                  msgReceivedAt={owu.msg_received_at}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <ul className={`flex self-start flex-wrap w-full lg:w-3/4`}>
        <li className="text-sm m-4 flex flex-wrap">
          <ul className="w-1/2 flex flex-wrap">
            <li className="w-full text-lg title">Tech</li>
            <li className="w-1/2">React</li>
            <li className="w-1/2">Typescript</li>
            <li className="w-1/2">Socket.io</li>
            <li className="w-1/2">Express</li>
            <li className="w-1/2">TailwindCSS</li>
            <li className="w-1/2">ESLint/Prettier</li>
            <li className="w-full">Jest/Enzyme/Sinon</li>
          </ul>
          <p className="w-1/2">
            As the stream feeds orders down to the client each incoming order
            gets grouped by ID with the most recent status as active and
            inactive statuses get pooled into a history attribute on the order
            object. You can edit the status in-place and see your edit reflected
            immediately in the order info and history.
          </p>
        </li>
        {ordersWithFilter.map((ord, i) => (
          <li
            key={`ev_${i}_${ord.id}`}
            className={`w-full md:w-1/2 lg:w-1/3 list-none p-4`}
          >
            <OrderCard
              editOrderCallback={editOrderCallback}
              destination={ord.destination}
              eventName={ord.event_name}
              name={ord.name}
              history={ord.history}
              id={ord.id}
              msgReceivedAt={ord.msg_received_at}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}
