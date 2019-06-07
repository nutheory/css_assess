import * as React from 'react'
import { IOrder } from '../interfaces'
import { humanizeStatus, colorizeStatus, eventOptions } from '../helpers'

interface IOrderProps {
  eventName: string
  destination: string
  name: string
  id: string
  history: Array<IOrder>
  editOrderCallback: (order: Object) => void
}

interface IOrderState {
  showingHistory: boolean
  editStatus: boolean
}

export function OrderCard(props: IOrderProps) {
  const { eventName, destination, name, id, history, editOrderCallback } = props
  const [showingHistory, setShowingHistory] = React.useState(false)
  const [editStatus, setEditStatus] = React.useState(false)

  function modifyStatus() {
    setEditStatus(!editStatus)
  }

  function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const ev = e.currentTarget
    editOrderCallback({ id: ev.name, event_name: ev.value })
    modifyStatus()
  }

  function toggleHistory(e: React.SyntheticEvent<EventTarget>) {
    setShowingHistory(!showingHistory)
  }

  return (
    <div className={`order-card-basic ${colorizeStatus(eventName)}`}>
      {!showingHistory ? (
        <div>
          <div className="history-action text-xs">
            <span onClick={toggleHistory}>History</span>
          </div>
          <div>
            <label className="text-xs">Status</label>
            {!editStatus ? (
              <p className="status-text">
                {humanizeStatus(eventName)}
                <span
                  onClick={modifyStatus}
                  className="text-sm text-white fake-link hover:underline inline-block pl-3"
                >
                  edit
                </span>
              </p>
            ) : (
              <div>
                <select
                  name={id}
                  className="text-gray-800"
                  value={eventName}
                  onChange={handleStatusChange}
                >
                  {eventOptions.map(eo => (
                    <option key={`id_${id}_${eo[0]}`} value={eo[0]}>
                      {eo[1]}
                    </option>
                  ))}
                </select>
                <span
                  onClick={modifyStatus}
                  className="text-sm text-white fake-link hover:underline inline-block pl-3"
                >
                  cancel
                </span>
              </div>
            )}
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
            <a href="#" onClick={toggleHistory}>
              Info
            </a>
          </div>
          {history.map((hist, i) => (
            <div key={`history_${i}_${id}`}>
              <div className="mt-2">
                <p>{humanizeStatus(hist.event_name)}</p>
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
