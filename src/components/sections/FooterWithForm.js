import {
	Box,
	chakra,
	Container,
	Link,
	SimpleGrid,
	Stack,
	Text,
	VisuallyHidden,
	Input,
	IconButton,
	useColorModeValue as mode,
	Flex,
	Icon,
	Center,
	HStack,
	Spacer,
} from '@chakra-ui/react';
import { FaFax } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';
import { MdHeadset, MdEmail, MdLocationOn, MdLocalPhone } from 'react-icons/md';

const SocialButton = ({ children, label, href }) => {
	return (
		<chakra.button
			bg={mode('blackAlpha.100', 'whiteAlpha.100')}
			rounded={'full'}
			w={8}
			h={8}
			cursor={'pointer'}
			as={'a'}
			href={href}
			display={'inline-flex'}
			alignItems={'center'}
			justifyContent={'center'}
			transition={'background 0.3s ease'}
			_hover={{
				bg: mode('blackAlpha.200', 'whiteAlpha.200'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

const ListHeader = ({ children }) => {
	return (
		<Text
			fontWeight={'500'}
			fontSize={[ 'md', 'md', 'md', 'sm', 'md' ]}
			fontFamily={'mono'}
			mb={2}
		>
			{children}
		</Text>
	);
};

export function FooterWithForm() {
	return (
		<Container
			maxW={{ lg: 'container.xl' }}
			py={[ 5, 10 ]}
			px={[ 4, 4, 8, 4, 0 ]}
		>
			<SimpleGrid
				templateColumns={[
					'1fr',
					'1fr',
					'2fr 2fr ',
					'2fr 2fr 2fr 2fr 2fr 2fr',
				]}
				spacing={[ 10, 18, 16, 8 ]}
			>
				{NAV_ITEMS.map(navItem => (
					<Stack align={[ 'center', 'flex-start' ]} key={navItem.label}>
						<ListHeader>{navItem.label}</ListHeader>
						{navItem.children &&
							navItem.children.map(child => (
								<Link
									href={'#'}
									key={child.label}
									fontSize={'.7em'}
									fontFamily={'mono'}
									color={mode('gray.600', 'gray.500')}
								>
									{child.label}
								</Link>
							))}
					</Stack>
				))}

				<Stack align={[ 'center', 'flex-start' ]}>
					<ListHeader>Contact Us</ListHeader>

					<Stack align={[ 'center', 'flex-start' ]}>
						<Flex color={mode('gray.500', 'brand.200')}>
							<Icon as={BiMailSend} h={5} w={5} mr={1} />

							<chakra.h1
								px={1}
								fontSize={'.7em'}
								fontFamily={'mono'}
								color={mode('gray.600', 'gray.500')}
							>
								info@fsc-e.org
							</chakra.h1>
						</Flex>
						<Flex mt={2} color={mode('gray.500', 'brand.200')}>
							<Icon as={MdLocalPhone} h={4} w={4} mr={2} />

							<chakra.h4
								fontSize={'.7em'}
								fontFamily={'mono'}
								color={mode('gray.500', 'gray.500')}
								textAlign={[ 'center', 'left' ]}
							>
								<span>+251 115 534 722,</span>
								<span> +251 115 524 294,</span>
								<span> +251 115 523 548</span>
							</chakra.h4>
						</Flex>
						<Flex mt={2} color={mode('gray.500', 'brand.200')}>
							<Icon as={FaFax} h={4} w={4} mr={2} />

							<chakra.h4
								fontSize={'.7em'}
								fontFamily={'mono'}
								color={mode('gray.500', 'gray.500')}
							>
								+251 115 534 469
							</chakra.h4>
						</Flex>
						<Flex
							mt={2}
							color={mode('gray.500', 'brand.200')}
							justify={'center'}
						>
							<Icon as={MdEmail} h={4} w={4} mr={2} />

							<chakra.h1
								fontSize={'.7em'}
								fontFamily={'mono'}
								color={mode('gray.500', 'gray.500')}
								textAlign={[ 'center', 'left' ]}
							>
								<span>P.O.Box: 9562,</span> <span>Addis Ababa, Ethiopia,</span>
							</chakra.h1>
						</Flex>
					</Stack>
				</Stack>

				<Stack align={[ 'center', 'flex-start' ]}>
					<chakra.h1
						fontSize={[ 'md', 'md', 'md', 'sm', 'md' ]}
						fontFamily={'mono'}
						color={mode('gray.800', 'gray.300')}
					>
						Forum on Sustainable Child Empowerment
					</chakra.h1>
					<Flex color={mode('gray.600', 'gray.50')} justify='center'>
						{/* <Icon as={MdLocationOn} h={5} w={5} mr={2} /> */}

						<chakra.h1
							fontSize={'.7em'}
							fontFamily={'mono'}
							color={mode('gray.500', 'gray.500')}
							align={{ sm: 'center', md: 'flex-start' }}
						>
							Adwa Street, Yeka Sub city Kebele 10 House Number 322
						</chakra.h1>
					</Flex>
					<Spacer pt='2' />
					<ListHeader>Stay up to date</ListHeader>

					<Stack direction={'row'} flex='1' w='100%'>
						<Input
							placeholder={'Your email address'}
							bg={mode('blackAlpha.100', 'whiteAlpha.100')}
							border={0}
							display='block'
							flex='1'
							w='100%'
							_focus={{
								bg: 'whiteAlpha.300',
							}}
						/>
						{/* <Box bg='tomato' flex='1' w='100%'>
							<Text>Box 3</Text>
						</Box> */}
						<IconButton
							colorScheme='brand'
							_hover={{
								bg: 'brand.300',
							}}
							aria-label='Subscribe'
							icon={<BiMailSend />}
						/>
					</Stack>
				</Stack>
			</SimpleGrid>
		</Container>
	);
}
const NAV_ITEMS = [
	{
		label: 'Who We Are',
		children: [
			{
				label: 'Values and Principles',
				href: '#',
			},
			{
				label: 'Vision and Mission',
				href: '#',
			},
			{
				label: 'Board Members',
				href: '#',
			},
			{
				label: 'Partners',
				href: '#',
			},
			{
				label: 'Merits',
				href: '#',
			},
		],
	},
	{
		label: 'What We Do',
		children: [
			{
				label: 'Prevention and Promotion Program',
				href: '#',
			},
			{
				label: 'Protection',
				href: '#',
			},
			{
				label: 'Rehabilitation and Reintegration',
				href: '#',
			},
			{
				label: 'Child Resource Center',
				href: '#',
			},
		],
	},
	{
		label: 'Where we Work',
		children: [
			{
				label: 'City Area Program Offices',
				href: '#',
			},
			{
				label: 'Regional Area Program Offices',
				href: '#',
			},
		],
	},
	{
		label: 'Resources',
		children: [
			{
				label: 'Reports and Reviews',
				href: '#',
			},
			{
				label: 'FSCE Publications',
				subLabel: 'An exclusive list for contract work',
				href: '#',
			},
			{
				label: 'Case Stories ',
				href: '#',
			},
		],
	},
];
