import {
	Box,
	chakra,
	Container,
	Link,
	Stack,
	Text,
	useColorModeValue as mode,
	VisuallyHidden,
	useColorMode,
	Flex,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from 'react-icons/fa';
import { LogoOne } from '../ui/LogoOne';

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
				bg: mode('blackAlpha.300', 'whiteAlpha.300'),
			}}
		>
			<VisuallyHidden>{label}</VisuallyHidden>
			{children}
		</chakra.button>
	);
};

export function SmallFooter() {
	return (
		<Box
			bg={mode('gray.50', 'gray.900')}
			color={mode('gray.700', 'gray.200')}
			w='full'
		>
			<Container
				as={Stack}
				//maxW={'7xl'}
				maxW={{ lg: 'container.xl' }}
				py={4}
				direction={{ base: 'column', lg: 'row' }}
				spacing={4}
				justify={{ base: 'center', lg: 'space-between' }}
				align={{ base: 'center', lg: 'center' }}
				borderTop={1}
				borderStyle={'solid'}
				borderColor={mode('gray.200', 'gray.700')}
			>
				<Flex>
					<LogoOne
						w={{ base: '60px', md: '70px' }}
						color={'brand.500'}
						cursor={'pointer'}
					/>
				</Flex>
				<Text
					fontSize={'smaller'}
					fontFamily={'mono'}
					color={mode('gray.500', 'gray.600')}
				>
					© 2021 FSCE.org All rights reserved, Developed by Yosef Ali
				</Text>
				<Stack direction={'row'} spacing={6}>
					<SocialButton label={'Twitter'} href={'#'}>
						<FaTwitter color={mode('#4d5499', '#B9BDE0')} />
					</SocialButton>
					<SocialButton label={'YouTube'} href={'#'}>
						<FaYoutube color={mode('#4d5499', '#B9BDE0')} />
					</SocialButton>

					<SocialButton label={'FaceBook'} href={'#'}>
						<FaFacebookF color={mode('#4d5499', '#B9BDE0')} />
					</SocialButton>
				</Stack>
			</Container>
		</Box>
	);
}
