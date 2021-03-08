import { Box, Badge, useColorModeValue, Image } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

export const NewsCard = props => {
	const {
		imageUrl,
		imageAlt,
		beds,
		baths,
		title,
		formattedPrice,
		reviewCount,
		rating,
	} = props.data;

	return (
		<Box
			bg={useColorModeValue('white', 'gray.800')}
			maxW='xs'
			rounded='lg'
			shadow='lg'
		>
			<Image src={imageUrl} alt={imageAlt} roundedTop='lg' />

			<Box p='6'>
				<Box d='flex' alignItems='baseline'>
					<Badge rounded='full' px='2' colorScheme='teal'>
						Blog
					</Badge>
					<Box
						color='gray.500'
						fontWeight='semibold'
						letterSpacing='wide'
						fontSize='xs'
						textTransform='uppercase'
						ml='2'
					>
						{beds} beds &bull; {baths} baths
					</Box>
				</Box>

				<Box
					mt='1'
					fontSize={'2xl'}
					fontFamily={'heading'}
					as='h4'
					lineHeight='tight'
					isTruncated
				>
					{title}
				</Box>

				<Box>
					{formattedPrice}
					<Box as='span' color='gray.600' fontSize='sm'>
						/ wk
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
