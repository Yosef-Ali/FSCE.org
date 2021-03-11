import {
	Box,
	Stack,
	Text,
	useColorModeValue as mode,
	Flex,
} from '@chakra-ui/react';

export const InvolveIn = props => {
	const { title, children, icon } = props;
	return (
		<Stack spacing='6'>
			<Flex>
				<Box fontSize='4xl' mr={4}>
					{icon}
				</Box>
				<Text fontFamily={'heading'} fontSize='2xl'>
					{title}
				</Text>
			</Flex>
			<Box color={mode('gray.600', 'gray.400')}>{children}</Box>
		</Stack>
	);
};
