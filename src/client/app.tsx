import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ioClient from 'socket.io-client'
import { Header } from './components/header'
import { OrdersList } from './components/orders_list'
import { IOrder } from './interfaces'
import './styles/default.css'

const endpoint = window.location.host.includes('css-')
  ? 'https://css-assessment.herokuapp.com/api'
  : 'http://localhost:5000/api'

interface IAppState {
  orders: Array<IOrder>
  initialized: boolean
  filter: string
  timer: number
}

export class App extends React.Component<{}, IAppState> {
  constructor(props: Object) {
    super(props)
    this.state = {
      initialized: false,
      filter: '',
      timer: 5,
      orders: [],
    }

    this.initializeDataStream = this.initializeDataStream.bind(this)
    this.processIncoming = this.processIncoming.bind(this)
    this.setFilter = this.setFilter.bind(this)
    this.setCookedTimer = this.setCookedTimer.bind(this)
    this.editOrder = this.editOrder.bind(this)
  }

  public initializeDataStream(): void {
    this.setState({ orders: [], initialized: true })
    const socket = ioClient.connect(endpoint)
    socket.emit('initialize', { event: 'INIT' })
    socket.on('FromAPI', orders => {
      this.processIncoming(orders)
    })
  }

  public setFilter(filter: string): void {
    this.setState({ filter })
  }

  public setCookedTimer(timer: number): void {
    this.setState({ timer })
  }

  public editOrder(order: IOrder): void {
    const { orders } = this.state
    this.setState(prevState => ({
      orders: prevState.orders.map(ord =>
        ord.id === order.id
          ? {
              ...ord,
              event_name: order.event_name,
              msg_received_at: Date.now(),
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

  public processIncoming(incomingOrders: Array<IOrder>) {
    for (let resOrder of incomingOrders) {
      const { orders } = this.state
      if (resOrder.event_name === 'CREATED') {
        this.setState(prevState => ({
          orders: prevState.orders.concat({
            ...resOrder,
            history: [
              {
                ...resOrder,
                msg_received_at: Date.now(),
              },
            ],
            msg_received_at: Date.now(),
          }),
        }))
      } else {
        this.setState(prevState => ({
          orders: prevState.orders.map(ord =>
            ord.id === resOrder.id
              ? {
                  ...ord,
                  event_name: resOrder.event_name,
                  history: ord.history.concat({
                    ...resOrder,
                    msg_received_at: Date.now(),
                  }),
                  msg_received_at: Date.now(),
                }
              : ord
          ),
        }))
      }
    }
  }

  public render(): JSX.Element {
    const { orders, initialized, filter, timer } = this.state
    return (
      <div className="container mx-auto my-8">
        <Header
          handleInitCallback={this.initializeDataStream}
          setFilterCallback={this.setFilter}
        />
        {initialized ? (
          <div>
            {orders.length > 0 ? (
              <OrdersList
                orders={orders}
                filter={filter}
                setCookedCallback={this.setCookedTimer}
                editOrderCallback={this.editOrder}
                timer={timer}
              />
            ) : (
              <p className="title mx-8 text-xl mt-4">Loading...</p>
            )}
          </div>
        ) : (
          <p className="mx-8 text-xl mt-4">
            Click the Open Kitchen button above to start accepting food orders.
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
