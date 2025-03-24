export function Header() {
  const li1Text = "Packs"
  const li2Text = "Custom"
  
  return (
    <header id="sticky-parallax-header" className='header'>
      <a className="header-logo-container" href="https://www.instagram.com/cr.grow" target="_blank">
        <img className='header-logo' src="/logo-icon.webp" alt="Logo de la empresa" />
      </a>
      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <a href="#packs" className="header-nav-list-item-container">
            <li className='header-nav-list-item '>{li1Text}</li>
          </a>
          <a href="#custom" className="header-nav-list-item-container">
            <li className='header-nav-list-item'>{li2Text}</li>
          </a>
        </ul>
      </nav>
    </header>
  )
}