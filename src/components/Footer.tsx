import Logo from '../assets/logo_desktop_white.svg'
import Facebook from '../assets/icons/facebook_icon.svg'
import Instagram from '../assets/icons/instagram_icon.svg'
import LinkedIn from '../assets/icons/linkedin_icon.svg'

const Footer = () => {
  return (
    <div className="bg-[#343434] text-white mt-12">
      <div className="wrapper-width mx-auto py-16 flex flex-col">
        <div className="flex justify-between pr-40 pb-28">
          <div className="flex flex-col w-fit">
            <img src={Logo} alt="footer logo" className="pb-6" />
            <span className="pb-3 font-medium">+420 123 456 789</span>
            <span className="pb-6 font-medium">info@numisdeal.com</span>
            <div className="flex items-center">
              <a
                href="https://facebook.com"
                className="mr-6"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Facebook} alt="Facebook" />
              </a>
              <a
                href="https://instagram.com"
                className="mr-6"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mr-16">
              <span className="pb-4">Historické mince</span>
              <span className="pb-4">Islámské mince</span>
              <span className="pb-4">Středověké mince</span>
              <span className="pb-4">Svatá říše římská</span>
              <span>Německé mince</span>
            </div>
            <div className="flex flex-col mr-16">
              <span className="pb-4">Historické mince</span>
              <span className="pb-4">Islámské mince</span>
              <span className="pb-4">Středověké mince</span>
              <span className="pb-4">Svatá říše římská</span>
              <span>Německé mince</span>
            </div>
            <div className="flex flex-col">
              <span className="pb-4">Historické mince</span>
              <span className="pb-4">Islámské mince</span>
              <span className="pb-4">Středověké mince</span>
              <span className="pb-4">Svatá říše římská</span>
              <span>Německé mince</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between text-sm">
          <span>Copyright &copy;2023 Numisdeal</span>
          <div className="opacity-60">
            <span className="mr-10">Obchodní podmínky</span>
            <span className="mr-10">Zásady platby a dopravy</span>
            <span className="mr-10">Zásady používání cookies</span>
            <span>Zpracování osobních údajů</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
