import { FC } from 'react'

type TButton = {
  text: string
  type?: 'submit' | 'button'
  classNames?: string
  onClick?: () => void
}

const Button: FC<TButton> = ({
  text,
  type = 'button',
  classNames = '',
  onClick = undefined,
}) => {
  return type === 'submit' ? (
    // Here must be two buttons, because type of button must be static
    <button
      type="submit"
      className={`py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${classNames}`}
      onClick={() => (onClick ? onClick() : null)}
    >
      {text}
    </button>
  ) : (
    <button
      type="button"
      className={`py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ${classNames}`}
      onClick={() => (onClick ? onClick() : null)}
    >
      {text}
    </button>
  )
}

export default Button
