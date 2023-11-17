import { headerLogo } from '../assets/images/index'
import { navLinks } from '../constants/index'
import { hamburger } from '../assets/icons/index'

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full
    absolute">
      <nav className="max-container flex justify-between">
        <a
          href="/"
          className='inline'>
          <img
            src={headerLogo}
            alt='Logo'
            width={130}
            height={30}
          />
        </a>
        <div>
          <ul className="flex-1 flex gap-16 items-center max-lg:hidden">
            {navLinks.map(item => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-monserat leading-normal text-slate-gray text-lg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='hamburger'
            width={30}
            height={30}
          />
        </div>
      </nav>
    </header>
  )
}

export default Nav
