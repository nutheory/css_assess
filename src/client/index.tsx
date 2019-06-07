import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ioClient from 'socket.io-client'
import { Header } from './components/header'
import { OrderList } from './components/orders_list'
import './styles/default.css'

const endpoint = window.location.host.includes('css-')
  ? 'https://css-assessment.herokuapp.com/api'
  : 'http://localhost:5000/api'

const eventOptions = [
  ['CREATED', 'Cooking Now'],
  ['COOKED', 'Prepared'],
  ['DRIVER_RECEIVED', 'Out for Delivery'],
  ['DELIVERED', 'Delivered'],
  ['CANCELLED', 'Cancelled'],
]

export interface IOrder {
  id: string
  name: string
  destination: string
  event_name: string
  history: Array<IOrder>
  sent_at_second: number
}

interface IAppState {
  orders: Array<IOrder>
  initialized: boolean
  filter: string
}

class App extends React.Component<{}, IAppState> {
  constructor(props: Object) {
    super(props)
    this.state = {
      initialized: false,
      filter: '',
      orders: [],
    }

    this.initializeDataStream = this.initializeDataStream.bind(this)
    this.setFilter = this.setFilter.bind(this)
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
              <OrderList orders={orders} filter={filter} />
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

ReactDOM.render(<App />, document.getElementById('root'))
