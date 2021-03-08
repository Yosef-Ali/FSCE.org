import {
	chakra,
	Box,
	Icon,
	Container,
	SimpleGrid,
	useColorModeValue as mode,
} from '@chakra-ui/react';
//import { Container } from '../Container';
import { NewsCard } from '../ui/NewsCard';

const data = [
	{
		imageUrl: 'https://bit.ly/2Z4KKcF',
		imageAlt: 'Rear view of modern home with pool',
		beds: 3,
		baths: 2,
		title: 'Modern home in city center in the heart of historic Los Angeles',
		formattedPrice: '$1,900.00',
		reviewCount: 34,
		rating: 4,
	},
	{
		imageUrl: 'https://bit.ly/2Z4KKcF',
		imageAlt: 'Rear view of modern home with pool',
		beds: 4,
		baths: 2,
		title: 'Modern home in city center in the heart of historic Los Angeles',
		formattedPrice: '$1,900.00',
		reviewCount: 45,
		rating: 2,
	},
	{
		imageUrl: 'https://bit.ly/2Z4KKcF',
		imageAlt: 'Rear view of modern home with pool',
		beds: 3,
		baths: 2,
		title: 'Modern home in city center in the heart of historic Los Angeles',
		formattedPrice: '$3,900.00',
		reviewCount: 34,
		rating: 4,
	},
];
const Feature = props => {
	return (
		<Box>
			<Icon
				boxSize={12}
				color={mode('brand.700')}
				mb={4}
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
				aria-hidden='true'
			>
				{props.icon}
			</Icon>
			<chakra.h3
				mb={3}
				mb={3}
				fontSize='lg'
				lineHeight='shorter'
				fontWeight='bold'
				color={mode('gray.900')}
			>
				{props.title}
			</chakra.h3>
			<chakra.p lineHeight='tall' color={mode('gray.600', 'gray.400')}>
				{props.children}
			</chakra.p>
		</Box>
	);
};
export const LatestNews = () => {
	return (
		<Box as='section' py='24'>
			<Container maxW='6xl' mx='auto'>
				<Box>
					<SimpleGrid columns={[ 1, 2, 2, 3 ]} spacing='4'>
						{data.map((data, idx) => <NewsCard key={idx} data={data} />)}
					</SimpleGrid>
				</Box>
			</Container>
		</Box>
	);
};
