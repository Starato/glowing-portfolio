import './Contact.scss'
import Logo from '../Components/Logo/Logo'
import Menu from '../Components/Menu/Menu'
import ContactForm from '../Components/ContactForm/ContactForm'

export default function home() {
  return (
    <main className='content'>
      <div>
        <Menu />
      </div>

      <div>
        <Logo />

        <div id='contact'>
          <ContactForm />
        </div>
      </div>
    </main>
  )
}
