export function Header() {
  const li1Text = "Packs"
  const li2Text = "Custom Kits"
  
  return (
    <header id="sticky-parallax-header" className='header'>
      <img className='header-logo' src="/logo-icon.webp" alt="Logo de la empresa" />
      <nav className='header-nav'>
        <ul className='header-nav-list'>
          <li className='header-nav-list-item'>{li1Text}</li>
          <li className='header-nav-list-item'>{li2Text}</li>
        </ul>
      </nav>
    </header>
  )
}