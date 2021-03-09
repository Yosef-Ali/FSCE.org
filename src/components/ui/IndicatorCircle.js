import { Box, HStack, Circle, useColorModeValue } from '@chakra-ui/react';

export const IndicatorCircle = () => {
	return (
		<Box>
			<HStack
				justify='center'
				spacing='4'
				mt='8'
				color={useColorModeValue('gray.300', 'gray.600')}
			>
				<Circle w='3' h='3' bg='currentColor' />
				<Circle w='2' h='2' bg='currentColor' />
				<Circle w='2' h='2' bg='currentColor' />
				<Circle />
			</HStack>
		</Box>
	);
};
