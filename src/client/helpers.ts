export const humanizeStatus = (status: string): string => {
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

export const colorizeStatus = (status: string): string => {
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

export const eventOptions = [
  ['CREATED', 'Cooking Now'],
  ['COOKED', 'Prepared'],
  ['DRIVER_RECEIVED', 'Out for Delivery'],
  ['DELIVERED', 'Delivered'],
  ['CANCELLED', 'Cancelled'],
]

export const dateTimeFormatter = (time: number): string =>
  new Date(time).toLocaleString().split(' GMT')[0]
