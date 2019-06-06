import * as React from 'react'

interface IHeaderProps {
  handleInitCallback: () => void
  setFilterCallback: (filter: string) => void
}

export function Header(props: IHeaderProps) {
  const [dropdownActive, setDropdownActive] = React.useState(false)
  const [orderFilter, setOrderFilter] = React.useState('')
  const { handleInitCallback, setFilterCallback } = props

  function handleInputChange(e: React.FormEvent<HTMLInputElement>) {
    const ev = e.currentTarget
  }

  function toggleDropdown(e: React.SyntheticEvent<EventTarget>) {
    setDropdownActive(!dropdownActive)
  }

  function closeDropdown() {
    if (dropdownActive) {
      setTimeout(() => {
        setDropdownActive(false)
      }, 300)
    }
  }

  function onInputKeyPressed(e: React.FormEvent<HTMLInputElement>) {
    console.log(e)
  }

  return (
    <header className="flex flex-wrap rounded-lg shadow-lg mx-4 border border-gray-800">
      <div className="title mx-4 mt-4 text-xl">
        Front-end Engineering Challenge
        <span className="block text-sm">by Derek Rush</span>
      </div>
      <div className="flex-1 mx-4">
        <div className="push_button blue_push" onClick={handleInitCallback}>
          Initialize
        </div>
      </div>
      <input
        className="w-1/4 lg:w-1/5 m-4"
        name="name"
        type="text"
        placeholder="Filter"
        value={name}
        onChange={handleInputChange}
        onClick={toggleDropdown}
        onKeyDown={onInputKeyPressed}
      />
      <div
        className={`${dropdownActive ? 'block' : 'hidden'} dropdown-options`}
      />
    </header>
  )
}
