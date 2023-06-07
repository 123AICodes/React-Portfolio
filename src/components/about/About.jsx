import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"


export const About = () => {
	return (
		<section id='about'>
			<h5>Get to  know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-img"><img src={ME} alt="about-img" /></div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className='about__icon' />
							<h5>Experience</h5>
							<small>2+ years</small>
						</article>
						<article className="about__card">
							<FiUsers className='about__icon' />
							<h5>Clients</h5>
							<small>250+ Clients Worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className='about__icon' />
							<h5>Projects</h5>
							<small>25+ Completed Projects</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore iste,
						fugiat voluptates pariatur ipsum quod. Molestias ex deleniti reiciendis nihil
						vel amet itaque provident dolorum, autem sapiente! Amet, eum?
					</p>
					<a href='#contact' className='btn btn-primary'>Let's Talk</a>
				</div>
			</div>
		</section>
	)
}
export default About
