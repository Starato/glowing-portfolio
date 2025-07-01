import { useState } from 'react'
import './Contact.scss'
import Logo from '../Components/Logo/Logo'
import Menu from '../Components/Menu/Menu'

export default function home() {

  const [messageChar, setMessageChar] = useState(0);

  const validateMessage = (event) => {
    const charCount = event.target.value;
    setMessageChar(charCount.length);

    const messageLengthEle = document.getElementById('message').nextElementSibling;
    if(charCount.length > 500) {
      messageLengthEle.classList.add('character-limit');
      document.getElementById('contact-email').classList.add('disable-send');
      document.getElementById('contact-email').disabled = true;
    } else {
      messageLengthEle.classList.remove('character-limit');
      document.getElementById('contact-email').classList.remove('disable-send');
      document.getElementById('contact-email').disabled = false;
    }
  }


  return (
    <main className='content'>
      <div>
        <Menu />
      </div>

      <div>
        <Logo />

        <div id='contact'>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="subject" value="Inquiry from stevew.netlify.app" />
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <textarea onChange={validateMessage} name="message" id="message"></textarea>
              <p>Character Limit {messageChar}/500</p>
            </div>

            <div>
              <button id='contact-email' type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
