import { useState } from 'react'

export default function ContactForm() {
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
		<form name="contact" action="/thanks" method="POST" data-netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<div>
				<div>
					<label htmlFor="name">Name</label>
				</div>
				<div className="cnt-fld">
					<img src="account_black.svg" alt="Name" width={32} height={32} />
					<input type="text" name="name" id="name"/>
				</div>
			</div>

			<div>
				<div>
					<label htmlFor="email">Email</label>
				</div>
				<div className="cnt-fld">
					<img src="mail_black.svg" alt="E-mail" width={32} height={32} />
					<input type="text" name="email" id="email" />
				</div>
			</div>

			<div>
				<textarea onChange={validateMessage} name="message" id="message"></textarea>
				<p>Character Limit {messageChar}/500</p>
			</div>

			<div>
				<button id='contact-email' type="submit">Send</button>
			</div>
		</form>
	)
}
