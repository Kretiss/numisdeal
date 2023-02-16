import { Link, NavLink } from 'react-router-dom'
import Logo from '../assets/logo_desktop.svg'
import NotificationIcon from '../assets/icons/notification_icon.svg'
import AccountIcon from '../assets/icons/account_icon.svg'
import CartIcon from '../assets/icons/cart_icon.svg'
import MenuHamburgerIcon from '../assets/icons/menu_hamburger_icon.svg'
import SearchInput from './reusableComponents/SearchInput'
import DotNotification from './reusableComponents/DotNotification'

const Header = () => {
  const hasNewNotification = true
  const hasNewItemsInCart = true

  return (
    <div className="bg-white">
      <div className="border-b-white-darker border-b">
        <div className="wrapper-width font-medium py-3 pr-[16px] mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span>+420 123 456 789</span>
            <span className="border-r border-grey mx-6 w-0.5 h-[18px] inline-block" />
            <span>info@numisdeal.com</span>
          </div>
          <div>
            <span>
              Země doručení:{' '}
              <span className="relative text-yellow dropdown-icon cursor-pointer mr-8">
                CZ
              </span>
            </span>
            <span>
              Měna:{' '}
              <span className="relative text-yellow dropdown-icon cursor-pointer mr-8">
                CZK
              </span>
            </span>
            <span>
              Jazyk:{' '}
              <span className="relative text-yellow dropdown-icon cursor-pointer">
                CZ
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="wrapper-width mx-auto py-6 flex items-center">
        <Link to="/" className="flex-1">
          <img src={Logo} alt="Numisdeal logo" />
        </Link>
        <SearchInput
          placeholder="Vyhledejte"
          onSubmit={(value) => console.log(value)}
          // showClearButton
        />
        <div className="flex-1 flex items-center justify-end">
          <button
            type="button"
            className="mr-3 relative"
            onClick={() => console.log('Open notifications')}
          >
            {hasNewNotification ? <DotNotification /> : null}
            <img src={NotificationIcon} alt="Notification icon" />
          </button>
          <button
            type="button"
            className="mr-3"
            onClick={() => console.log('Open account')}
          >
            <img src={AccountIcon} alt="Account icon" />
          </button>
          <button
            type="button"
            className="flex items-center font-bold"
            onClick={() => console.log('Open cart')}
          >
            <span className="relative">
              {hasNewItemsInCart ? <DotNotification /> : null}
              <img src={CartIcon} alt="Cart icon" />
            </span>
            <span className="ml-3">88 569 CZK</span>
          </button>
        </div>
      </div>
      <div className="bg-white-lighter">
        <div className="wrapper-width mx-auto flex justify-between items-center font-semibold">
          <button type="button" className="flex p-2">
            <img
              src={MenuHamburgerIcon}
              alt="Menu hamburger"
              className="mr-3"
            />
            <span>Nabídka</span>
          </button>
          <div className="py-3">
            <NavLink to="#" className="mr-8 p-2">
              Mince
            </NavLink>
            <NavLink to="#" className="mr-8 p-2">
              Bankovky
            </NavLink>
            <NavLink to="#" className="mr-8 p-2">
              USA
            </NavLink>
            <NavLink to="#" className="mr-8 p-2">
              Známky
            </NavLink>
            <NavLink to="#" className="mr-8 p-2">
              Akce
            </NavLink>
            <NavLink to="#" className="mr-8 p-2">
              Příslušenství
            </NavLink>
            <NavLink to="#" className="p-2">
              Doplňky
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
