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
	return (
		<Box as='section' pos='relative'>
			<Center pos='absolute' top={4} w='full'>
				<Text fontFamily={'heading'} fontSize={'2xl'}>
					Title
				</Text>
			</Center>
			<Box
				maxW={{ base: 'xl', md: '6xl' }}
				mx='auto'
				px={{ base: '6', md: '8' }}
				py={[ 18, 24 ]}
			>
				<SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing='6'>
					{data.map((data, idx) => <BlogCard key={idx} data={data} />)}
				</SimpleGrid>
			</Box>
		</Box>
	);
};
