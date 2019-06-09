import * as React from 'react'
import { eventOptions } from '../helpers'

interface IHeaderProps {
  handleInitCallback: () => void
  setFilterCallback: (filter: string | undefined) => void
  setCookedCallback: (timer: number | undefined) => void
}

export function Header(props: IHeaderProps) {
  const { handleInitCallback, setFilterCallback, setCookedCallback } = props
  const [dropdownActive, setDropdownActive] = React.useState(false)
  const [orderFilter, setOrderFilter] = React.useState('')
  const [cookedTimer, setCookedTimer] = React.useState('')
  const [options, setOptions] = React.useState(eventOptions)
  const filterDropdownList = React.useRef<HTMLDivElement>(null)

  function handleFilterChange(e: React.FormEvent<HTMLInputElement>) {
    const ev = e.currentTarget
    if (ev.value.length > 0) {
      setOptions(
        options.filter(opt =>
          opt[1].toLowerCase().startsWith(ev.value.toLowerCase())
        )
      )
    } else {
      setOptions(eventOptions)
    }
    setFilterCallback('')
    setOrderFilter(ev.value)
  }

  function toggleDropdown() {
    if (filterDropdownList.current === null) return
    const hl = filterDropdownList.current.querySelector('li:first-child')
    setDropdownActive(!dropdownActive)
  }

  function closeDropdown() {
    if (dropdownActive) {
      setTimeout(() => {
        setDropdownActive(false)
      }, 300)
    }
  }

  function onInputKeyPressed(e: React.KeyboardEvent<HTMLInputElement>) {
    const el = e.keyCode
    if (filterDropdownList.current === null) return
    let current = filterDropdownList.current.querySelector('li.highlight')
    if (current) {
      if (el === 40) {
        if (current.nextElementSibling) {
          current.classList.toggle('highlight')
          current.nextElementSibling.classList.add('highlight')
        }
      } else if (el === 38) {
        if (current.previousElementSibling) {
          current.classList.toggle('highlight')
          current.previousElementSibling.classList.add('highlight')
        }
      } else if (dropdownActive && el === 13) {
        const { value, name } = (current as HTMLElement).dataset
        setFilterCallback(value)
        setOrderFilter(name || '')
        toggleDropdown()
      }
    } else {
      const current = filterDropdownList.current.querySelector('li:first-child')
      current ? current.classList.add('highlight') : null
    }
  }

  function handleDropdownSelection(e: React.SyntheticEvent<EventTarget>) {
    const { value, name } = (e.target as HTMLButtonElement).dataset
    setFilterCallback(value)
    setOrderFilter(name || '')
    toggleDropdown()
  }

  function handleCookedChange(e: React.ChangeEvent<HTMLInputElement>) {
    const ev = e.currentTarget
    setCookedTimer(ev.value)
    setCookedCallback(parseInt(ev.value))
  }

  return (
    <header className="flex flex-wrap rounded-lg shadow-lg mx-4 border border-gray-800 main-header">
      <div className="title mx-4 mt-4 text-xl">
        Front-end Engineering Challenge
        <span className="block text-sm">by Derek Rush</span>
      </div>
      <div className="flex-1">
        <div className="push-button blue-push" onClick={handleInitCallback}>
          Initialize
        </div>
      </div>
      <div className="relative flex-1" onBlur={closeDropdown}>
        <div className="flex">
          <input
            className="my-4 mx-2 block w-12 cooked-input"
            type="number"
            min="0"
            placeholder="Sec"
            value={cookedTimer}
            onChange={handleCookedChange}
          />
          <input
            className="m-4 block flex-1 filter-input"
            type="text"
            placeholder="Filter"
            value={orderFilter}
            onChange={handleFilterChange}
            onClick={toggleDropdown}
            onKeyDown={onInputKeyPressed}
          />
        </div>
        <div
          className={`${dropdownActive ? 'block' : 'hidden'} dropdown-options`}
          ref={filterDropdownList}
        >
          <ul>
            {options.map(opt => (
              <li
                key={opt[0]}
                onClick={handleDropdownSelection}
                className="p-2 hover:bg-gray-800 hover:cursor-pointer t-shadow"
                data-value={opt[0]}
                data-name={opt[1]}
              >
                {opt[1]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
