import * as React from 'react'

import { Header } from './header'

it('renders with button that calls initialize callback', () => {
  const spy = jest.fn()
  const { getByText } = render(
    <Header
      handleInitCallback={spy}
      setFilterCallback={() => {}}
      eventOptions={[]}
    />
  )

  fireEvent.click(getByText('Initialize'))
  expect(spy).toHaveBeenCalledTimes(1)
})

it('renders a working filter', () => {
  const spy = jest.fn()
  const { getByTestId } = render(
    <Header
      handleInitCallback={() => {}}
      setFilterCallback={spy}
      eventOptions={[]}
    />
  )

  fireEvent.keyDown(getByTestId('filter-input'), { key: 'c' })

  setTimeout(() => {
    console.log(getByTestId('filter-input').value)
  }, 500);
  // .first()
  // .simulate('click')
  // .simulate('keypress', { key: 'c' })
  // .simulate('keypress', { key: 40 })
  // .simulate('keypress', { key: 40 })
  // .simulate('keypress', { key: 13 })
  // expect(hd).toMatchSnapshot()
  // expect(spy.called).toBe(true)
  // expect(spy.args).toBe('CANCELLED')
})
