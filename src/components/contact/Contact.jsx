import React, { useRef } from 'react'
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"
import { sendForm } from '@emailjs/browser'

export const Contact = () => {

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs.sendForm('service_g9fxtfx', 'template_ezbch56', form.current, 'vPGA5qc0Hjuf2cfQ7')
		e.target.reset();
	}

	return (
		<section id='contact'>
			<h5>Get in touch</h5>
			<h2>Contact</h2>
			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>iam.aduisaac@gmail.com</h5>
						<a href="mailto:iam.aduisaac@gmail.com">Send a message</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>Adu Isaac</h5>
						<a href="https://m.me/adu_isaac/" target='_blank' rel='noreferrer'>Send a message</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className='contact__option-icon' />
						<h4>Whatsapp</h4>
						<h5>+233 (553) 977 (242)</h5>
						<a href="https://wa.link/fqjg73" target='_blank' rel='noreferrer'>Send a message</a>
					</article>
				</div>
				<form ref={form} onSubmit={sendEmail}>
					<input type="text" placeholder="full name" name='name' required />
					<input type="email" placeholder="your email" name='email' required />
					<textarea name="message" placeholder='your message' rows="7" reqired></textarea>
					<button className='btn btn-primary' type='submit'>Send message</button>
				</form>
			</div>
		</section>
	)
}

export default Contact