import './Logo.scss'
import Menu from '../Menu/Menu'


export default function Logo() {

  const hamburgerMenu = (event) => {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    if(event.target.alt === "menu") hamburgerMenu.classList.remove('mobile');
    if(event.target.alt === "close") hamburgerMenu.classList.add('mobile');
  }

  return (
    <div className="logo">
        <div>
          <img className='mobile' onClick={hamburgerMenu} src="/menu_black.png" alt="menu"  width={32} height={32}/>
          <span>Steven W</span>
        </div>
				<span>Developer</span>

        <div id="hamburger-menu" className='mobile'>
          <div>
            <img src="/close_black.png" onClick={hamburgerMenu} alt="close" width={32} height={32}/>
          </div>
          <div>
            <Menu />
          </div>
        </div>
		</div>
  )
}
