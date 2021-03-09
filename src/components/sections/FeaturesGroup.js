import { Box, SimpleGrid, Center, Text } from '@chakra-ui/react';

import {
	FcDoughnutChart,
	FcMultipleDevices,
	FcPrivacy,
	FcTimeline,
} from 'react-icons/fc';
import { SectionTitle } from '../ui/SectionTitle';
import { Feature } from './Feature';

const sectionTitle = 'Our Features';
const lightM = 'brand.500';
const darkM = 'brand.200';

export const FeaturesGroup = () => {
	return (
		<Box
			as='section'
			py={[ 20 ]}
			//bg={'yellow.200'}
		>
			<Center
				py={[ 20 ]}
				mt={-20}
				w='full'
				// bg={'yellow.400'}
			>
				<SectionTitle title={sectionTitle} light={lightM} dark={darkM} />
			</Center>
			<Box
				maxW={{ base: 'xl', md: '5xl' }}
				mx='auto'
				px={{ base: '6', md: '24' }}
			>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing='14'>
					<Feature title='Secure by default' icon={<FcPrivacy />}>
						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
						kasd gubergren, no sea takimata sanctus.
					</Feature>
					<Feature title='Always up to date' icon={<FcTimeline />}>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore.
					</Feature>
					<Feature title='Incredible statistics' icon={<FcDoughnutChart />}>
						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
						kasd gubergren, no sea takimata sanctus.
					</Feature>
					<Feature
						title='Support for multiple devices'
						icon={<FcMultipleDevices />}
					>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod tempor invidunt ut labore.
					</Feature>
				</SimpleGrid>
			</Box>
		</Box>
	);
};
