import './Menu.scss'

export default function Menu() {
  const pathname = location.pathname;

  return (
    <div className='menu'>
      <div>
        <a className={pathname === '/' ? 'focused' : ''} href="/">Home</a>
      </div>
      <div>
        <a className={pathname === '/projects' ? 'focused' : ''} href="/projects">Projects</a>
      </div>
      <div>
        <a className={pathname === '/info' ? 'focused' : ''} href="/info">Info</a>
      </div>
      <div>
        <a className={pathname === '/contact' ? 'focused' : ''} href="/contact">Contact</a>
      </div>
    </div>
  )
}
