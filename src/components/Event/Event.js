import React, { useState, useEffect } from 'react';

import style from './Event.module.css';
import EventImage from './EventImage';
import Button from '../UI/Button';
import { useAutocomplete } from '@mui/material';
import { Slide, Fade } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
import { Skeleton } from '@mui/material';
const Event = (props) => {
	const [load, setLoad] = useState(false);
	useEffect(() => {
		setInterval(() => {
			setLoad(1);
		}, 8000);
	});

	return (
		<div
			animate={{ scale: 1, opacity: 1 }}
			transition={{ type: 'tween', duration: 1 }}
			initial={{ scale: 0, opacity: 0 }}
			className={style.eventStyle}
		>
			{load ? (
				<div>
					<Slide
						triggerOnce
						direction={props.name % 2 === 0 ? 'left' : 'right'}
						damping={0.6}
						sx={{ width: '100%' }}
					>
						<EventImage
							name={props.name}
							src={props.imageSrc}
							onClick={props.onClick}
						/>
					</Slide>
					<div className={style.buttonContainer}>
						<a href={props.website} target="_blank" className={style.website}>
							Visit Website
						</a>
						<a
							name={props.name}
							onClick={props.onClick}
							className={style.website}
						>
							Know More
						</a>
					</div>
				</div>
			) : (
				<Skeleton
					variant="rectangular"
					width={'104%'}

					sx={{ borderRadius: '13px' }}
					height="280px"
					animation="wave"
				></Skeleton>
			)}
		</div>
	);
};

export default Event;
