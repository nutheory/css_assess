import * as React from 'react'
import { IOrder } from '../index'

interface IOrderProps {
  eventName: string
  destination: string
  name: string
  id: string
  history: Array<IOrder>
}

interface IOrderState {
  showingHistory: boolean
}

export class OrderCard extends React.Component<IOrderProps, IOrderState> {
  constructor(props: IOrderProps) {
    super(props)
    this.state = {
      showingHistory: false,
    }

    this.humanizeStatus = this.humanizeStatus.bind(this)
    this.colorizeStatus = this.colorizeStatus.bind(this)
    this.toggleHistory = this.toggleHistory.bind(this)
  }

  public humanizeStatus(status: string): string {
    if (status === 'CREATED') {
      return 'Cooking Now'
    } else if (status === 'COOKED') {
      return 'Prepared'
    } else if (status === 'DRIVER_RECEIVED') {
      return 'Out for Delivery'
    } else if (status === 'DELIVERED') {
      return 'Delivered'
    } else {
      return 'Cancelled'
    }
  }

  public colorizeStatus(status: string): string {
    if (status === 'CREATED') {
      return 'yellow'
    } else if (status === 'COOKED') {
      return 'orange'
    } else if (status === 'DRIVER_RECEIVED') {
      return 'blue'
    } else if (status === 'DELIVERED') {
      return 'green'
    } else {
      return 'red'
    }
  }

  toggleHistory(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault()
    const { showingHistory } = this.state
    this.setState({ showingHistory: !showingHistory })
  }

  public render(): JSX.Element {
    const { showingHistory } = this.state
    const { eventName, destination, name, id, history } = this.props
    return (
      <div className={`order-card-basic ${this.colorizeStatus(eventName)}`}>
        {!showingHistory ? (
          <div>
            <div className="history-action text-xs">
              <a href="#" onClick={this.toggleHistory}>
                History
              </a>
            </div>
            <div>
              <label className="text-xs">Status</label>
              <p className="status-text">{this.humanizeStatus(eventName)}</p>
            </div>
            <div>
              <label className="text-xs">Destination</label>
              <p>{destination}</p>
            </div>
            <div className="flex">
              <div className="flex-1">
                <label className="block text-xs">Name</label>
                <p className="block">{name}</p>
              </div>
              <div>
                <label className="block text-xs text-right">ID</label>
                <p className="block text-right">{id}</p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="history-action text-xs">
              <a href="#" onClick={this.toggleHistory}>
                Info
              </a>
            </div>
            {history.map((hist, i) => (
              <div key={`history_${i}_${id}`}>
                <div className="mt-2">
                  <p>{this.humanizeStatus(hist.event_name)}</p>
                  <label className="text-xs">
                    Sent {hist.sent_at_second} seconds ago
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }
}
