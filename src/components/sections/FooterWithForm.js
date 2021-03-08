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
} from '@chakra-ui/react';

import { BiMailSend } from 'react-icons/bi';

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
		<Text fontWeight={'500'} fontSize={'md'} fontFamily={'mono'} mb={2}>
			{children}
		</Text>
	);
};

export function FooterWithForm() {
	return (
		<Container
			maxW={{ lg: 'container.xl' }}
			py={[ 5, 10 ]}
			px={[ 4, 4, 8, 8, 0 ]}
		>
			<SimpleGrid
				templateColumns={[ '1fr', '1fr', '2fr 2fr ', '1fr 1fr 1fr 1fr 1fr' ]}
				spacing={[ 10, 8, 12, 0 ]}
			>
				{NAV_ITEMS.map(navItem => (
					<Stack align={[ 'center', 'flex-start' ]} key={navItem.label}>
						<ListHeader>{navItem.label}</ListHeader>
						{navItem.children &&
							navItem.children.map(child => (
								<Link
									href={'#'}
									key={child.label}
									fontSize={'sm'}
									fontFamily={'mono'}
									color={mode('gray.600', 'gray.500')}
								>
									{child.label}
								</Link>
							))}
					</Stack>
				))}
				<Stack align={[ 'center', 'flex-start' ]}>
					<ListHeader>Stay up to date</ListHeader>
					<Text color={'gray.500'} pb={2}>
						At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
						kasd gubergren.
					</Text>
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
		label: 'Product',
		children: [
			{
				label: 'Overview',
				href: '#',
			},
			{
				label: 'Features',
				href: '#',
			},
			{
				label: 'Tutorials',
				href: '#',
			},
			{
				label: 'Pricing',
				href: '#',
			},
			{
				label: 'Releases',
			},
		],
	},
	{
		label: 'Company',
		children: [
			{
				label: 'About',
				href: '#',
			},
			{
				label: 'Press',
				href: '#',
			},
			{
				label: 'Careers',
				href: '#',
			},
			{
				label: 'Contacts',
				href: '#',
			},
			{
				label: 'Partners',
				href: '#',
			},
		],
	},
	{
		label: 'Support',
		children: [
			{
				label: 'Help Center ',
				href: '#',
			},
			{
				label: 'Terms of Service',
				href: '#',
			},
			{
				label: 'Legal',
				href: '#',
			},
			{
				label: 'Privacy Police',
				href: '#',
			},
			{
				label: 'Status',
				href: '#',
			},
		],
	},
	{
		label: 'Follow Us',
		children: [
			{
				label: 'Facebook ',
				href: '#',
			},
			{
				label: 'Twitter',
				href: '#',
			},
			{
				label: 'Dribbble',
				href: '#',
			},
			{
				label: 'Instagram',
				href: '#',
			},
			{
				label: 'Linkedin',
				href: '#',
			},
		],
	},
];
