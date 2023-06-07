import React from 'react'
import "./footer.css"
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

export const Footer = () => {
	return (
		<footer>
			<a href='#' className='footer__logo'>AICL.</a>
			<ul className="permalinks">
				<li><a href='#'>Home</a></li>
				<li><a href='#about'>About</a></li>
				<li><a href='#experience'>Experience</a></li>
				<li><a href='#services'>Services</a></li>
				<li><a href='#testimonials'>Testimonials</a></li>
				<li><a href='#contact'>Contact</a></li>
			</ul>
			<div className="footer__socials">
				<a target='_blank' href='https://facebook.com/' rel="noreferrer"><FaFacebookF /></a>
				<a target='_blank' href='https://instagram.com/' rel="noreferrer"><FiInstagram /></a>
				<a target='_blank' href='https://twitter.com/' rel="noreferrer"><IoLogoTwitter /></a>
			</div>
			<div className="footer__copyright">
				<small>CopyRight &copy;2023 | AICL | All Rights Reserved.</small>
			</div>
		</footer>
	)
}

export default Footer