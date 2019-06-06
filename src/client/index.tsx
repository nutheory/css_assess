import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as ioClient from 'socket.io-client'
import { Header } from './components/header'
import { OrderList } from './components/orders_list'
const endpoint = 'http://localhost:5000/api'
import './styles/default.css'

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
}

class App extends React.Component<{}, IAppState> {
  constructor(props: Object) {
    super(props)
    this.state = {
      orders: [],
    }

    this.initializeDataStream = this.initializeDataStream.bind(this)
    this.setFilter = this.setFilter.bind(this)
  }

  public initializeDataStream(): void {
    this.setState({ orders: [] })
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
    console.log('FILTER', filter)
  }

  public render(): JSX.Element {
    const { orders } = this.state
    return (
      <div className="container mx-auto my-8">
        <Header
          handleInitCallback={this.initializeDataStream}
          setFilterCallback={this.setFilter}
        />
        {orders.length > 0 ? (
          <OrderList orders={orders} />
        ) : (
          <p className="title mx-4 text-xl mt-4">Loading...</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
