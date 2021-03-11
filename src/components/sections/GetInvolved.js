import {
	Box,
	SimpleGrid,
	Center,
	Text,
	VStack,
	useColorModeValue,
	List,
	ListItem,
	ListIcon,
	Button,
	Icon,
} from '@chakra-ui/react';
import {
	FcDoughnutChart,
	FcMultipleDevices,
	FcPrivacy,
	FcDonate,
	FcTimeline,
} from 'react-icons/fc';
import { FaCheckCircle } from 'react-icons/fa';

const sectionTitle = 'Get Involved';
const lightM = 'brand.500';
const darkM = 'brand.200';

import { SectionTitle } from '../ui/SectionTitle';
import { InvolveIn } from '../ui/InvolveIn';
import { VolunteerIcon } from '../ui/VolunteerIcon';
import { SponsorIcon } from '../ui/SponsorIcon';

const ListOfVolunteer = () => {
	return (
		<List spacing={3} textAlign='start'>
			<ListItem>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Individual & group guidance and counseling
			</ListItem>
			<ListItem display={'flex'}>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Reintegrating children in contact with the law with their family and
				community
			</ListItem>
			<ListItem>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Recreational Activity
			</ListItem>
			<ListItem>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Library Service
			</ListItem>
			<ListItem>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Free Talk Program
			</ListItem>
			<ListItem>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Tutorial Service
			</ListItem>
			<ListItem>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Educational Material Support
			</ListItem>
			<ListItem display={'flex'}>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Environmental Sanitation and Provision of different Sanitation Material
			</ListItem>
			<ListItem>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Computer Service ...
			</ListItem>
		</List>
	);
};
const ListOfDonate = () => {
	return (
		<List spacing={3} textAlign='start'>
			<ListItem display={'flex'}>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				In kind: Exercise books our school children to enroll to school,
				contemporary research works in child protection, and publications on
				child protection for our resource centers.
			</ListItem>
			<ListItem display={'flex'}>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				In Cash: To support the ongoing projects and new ones.
			</ListItem>
			<ListItem display={'flex'}>
				<ListIcon as={FaCheckCircle} color='brand.500' />
				Technical (professional) support; counselling & psychosocial support
			</ListItem>
		</List>
	);
};

export const GetInvolved = () => {
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
				maxW={{ base: 'xl', md: '6xl' }}
				mx='auto'
				//px={{ base: '6', md: '24' }}
			>
				<SimpleGrid columns={{ base: 1, md: 2 }} spacing='24'>
					<Box>
						<InvolveIn title='Volunteer' icon={<VolunteerIcon />}>
							<Text mb={4}>
								Our Community Based Child Correction (Protection) CBCC centers
								that are running different child development related activities
							</Text>
							<ListOfVolunteer />
						</InvolveIn>
					</Box>
					<VStack spacing={24}>
						<InvolveIn title='Donate' icon={<FcDonate />}>
							<ListOfDonate />
						</InvolveIn>
						<InvolveIn title='Sponsor' icon={<SponsorIcon />}>
							Our Rehabilitation centers or safe homes where sexually exploited
							children rehabilitated and receive skill trainings
						</InvolveIn>
					</VStack>
				</SimpleGrid>
			</Box>
		</Box>
	);
};
