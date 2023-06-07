import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"
import IMG5 from "../../assets/portfolio5.png"
import IMG6 from "../../assets/portfolio6.jpg"

export const Portfolio = () => {
	const data = [
		{
			id: 1,
			image: IMG1,
			title: "Crypto Currency Dashboard & Financial Visualization",
			github: "https://github.com/123AICodes",
			demo: "https://dribbble.com/Alien_pixels"
		},
		{
			id: 2,
			image: IMG2,
			title: "Charts Templates & Infographics in Figma",
			github: "https://github.com/123AICodes",
			demo: "https://dribbble.com/Alien_pixels"
		},
		{
			id: 3,
			image: IMG3,
			title: "Figma Dashboard UI Kit for Data Design & Web Apps",
			github: "https://github.com/123AICodes",
			demo: "https://dribbble.com/Alien_pixels"
		},
		{
			id: 4,
			image: IMG4,
			title: "Maintaining Task & Tracking Progress",
			github: "https://github.com/123AICodes",
			demo: "https://dribbble.com/Alien_pixels"
		},
		{
			id: 5,
			image: IMG5,
			title: "Charts Templates & Infographics in Figma",
			github: "https://github.com/123AICodes",
			demo: "https://dribbble.com/Alien_pixels"
		},
		{
			id: 6,
			image: IMG6,
			title: "Charts Templates & Infographics in Figma",
			github: "https://github.com/123AICodes",
			demo: "https://dribbble.com/Alien_pixels"
		},
	]
	return (
		<section id='portfolio'>
			<h5>My Recent Work</h5>
			<h2>Portfolio</h2>
			<div className="container portfolio__container">
				{
					data.map(({ id, image, title, github, demo }) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-img"><img src={image} title={title} alt={title} /></div>
								<h3>{title}</h3>
								<div className="portfolio__item-cta">
									<a className='btn' href={github} target='_blank' rel="noreferrer">Github</a>
									<a className='btn btn-primary' href={demo} target='_blank' rel="noreferrer">Live Demo</a>
								</div>
							</article>
						)
					})
				}
			</div>
		</section >
	)
}
