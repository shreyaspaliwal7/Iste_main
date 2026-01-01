import React, { useState } from 'react';

import Event from './Event';

import style from './EventsContainer.module.css';
import EventModal from '../EventModal/EventModal';
import { Skeleton } from '@mui/material';
import { Fade, Slide } from 'react-awesome-reveal';

const data = [
	{
		id: 0,
		name: 'versionBeta',
		heading: 'Version Beta',
		title: 'IDE for your code !',
		description:
			"The second iteration of Central India's Largest Hackathon - Version Beta saw new heights this year. Out of the 120+ teams that applied, 31 teams from all over the country were shortlisted to be called on-site for the 36-hour long hackathon. The participating teams had to come up with an innovative solution for the given problem statements. The 5 problem statements were closely related to real-life scenarios. The hackathon was mentored and judged by experts like Mr. Sabyasachi Mukhopadhyay, Mrinal Jain, Abhishek Yagnik, and Sameer Khan from Facebook Developer Circle of Kolkata, Indore, and Bhopal. After an intense competition, the team from MANIT, Bhopal bagged the first prize.",

		date: 'October 2023',

		website: 'https://versionbeta.istemanit.in/',
	},
	{
		id: 2,
		name: 'flairHaven',
		heading: 'Flair Haven',
		title: 'A series of immersive Workshops',
		description:
			"With competition skyrocketing, it's more substantial now than ever to be acquainted with the growing needs of the industry. And when it comes to learning in-demand skills and putting them to practical use, nothing is more promising than workshops. To provide learning opportunities with hands-on experience, we at ISTE SC MANIT organize intensive project-based workshops under Flair Haven, which are professionally curated by industry experts. These workshops are a great way to expose yourself to new skills and sharpen the existing ones. We always try to provide incredible learning opportunities to all the participants through our workshops and the incredulous response we receive each year proves just that. At the end of the day, the workshop is an unforgettable experience for both the mentors and the students.",

		date: 'October 2023',

		website: 'https://flairhaven.istemanit.in/',
	},

	{
		id: 3,
		name: 'codathon',
		heading: 'Codathon',
		title: 'Coding Contest',
		description:
			"Codathon '20 can be marked as the beginning of our Annual student conclave - Chimera. It broke all its previous records by completing over 6,500 registrations for the Inter NIT coding contest. The event is designed in a way for everyone to participate. The seven-day coding event consisted of questions to test the problem-solving ability of the participants. Cash prizes totaling up to Rs 32,000, Internship at HackerEarth, and many other goodies like t-shirts, badges, bags, and books from Coding Blocks and HackerEarth were awarded to deserving candidates. The winner of Codathon '20 was Aryaman Arora from NIT Allahabad and the best female coder was bagged by Ritika Mor.",

		date: 'January 2023',

		website:
			'https://assessment.hackerearth.com/challenges/college/codathon22/',
	},
	{
		name: 'div',
	},
	{
		id: 5,
		name: 'megatrep',
		heading: 'Megatreopuz',
		title: 'Online Cryptic Hunt!!!',
		description:
			'As ISTE proudly claims Megatreopuz as its one of a kind event each year, this year was no different. A battle of wits in the form of cunning puzzles, coded messages, and mind-boggling questions is what characterizes this hunt. Participants rack their brains for solutions for over 7 days with difficulty increases with every level. Megatreopuz has witnessed participation from all around the globe since its inception and is touted as one of the most intriguing cryptic challenges ever since. The winner this year was Gaurav Loothra, Alumnus of Amity University.',

		date: 'October 2023',

		website: 'https://megatreopuz.istemanit.in/',
	},

	{
		id: 6,
		name: 'chimerax',
		heading: 'CHIMERA-X',
		title: 'Quizzing Contest',
		description:
			"Chimera-X is central India's largest and ISTE SC MANIT's flagship-quizzing event under Chimera – ISTE's annual student conclave. The 18th edition of Chimera-X was a huge success and it garnered students from across the country. The prelims were held across 10 cities and received overwhelming participation and extremely positive feedback from everywhere. The quiz consisted of three rounds - written, audio-visual round, and a grand finale. One team from each city was selected for the final round. The grand finale was held at MANIT, Bhopal on 16th February 2020 and was hosted by Quiz Master Mahendra Mohan Das. With over 2000 teams participating, a team from MANIT stood first followed by the team from CBIT, Hyderabad.",

		date: 'March 2023',

		website: 'https://chimerax.istemanit.in/',
	},
	{
		name: 'div',
	},
	{
		id: 8,
		name: 'anubhuti',
		heading: 'ANUBHUTI',
		title: 'Unfloding Hidden Stories!',
		description:
			"Anubhuti, an annual talk show is conducted by ISTE each year wherein esteemed guests from different backgrounds and tons of experience are invited. It serves as a medium for students to learn and get inspired. This year it was no different, the two speakers were exemplary individuals filled with success stories. The first was Dharamveer Singh Chauhan, the CEO, and Co-founder of Zostel, a treat for all the curious budding entrepreneurs out there. While a firm believer in the ideology of not giving up, he not only motivated students not to give up but also to never stop innovating. The second speaker – Aaditya Mishra, MANIT's very own visiting his alma mater to share his journey into becoming an IPS. It motivated various students who dream to take UPSC in the next phase of their lives.",

		date: 'March 2023',

		website:
			'https://docs.google.com/forms/d/e/1FAIpQLScPeoYisaqjsX0MH2vyHzDTCm81fHil152ysWcAnv4t23viLw/closedform',
	},
];

const EventsContainer = (props) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [modalData, setModalData] = useState();
	const [load, setLoad] = useState(false);
	const knowMoreHandler = (event) => {
		console.log(event.target.name);
		setModalVisible(true);
		setModalData(data[+event.target.name]);
	};

	const closeModal = (event) => {
		setModalVisible(false);
		setModalData();
	};

	return (
		<div className={style.bg}>
			<h1 className={style.heading} id="events">Our Events</h1>
			<div className={style.eventContainer}>
				{data.map((event) =>
					event.name === 'div' ? (
						<div></div>
					) : (
						<Event
							name={event.id}
							website={event.website}
							onClick={knowMoreHandler}
							imageSrc={require(`../../assets/logoDark/${event.name}.png`)}
						/>
					)
				)}
				{modalVisible && (
					<EventModal onCloseModal={closeModal} eventData={modalData} />
				)}
			</div>
		</div>
	);
};

export default EventsContainer;
