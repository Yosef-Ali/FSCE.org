import {
	Box,
	SimpleGrid,
	useColorModeValue,
	chakra,
	Button,
	Center,
	HStack,
	Circle,
} from '@chakra-ui/react';
import { SectionTitle } from '../ui/SectionTitle';
import { IndicatorCircle } from '../ui/IndicatorCircle';

const sectionTitle = 'Events';
const lightM = 'brand.500';
const darkM = 'brand.50';

export const Events = () => {
	return (
		<Box
			as='section'
			bg={useColorModeValue('brand.500', 'brand.200')}
			rounded={'lg'}
			py={[ 20 ]}
		>
			<Box
				maxW={{ base: 'xl', md: '6xl' }}
				mx='auto'
				//px={[ '6', '10' ]}
				//py={[ 18, 12 ]}
				//bg={'whiteAlpha.200'}
			>
				<Center
					w='full'
					//bg={'whiteAlpha.500'}
					py={[ 10 ]}
					mt={-20}
				>
					<SectionTitle title={sectionTitle} light={darkM} dark={lightM} />
				</Center>
				<SimpleGrid
					alignItems='center'
					columns={{ base: 1, md: 2 }}
					spacingX={{ base: 10, md: 20 }}
					px={[ 5, 10 ]}
				>
					<Box>
						<chakra.h2
							mb={4}
							fontSize={{ base: '2xl', md: '4xl' }}
							fontFamily='heading'
							letterSpacing='tight'
							textAlign={{ base: 'center', md: 'left' }}
							color={useColorModeValue('brand.50', 'brand.500')}
							lineHeight={{ md: 'shorter' }}
						>
							Clear overview for efficient tracking
						</chakra.h2>
						<chakra.p
							mb={5}
							textAlign={{ base: 'center', sm: 'left' }}
							color={useColorModeValue('gray.400', 'gray.200')}
							fontSize={{ md: 'lg' }}
							noOfLines={3}
						>
							Handle your subscriptions and transactions efficiently with the
							clear overview in Dashboard. Features like the smart search option
							allow you to quickly find any data you’re looking for.
						</chakra.p>
						<Button
							w={{ base: 'full', sm: 'auto' }}
							size='lg'
							bg={useColorModeValue('brand.50', 'brand.500')}
							_hover={{ bg: useColorModeValue('brand.700', 'gray.600') }}
							color={useColorModeValue('brand.500', 'gray.200')}
							as='a'
							href='#'
							my={[ 5, 0 ]}
						>
							Learn More
						</Button>
					</Box>
					<Box
						w='full'
						h='full'
						py={48}
						bg={useColorModeValue('gray.200', 'gray.700')}
						rounded={'lg'}
						boxShadow={'lg'}
					/>
				</SimpleGrid>
				<Center
					w='full'
					//bg={'whiteAlpha.700'}
					mb={[ -20 ]}
					py={[ 10 ]}
				>
					<IndicatorCircle />
				</Center>
			</Box>
		</Box>
	);
};
