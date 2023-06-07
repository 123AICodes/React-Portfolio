import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { FiDribbble } from "react-icons/fi"

export const HeaderSocials = () => {
	return (
		<div className='header__socials'>
			<a href="https://linkedin.com/in/adu_isaac/-480b22253/"><BsLinkedin /></a>
			<a href="https://github.com/123AICodes"><FaGithub /></a>
			<a href="https://dribble.com"><FiDribbble /></a>
		</div>
	)
}

export default HeaderSocials