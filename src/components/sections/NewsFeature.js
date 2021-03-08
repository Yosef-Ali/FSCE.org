import {
	Box,
	SimpleGrid,
	Grid,
	Stack,
	VStack,
	GridItem,
	Center,
	Spacer,
	useColorModeValue,
	Image,
	Flex,
	Heading,
	Text,
	useBreakpointValue,
	Button,
	Container,
	LinkOverlay,
} from '@chakra-ui/react';
const IMAGE = [
	'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
	'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
];

export const NewsFeature = () => {
	return (
		<Box>
			<Container as={Stack} maxW={'6xl'} pt={6} pb={24}>
				<SimpleGrid
					templateColumns={{ base: '1fr ', md: '7fr 4fr' }}
					spacing={4}
				>
					<Box
						pos={'relative'}
						role={'group'}
						zIndex={1}
						overflow={'hidden'}
						boxShadow='2xl'
					>
						<Image
							h={{ base: '15em', md: 'full' }}
							rounded={'lg'}
							w={'full'}
							src={IMAGE[0]}
							objectFit={'cover'}
							pos={'relative'}
							zIndex={-1}
						/>
						<Box
							pos={'absolute'}
							top={0}
							l={0}
							w={'full'}
							h={'full'}
							rounded={'lg'}
							zIndex={1}
							bgGradient={'linear(to-b, transparent,rgba(0,0,0,0.3) 40%,#000)'}
							opacity={0.7}
							_groupHover={{
								opacity: '0.8',
							}}
						/>
						<Flex
							direction={'column'}
							pos={'absolute'}
							rounded={'lg'}
							bottom={[ 3, 6 ]}
							zIndex={1000}
							w={'full'}
							h={[ '80%', '50%' ]}
							px={[ 4, 6 ]}
						>
							<Spacer />
							<Box>
								<Box>
									<Flex py={4} maxW={'sm'} justify={'start'}>
										<Text
											color={useColorModeValue('brand.100', 'brand.700')}
											textTransform={'uppercase'}
											fontWeight={800}
											fontSize={'sm'}
											letterSpacing={1.1}
										>
											Blog
										</Text>
										<Text
											color={useColorModeValue('brand.100', 'brand.700')}
											textTransform={'uppercase'}
											fontWeight={800}
											fontSize={'sm'}
											letterSpacing={1.1}
											px={4}
										>
											02/Date/Year
										</Text>
									</Flex>
								</Box>
								<Text
									as={'text'}
									mb={3}
									w={{ sm: 3 / 4, lg: 2 / 3 }}
									color={useColorModeValue('white', 'brand.100')}
									fontSize={'2xl'}
									fontFamily={'heading'}
									lineHeight={{ sm: '1.2em', lg: 'normal' }}
									noOfLines={2}
									textShadow={'md'}
								>
									Boost your conversion rate Boost your conversion rate
								</Text>
								<Text
									color={'gray.400'}
									w={{ sm: 3 / 4, lg: 2 / 3 }}
									lineHeight={{ sm: '1.2em', lg: '1.5em' }}
									noOfLines={[ 1, 2, 2, 3 ]}
								>
									At vero eos et accusam et justo duo dolores et ea rebum. Stet
									clita kasd gubergren, no sea takimata sanctus.
								</Text>
							</Box>
						</Flex>
					</Box>

					<Box as={Stack} spacing={4}>
						<Box boxShadow='2xl' pos={'relative'} role={'group'}>
							<Image
								rounded={'lg'}
								h={{ base: '15em', md: '15em' }}
								w={'full'}
								src={IMAGE[1]}
								objectFit={'cover'}
							/>
							<Box
								pos={'absolute'}
								top={0}
								l={0}
								w={'full'}
								h={'full'}
								rounded={'lg'}
								zIndex={1}
								bgGradient={
									'linear(to-b, transparent,rgba(0,0,0,0.3) 40%,#000)'
								}
								opacity={0.7}
								_groupHover={{
									opacity: '0.8',
								}}
							/>
							<Flex
								direction={'column'}
								pos={'absolute'}
								rounded={'lg'}
								bottom={[ 3, 4 ]}
								zIndex={1000}
								w={'full'}
								h={[ '80%', '50%' ]}
								px={[ 3, 4 ]}
							>
								<Spacer />
								<Box
								//bg={'tomato'}
								//overflow={'hidden'}
								>
									<Box>
										<Flex py={2} maxW={'sm'} justify={'start'}>
											<Text
												color={useColorModeValue('brand.100', 'brand.700')}
												textTransform={'uppercase'}
												fontWeight={800}
												fontSize={'sm'}
												letterSpacing={1.1}
											>
												Blog
											</Text>
											<Text
												color={useColorModeValue('brand.100', 'brand.700')}
												textTransform={'uppercase'}
												fontWeight={800}
												fontSize={'sm'}
												letterSpacing={1.1}
												px={4}
											>
												02/Date/Year
											</Text>
										</Flex>
									</Box>
									<Text
										mb={1}
										w={{ sm: 3 / 4, lg: 2 / 3 }}
										color={useColorModeValue('white', 'brand.100')}
										fontSize={'xl'}
										fontFamily={'heading'}
										lineHeight={{ sm: '1.2em', lg: 'normal' }}
										noOfLines={2}
										textShadow={'md'}
									>
										Boost your conversion rate boost your conversion rate
									</Text>
									<Text
										color={'gray.500'}
										w={{ sm: 3 / 4, lg: 2 / 3 }}
										lineHeight={{ sm: '1em', lg: 'normal' }}
										noOfLines={1}
										fontSize={{ sm: 'sm', md: 'md', lg: 'sm' }}
									>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam nonumy eirmod tempor invidunt ut labore et dolore magna
										rebum krhtlkalskdngl dfnslkdjflk sdflskadnfl.
									</Text>
								</Box>
							</Flex>
						</Box>

						<Box boxShadow='2xl' pos={'relative'} role={'group'}>
							<Image
								rounded={'lg'}
								h={{ base: '15em', md: '15em' }}
								w={'full'}
								src={IMAGE[0]}
								objectFit={'cover'}
							/>
							<Box
								pos={'absolute'}
								top={0}
								l={0}
								w={'full'}
								h={'full'}
								rounded={'lg'}
								zIndex={1}
								bgGradient={
									'linear(to-b, transparent,rgba(0,0,0,0.3) 40%,#000)'
								}
								opacity={0.7}
								_groupHover={{
									opacity: '0.8',
								}}
							/>
							<Flex
								direction={'column'}
								pos={'absolute'}
								rounded={'lg'}
								bottom={[ 3, 4 ]}
								zIndex={1000}
								w={'full'}
								h={[ '80%', '50%' ]}
								px={[ 3, 4 ]}
							>
								<Spacer />
								<Box
								//bg={'tomato'}
								//overflow={'hidden'}
								>
									<Box>
										<Flex py={2} maxW={'sm'} justify={'start'}>
											<Text
												color={useColorModeValue('brand.100', 'brand.700')}
												textTransform={'uppercase'}
												fontWeight={800}
												fontSize={'sm'}
												letterSpacing={1.1}
											>
												Blog
											</Text>
											<Text
												color={useColorModeValue('brand.100', 'brand.700')}
												textTransform={'uppercase'}
												fontWeight={800}
												fontSize={'sm'}
												letterSpacing={1.1}
												px={4}
											>
												02/Date/Year
											</Text>
										</Flex>
									</Box>
									<Text
										mb={1}
										w={{ sm: 3 / 4, lg: 2 / 3 }}
										color={useColorModeValue('white', 'brand.100')}
										fontSize={'xl'}
										fontFamily={'heading'}
										lineHeight={{ sm: '1.2em', lg: 'normal' }}
										noOfLines={2}
										textShadow={'md'}
									>
										Boost your conversion rate boost your conversion rate
									</Text>
									<Text
										color={'gray.500'}
										w={{ sm: 3 / 4, lg: 2 / 3 }}
										lineHeight={{ sm: '1em', lg: 'normal' }}
										noOfLines={1}
										fontSize={{ sm: 'sm', md: 'md', lg: 'sm' }}
									>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam nonumy eirmod tempor invidunt ut labore et dolore magna
										rebum krhtlkalskdngl dfnslkdjflk sdflskadnfl.
									</Text>
								</Box>
							</Flex>
						</Box>
					</Box>
				</SimpleGrid>
			</Container>
		</Box>
	);
};
