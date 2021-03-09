import {
	Box,
	Image,
	Stack,
	Text,
	useColorModeValue,
	Avatar,
} from '@chakra-ui/react';
export const BlogCard = props => {
	const {
		imageUrl,
		category,
		title,
		bodyText,
		avatar,
		userName,
		date,
		readingTime,
	} = props.data;
	return (
		<Box
			maxW={'sm'}
			w={'full'}
			bg={useColorModeValue('white', 'gray.900')}
			boxShadow={'lg'}
			rounded={'md'}
			p={6}
			overflow={'hidden'}
		>
			<Box
				h={'210px'}
				bg={'gray.100'}
				mt={-6}
				mx={-6}
				mb={6}
				overflow={'hidden'}
			>
				<Image src={imageUrl} layout={'fill'} />
			</Box>
			<Stack>
				<Text
					color={useColorModeValue('brand.500', 'brand.200')}
					textTransform={'uppercase'}
					fontWeight={800}
					fontFamily={'heading'}
					fontSize={'sm'}
					letterSpacing={1.1}
				>
					{category}
				</Text>
				<Text
					color={useColorModeValue('gray.700', 'white')}
					fontSize={'2xl'}
					fontFamily={'heading'}
				>
					{title}
				</Text>
				<Text color={'gray.500'} noOfLines={3}>
					{bodyText}
				</Text>
			</Stack>
			<Stack mt={6} direction={'row'} spacing={4} align={'center'}>
				<Avatar src={avatar} alt={userName} />
				<Stack direction={'column'} spacing={0} fontSize={'sm'}>
					<Text fontWeight={600} fontFamily={'heading'}>
						{userName}
					</Text>
					<Text color={'gray.500'} fontFamily={'heading'}>
						{date} {readingTime}
					</Text>
				</Stack>
			</Stack>
		</Box>
	);
};
