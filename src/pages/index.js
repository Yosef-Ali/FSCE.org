import { Hero } from '../components/sections/Hero';
import { Container } from '../components/Container';

import { Header1 } from '../components/sections/Header-1';
import { SmallFooter } from '../components/sections/SmallFooter';
import { FooterWithForm } from '../components/sections/FooterWithForm';

import { FeaturesGroup } from '../components/sections/FeaturesGroup';
import { NewsFeature } from '../components/sections/NewsFeature';
//import { LatestNews } from '../components/sections/LatestNews';
import { BlogCardGroup } from '../components/sections/BlogCardGroup';
import { Events } from '../components/sections/Events';
import { ImageGallery } from '../components/sections/ImageGallery';
import { GetInvolved } from '../components/sections/GetInvolved';

const Index = () => (
	<Container>
		<Header1 />
		<NewsFeature />
		<BlogCardGroup />
		<Events />
		<FeaturesGroup />
		<GetInvolved />
		<ImageGallery />
		<FooterWithForm />
		<SmallFooter />
	</Container>
);

export default Index;
