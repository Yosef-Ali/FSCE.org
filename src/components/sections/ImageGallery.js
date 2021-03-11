import { Box, Container, Text, Wrap, WrapItem, Image } from '@chakra-ui/react';
//import Image from 'next/image';

const IMAGES = [
	{
		id: 1,
		url:
			'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
	},
	{
		id: 2,
		url: 'https://source.unsplash.com/random',
	},
	{
		id: 3,
		url:
			'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
	},

	{
		id: 4,
		url: 'https://source.unsplash.com/random',
	},
	// 'https://unsplash.com/photos/J-D50rg44aw',
];
export const ImageGallery = () => {
	return (
		// <Box>
		// 	{IMAGES.map(IMAGE => (
		// 		<ul>
		// 			<li key={IMAGE.id}>
		// 				<Image src={IMAGE.url} height={600} width={400} alt={'images'} />
		// 			</li>
		// 		</ul>
		// 	))}
		// </Box>
		<Wrap px='1rem' spacing={4} justify='center'>
			{IMAGES.map(IMAGE => (
				<WrapItem
					key={IMAGE.id}
					boxShadow='base'
					rounded='20px'
					overflow='hidden'
					bg='white'
					lineHeight='0'
					_hover={{ boxShadow: 'dark-lg' }}
				>
					<Image src={IMAGE.url} height={200} width={300} alt={'images'} />
				</WrapItem>
			))}
		</Wrap>
		//<Box>{IMAGES.map(IMG => <Image src={IMG} h={400} />)}</Box>
	);
};
