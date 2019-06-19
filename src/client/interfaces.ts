export interface IOrder {
  id: string
  name: string
  destination: string
  event_name: string
  history: Array<IOrder>
  sent_at_second: number | string
  msg_received_at: number
  lat: number
  lng: number
}
