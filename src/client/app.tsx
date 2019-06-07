import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ioClient from 'socket.io-client'
import { Header } from './components/header'
import { OrderList } from './components/orders_list'
import { eventOptions } from './helpers'
import { IOrder } from './interfaces'
import './styles/default.css'

const endpoint = window.location.host.includes('css-')
  ? 'https://css-assessment.herokuapp.com/api'
  : 'http://localhost:5000/api'

interface IAppState {
  orders: Array<IOrder>
  initialized: boolean
  filter: string
}

export class App extends React.Component<{}, IAppState> {
  constructor(props: Object) {
    super(props)
    this.state = {
      initialized: false,
      filter: '',
      orders: [],
    }

    this.initializeDataStream = this.initializeDataStream.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.editOrder = this.editOrder.bind(this)
  }

  public initializeDataStream(): void {
    this.setState({ orders: [], initialized: true })
    const socket = ioClient.connect(endpoint)
    socket.emit('initialize', { event: 'INIT' })
    socket.on('FromAPI', responses => {
      for (let resOrder of responses) {
        const { orders } = this.state
        if (resOrder.event_name === 'CREATED') {
          this.setState(prevState => ({
            orders: prevState.orders.concat({
              ...resOrder,
              history: [resOrder],
            }),
          }))
        } else {
          this.setState(prevState => ({
            orders: prevState.orders.map(ord =>
              ord.id === resOrder.id
                ? {
                    ...ord,
                    event_name: resOrder.event_name,
                    history: ord.history.concat({ ...resOrder, active: true }),
                  }
                : ord
            ),
          }))
        }
      }
    })
  }

  public setFilter(filter: string): void {
    this.setState({ filter })
  }

  public editOrder(order: IOrder): void {
    const { orders } = this.state
    this.setState(prevState => ({
      orders: prevState.orders.map(ord =>
        ord.id === order.id
          ? {
              ...ord,
              event_name: order.event_name,
              history: ord.history.concat({
                ...ord,
                event_name: order.event_name,
                sent_at_second: 'NA (edited)',
              }),
            }
          : ord
      ),
    }))
  }

  public render(): JSX.Element {
    const { orders, initialized, filter } = this.state
    return (
      <div className="container mx-auto my-8">
        <Header
          handleInitCallback={this.initializeDataStream}
          setFilterCallback={this.setFilter}
          eventOptions={eventOptions}
        />
        {initialized ? (
          <div>
            {orders.length > 0 ? (
              <OrderList
                orders={orders}
                filter={filter}
                editOrderCallback={this.editOrder}
              />
            ) : (
              <p className="title mx-4 text-xl mt-4">Loading...</p>
            )}
          </div>
        ) : (
          <p className="title mx-4 text-xl mt-4">
            Initialize to start data stream...
          </p>
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root') || document.createElement('div')
)
