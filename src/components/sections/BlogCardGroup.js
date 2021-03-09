import {
	Box,
	SimpleGrid,
	useColorModeValue,
	Stack,
	Avatar,
	Image,
	Heading,
	Text,
	Center,
} from '@chakra-ui/react';
import { BlogCard } from '../ui/BlogCard';

import { SectionTitle } from '../ui/SectionTitle';

const data = [
	{
		imageUrl:
			'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		category: 'Blog',
		title: 'Boost your conversion rate',
		bodyText:
			'	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam justo duo dolores et ea rebum.',
		avatar: 'https://avatars0.githubusercontent.com/u/1164541?v=4',
		userName: 'Achim Rolle',
		date: 'Feb 08, 2021',
		readingTime: '6min',
	},
	{
		imageUrl:
			'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		category: 'Blog',
		title: 'Boost your conversion rate',
		bodyText:
			'	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam justo duo dolores et ea rebum.',
		avatar: 'https://avatars0.githubusercontent.com/u/1164541?v=4',
		userName: 'Achim Rolle',
		date: 'Feb 08, 2021',
		readingTime: '6min',
	},
	{
		imageUrl:
			'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
		category: 'Blog',
		title: 'Boost your conversion rate',
		bodyText:
			'	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seddiam nonumy eirmod tempor invidunt ut labore et dolore magnaaliquyam erat, sed diam voluptua. At vero eos et accusam justo duo dolores et ea rebum.',
		avatar: 'https://avatars0.githubusercontent.com/u/1164541?v=4',
		userName: 'Achim Rolle',
		date: 'Feb 08, 2021',
		readingTime: '6min',
	},
];
export const BlogCardGroup = () => {
	const sectionTitle = 'Latest Blog';
	const lightM = 'brand.500';
	const darkM = 'brand.200';
	return (
		<Box
			as='section'
			py={[ 20 ]}
			// bg='yellow.400'
		>
			<Center
				w='full'
				py={[ 20 ]}
				mt={[ -20 ]}
				//bg='yellow.100'
			>
				<SectionTitle title={sectionTitle} light={lightM} dark={darkM} />
			</Center>
			<Box maxW={[ 'xl', '6xl' ]} mx='auto'>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='10'>
					{data.map((data, idx) => <BlogCard key={idx} data={data} />)}
				</SimpleGrid>
			</Box>
		</Box>
	);
};
