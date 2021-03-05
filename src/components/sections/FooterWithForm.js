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
		<Box>
			<Container as={Stack} maxW={'6xl'} py={{ base: 5, lg: 10 }}>
				<SimpleGrid
					templateColumns={{
						sm: '1fr ',
						md: '2fr 2fr ',
						lg: '1fr 1fr 1fr 1fr 2fr',
					}}
					spacingX={26}
					spacingY={{ md: 16 }}
				>
					{NAV_ITEMS.map(navItem => (
						<Stack align={'flex-start'} key={navItem.label}>
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
					<Stack align={'flex-start'}>
						<ListHeader>Stay up to date</ListHeader>
						<Stack direction={'row'}>
							<Input
								placeholder={'Your email address'}
								bg={mode('blackAlpha.100', 'whiteAlpha.100')}
								border={0}
								_focus={{
									bg: 'whiteAlpha.300',
								}}
							/>
							<IconButton
								colorScheme='brand'
								//bg={useColorModeValue('brand.400', 'brand.800')}
								//color={useColorModeValue('white')}
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
		</Box>
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
