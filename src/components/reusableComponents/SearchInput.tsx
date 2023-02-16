import React, { FC, useState } from 'react'
import SearchIcon from '../../assets/icons/search_icon_yellow.svg'
import SearchDeleteIcon from '../../assets/icons/search_delete_icon.svg'

type TInputProps = {
  placeholder: string
  classNames?: string
  initialValue?: string
  showClearButton?: boolean
  onSubmit: (value: string) => void
}

const SearchInput: FC<TInputProps> = ({
  placeholder,
  classNames = 'bg-white-lighter',
  initialValue = '',
  showClearButton = false,
  onSubmit,
}) => {
  const [inputValue, setInputValue] = useState(initialValue)
  const handleKeyDownSubmit = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter' && inputValue.length > 0) {
      event.preventDefault()
      event.stopPropagation()
      onSubmit(inputValue)
    }
  }

  const handleSubmit = () => {
    if (inputValue.length > 0) onSubmit(inputValue)
  }

  return (
    <div className={`flex px-3 max-w-[490px] w-full ${classNames}`}>
      <button type="button" onClick={() => handleSubmit()}>
        <img
          src={SearchIcon}
          alt="Search input icon"
          className="cursor-pointer"
        />
      </button>
      <input
        type="text"
        name="searchInput"
        placeholder={placeholder}
        value={inputValue}
        className={`border-0 focus:ring-0 w-full ${classNames}`}
        onKeyDown={(event) => handleKeyDownSubmit(event)}
        onChange={(event) => setInputValue(event.target.value)}
      />
      {showClearButton ? (
        <button type="button" onClick={() => setInputValue(initialValue)}>
          <img
            src={SearchDeleteIcon}
            alt="Search delete text icon"
            className="cursor-pointer"
          />
        </button>
      ) : null}
    </div>
  )
}

export default SearchInput
