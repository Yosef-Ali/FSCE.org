import { Hero } from '../components/sections/Hero';
import { Container } from '../components/Container';

import { Header1 } from '../components/sections/Header-1';
import { SmallFooter } from '../components/sections/SmallFooter';
import { FooterWithForm } from '../components/sections/FooterWithForm';

import { GridListWithHeading } from '../components/sections/GridListWithHeading';
import { FeaturesGroup } from '../components/sections/FeaturesGroup';
import { NewsFeature } from '../components/sections/NewsFeature';
import { LatestNews } from '../components/sections/LatestNews';
import { BlogCardGroup } from '../components/sections/BlogCardGroup';

const Index = () => (
	<Container>
		<Header1 />
		<NewsFeature />
		<BlogCardGroup />

		<FeaturesGroup />
		<FooterWithForm />
		<SmallFooter />
	</Container>
);

export default Index;
