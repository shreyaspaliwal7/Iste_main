import React, { useEffect } from 'react';
import { useState } from 'react';
import style from './EventImage.module.css';
import { Skeleton } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
const EventImage = (props) => {
	const [load, setLoad] = useState(false);
	useEffect(() => {
		if (window.scrollY >= 200) {
			setTimeout(() => {
				setLoad(true);
			}, 3000);
		}
	}, [window.scrollY]);
	return (
		<div name={props.name} className={style.eventImage} onClick={props.onClick}>
			<img src={props.src} name={props.name} onClick={props.onClick} />
		</div>
	);
};

export default EventImage;
