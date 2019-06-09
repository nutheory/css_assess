import * as React from 'react'
import { IOrder } from '../interfaces'
import {
  humanizeStatus,
  colorizeStatus,
  eventOptions,
  dateTimeFormatter,
} from '../helpers'

interface IOrderProps {
  eventName: string
  destination: string
  name: string
  id: string
  history: Array<IOrder>
  msgReceivedAt: number
  editOrderCallback: (order: Object) => void
}

interface IOrderState {
  showingHistory: boolean
  editStatus: boolean
}

export function OrderCard(props: IOrderProps) {
  const {
    eventName,
    destination,
    name,
    id,
    history,
    msgReceivedAt,
    editOrderCallback,
  } = props
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
        <div className="info-view">
          <div className="history-action text-xs">
            <span onClick={toggleHistory} className="fake-link history-link">
              History
            </span>
          </div>
          <div>
            {!editStatus ? (
              <p className="status-text font-bold">
                {humanizeStatus(eventName)}
                <span
                  onClick={modifyStatus}
                  className="text-sm text-white fake-link inline-block pl-3 edit-link"
                >
                  edit
                </span>
              </p>
            ) : (
              <div>
                <select
                  name={id}
                  className="text-gray-800 status-edit"
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
            <p className="t-shadow">{destination}</p>
          </div>
          <div className="flex">
            <div className="flex-1">
              <label className="block text-sm text-gray-500">Name</label>
              <p className="block t-shadow">{name}</p>
            </div>
            <div>
              <label className="block text-sm text-gray-500 text-right">
                ID
              </label>
              <p className="block text-right t-shadow">{id}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="history-view">
          <div className="history-action text-xs">
            <span onClick={toggleHistory} className="fake-link">
              Info
            </span>
          </div>
          {history.map((hist, i) => (
            <div key={`history_${i}_${id}`}>
              <div className="mt-2 history-item">
                <p className="font-bold">{humanizeStatus(hist.event_name)}</p>
                <label className="text-xs">
                  {dateTimeFormatter(hist.msg_received_at)}
                </label>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
