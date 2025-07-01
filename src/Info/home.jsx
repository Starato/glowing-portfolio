import './Info.scss';
import Menu from '../Components/Menu/Menu';
import Logo from '../Components/Logo/Logo';

export default function home() {
  return (
    <main className='content'>
      <div>
        <Menu />
      </div>

      <div>
        <Logo />

        <div id="info">
            <span>PHP</span>
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Tailwind</span>
            <span>Docker</span>
            <span>MySQL</span>
            <span>Gitlab</span>
            <span>Figma</span>
        </div>
      </div>
    </main>
  )
}
