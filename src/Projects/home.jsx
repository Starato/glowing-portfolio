import './Projects.scss'
import Menu from "../Components/Menu/Menu"
import Logo from "../Components/Logo/Logo"

export default function home() {
  return (
    <main className='content'>
      <div>
        <Menu />
      </div>

      <div>
        <Logo />

        <div id="projects">
          <ul>
            <li>This Portfolio!</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
