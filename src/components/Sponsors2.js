import React, { useEffect, useState } from 'react';
import { Box, display, height } from '@mui/system';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Button, Card, CardMedia } from '@mui/material';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import ImgPath from '../../assets/sponsors/conding-ninja-white.png';
import { hover } from '@testing-library/user-event/dist/hover';
import { Skeleton } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';
import { Grow } from '@mui/material';
// import Fade from 'react-reveal';
// import Reveal from 'react-reveal/Reveal';
// import {View}
// import sponsors from '../../assets/sponsors';
import styles from './Sponsors.module.css';

const data = [
	{
		id: 0,
		image: require(`../../assets/sponsors/conding-ninja-white.png`),
		path: `https://bit.ly/3Updcil`,
	},
	{
		id: 1,
		image: require(`../../assets/sponsors/ekeeda-logo.png`),
		path: 'https://ekeeda.com/',
	},
	{
		id: 2,
		image: require(`../../assets/sponsors/Download/tascade_white.png`),
		path: 'https://www.taskade.com/',
	},
	{
		id: 3,
		image: require(`../../assets/sponsors/Download/celo_white.png`),
		path: null,
	},
	{
		id: 4,
		image: require(`../../assets/sponsors/Devfolio_Logo-White2x.png`),
		path: 'https://devfolio.co/home/',
	},
	{
		id: 5,
		image: require(`../../assets/sponsors/Diginique Techlabs.png`),
		path: 'https://diginique.com/',
	},
	{
		id: 6,
		image: require(`../../assets/sponsors/echo-white.png`),
		path: 'https://www.echo3d.com/',
	},
	{
		id: 7,
		image: require(`../../assets/sponsors/ELearnmarket Logo.png`),
		path: 'https://www.elearnmarkets.com/?utm_source=google.com&utm_medium=cpc&utm_campaign=branding-search',
	},
	// {
	// 	id: 8,
	// 	image: require(`../../assets/sponsors/engi-circle.png`),
	// 	path: '',
	// },
	{
		id: 9,
		image: require(`../../assets/sponsors/Filecoin-logo-removebg-preview.png`),
		path: 'https://filecoin.io/',
	},
	// {
	// 	id: 10,
	// 	image: require(`../../assets/sponsors/foxmula.png`),
	// 	path: '',
	// },
	// {
	// 	id: 11,
	// 	image: require(`../../assets/sponsors/GDG Chapter lockup - GDG Bhopal.png`),
	// 	path: 'https://gdg.community.dev/gdg-cloud-bhopal/',
	// },
	// {
	// 	id: 12,
	// 	image: require(`../../assets/sponsors/Download/GitHub-Mark.png`),
	// 	path: 'https://github.com/',
	// },
	// {
	// 	id: 13,
	// 	image: require(`../../assets/sponsors/GMC LogoS.png`),
	// 	path: '',
	// },
	{
		id: 14,
		image: require(`../../assets/sponsors/guvi-white.png`),
		path: 'https://www.guvi.in/',
	},
	{
		id: 15,
		image: require(`../../assets/sponsors/hoverRobotix.png`),
		path: 'https://hoverrobotix.com/',
	},
	{
		id: 16,
		image: require(`../../assets/sponsors/IMG_7747 2.PNG`),
		path: '',
	},
	{
		id: 17,
		image: require(`../../assets/sponsors/IMG_7748.PNG`),
		path: 'https://www.yhills.in/',
	},
	{
		id: 18,
		image: require(`../../assets/sponsors/lnguify-white-2.png`),
		path: 'https://www.languify.in/',
	},
	{
		id: 19,
		image: require(`../../assets/sponsors/Mentor.x.png`),
		path: 'https://thementorx.com',
	},
	{
		id: 20,
		image: require(`../../assets/sponsors/Download/myways-removebg-preview.png`),
		path: 'https://myways.ai/',
	},
	{
		id: 21,
		image: require(`../../assets/sponsors/polygon-logo-white-5728881-4816871-2.png`),
		path: 'https://polygon.technology/',
	},
	{
		id: 22,
		image: require(`../../assets/sponsors/replit-img-white.png`),
		path: 'https://replit.com/',
	},
	{
		id: 23,
		image: require(`../../assets/sponsors/seekho Logo.png`),
		path: '',
	},
	{
		id: 24,
		image: require(`../../assets/sponsors/sfc-white.png`),
		path: '',
	},
	{
		id: 25,
		image: require(`../../assets/sponsors/solana-img-white.png`),
		path: 'https://solana.com/',
	},
	{
		id: 26,
		image: require(`../../assets/sponsors/stand-out-stickers-logo.png`),
		path: '',
	},
	// {
	// 	id: 27,
	// 	image: require(`../../assets/sponsors/sponsor.png`),
	// 	path: '',
	// },
	{
		id: 28,
		image: require(`../../assets/sponsors/techcryptors.png`),
		path: '',
	},
	{
		id: 29,
		image: require(`../../assets/sponsors/tezos-logo-63E81F3064-seeklogo.com-removebg-preview (190).png`),
		path: 'https://tezos.com/',
	},
	{
		id: 30,
		image: require(`../../assets/sponsors/eduVitae.jpeg`),
		path: 'https://www.eduvitae.co.in',
	}
];
const Sponsors = () => {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoading(true);
		}, 14000);
	});
	return (
		<div id="sponsors">
			<Paper
				sx={{
					paddingTop: '2rem',
					paddingBottom: '5rem',
					background: 'rgb(29 32 38)',
				}}
			>
				<Typography
					variant="h3"
					size="small"
					sx={{ textAlign: 'center', color: '#f06f2b', padding: '2rem' }}
				>
					<Slide direction="down" triggerOnce>
						Our Sponsors
					</Slide>
				</Typography>

				<Grid
					container
					sx={{
						alignItems: 'center',
						justifyContent: 'center',
						paddingBottom: '2rem',
						padding: '0rem 9rem',
					}}
				>
					{data.map((spo, index) => (
						<Slide
							cascade
							damping={0.8}
							direction={index % 3 === 0 ? 'left' : 'right'}
							triggerOnce
						>
							<a href={spo.path} target={'__blank'} style={{}}>
								<Grid
									item
									spacing={1}
									key={spo.id}
									sx={{
										backgroundColor: '#23272f',
										padding: '0',
										borderRadius: '10px',
										margin: '0.6rem',
									}}
								>
									<div
										style={{
											borderRadius: '10px',
											height: '200px',
											width: '200px',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
										}}
									>
										{loading ? (
											// <Fade in={true}>

											<img
												src={spo.image}
												alt=""
												style={{
													height: 'auto',
													width: '78%',
													borderRadius: '10px',
													// zIndex: '-100',
												}}
												loading="lazy"
											/>
										) : (
											<Skeleton
												variant="rectangular"
												width={'100%'}
												height={'100%'}
												animation="wave"
											></Skeleton>
										)}
									</div>
								</Grid>
								{/* )} */}
							</a>
						</Slide>
					))}
				</Grid>
			</Paper>
		</div>
	);
};

export default Sponsors;
