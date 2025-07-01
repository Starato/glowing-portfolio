import './App.scss'
import Logo from './Components/Logo/Logo.jsx'
import Menu from './Components/Menu/Menu.jsx'

function App() {

  return (
    <main className='content'>
      <div>
        <Menu />
      </div>

      <div>
        <Logo />

        <div>
          <p>
            I'm a full stack developer I enjoy coding and problem-solving, always looking for new ways to 
            improve my skills and learn new technologies. With experience in both client-side and server-side 
            technologies, I create responsive user interfaces, robust APIs, and maintainable codebases.
          </p>
        </div>
      </div>
    </main>
  )
}

export default App
