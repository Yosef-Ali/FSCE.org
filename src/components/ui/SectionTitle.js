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
			<Text fontFamily={'heading'} fontSize={'2xl'}>
				{props.title}
			</Text>
			<HStack>
				<Divider bg={mode('brand.500', 'brand.200')} />
				<Circle w='3' h='3' bg={mode('brand.500', 'brand.200')} />
				<Divider bg={mode('brand.500', 'brand.200')} />
			</HStack>
		</Box>
	);
};
