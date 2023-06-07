import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"
import "swiper/css/pagination"


export const Testimonials = () => {

	const data = [
		{
			avatar: AVTR1,
			name: 'Grace Fynn',
			review: 'Consectetur adipisicing elit. Modi quos impedit sintipsa aspernatur voluptatem quo id, pariatur accusamus illum distinctio illo iste quam aperiam, beatae vitae facilis itaque.Vel!'
		},
		{
			avatar: AVTR2,
			name: 'James Quayson',
			review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos impedit sintipsa aspernatur voluptatem quo id, pariatur accusamus illum distinctio illo iste quam aperiam, beatae vitae facilis itaque.Vel!'
		},
		{
			avatar: AVTR3,
			name: 'Frank Phelps',
			review: 'Modi quos impedit sintipsa aspernatur voluptatem quo id, pariatur accusamus illum distinctio illo iste quam aperiam, beatae vitae facilis itaque.Vel!'
		},
		{
			avatar: AVTR4,
			name: 'Sadina Aljha',
			review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos impedit sintipsa aspernatur voluptatem quo id, pariatur accusamus illum distinctio illo iste quam aperiam, beatae vitae facilis itaque.Vel!'
		}
	]
	return (
		<section id='testimonials'>
			<h5>Review from Clients</h5>
			<h2>Testimonials</h2>
			<Swiper className="container testimonials__container"
				modules={[Pagination]}
				spaceBetween={40}
				slidesPerView={1}
				pagination={{ clickable: true }}
			>
				{
					data.map(({ avatar, name, review }, index) => {
						return (
							<SwiperSlide key={index} className="testimonial">
								<div className="client__avatar"><img src={avatar} alt={name} /></div>
								<h5 className='client__name'>{name}</h5>
								<small className="client__review">{review}</small>
							</SwiperSlide>
						)
					})
				}
			</Swiper>
		</section>
	)
}

export default Testimonials