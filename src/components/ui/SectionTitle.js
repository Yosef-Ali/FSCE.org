import {
	Box,
	Text,
	Circle,
	HStack,
	Divider,
	useColorModeValue as mode,
} from '@chakra-ui/react';

export const SectionTitle = props => {
	return (
		<Box>
			<Text
				fontFamily={'heading'}
				fontSize={'2xl'}
				px={4}
				color={mode(`${props.light}`, `${props.dark}`)}
			>
				{props.title}
			</Text>
			<HStack>
				<Divider bg={mode(`${props.light}`, `${props.dark}`)} />
				<Circle w='3' h='3' bg={mode(`${props.light}`, `${props.dark}`)} />
				<Divider bg={mode(`${props.light}`, `${props.dark}`)} />
			</HStack>
		</Box>
	);
};
