export default function ContactForm() {
	const email = process.env.contact;	
	return (
		<>
			<span>Email: {email}</span>
		</>	
	)
}
