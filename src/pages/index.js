import { Hero } from '../components/sections/Hero';
import { Container } from '../components/Container';

import { Header1 } from '../components/sections/Header-1';
import { SmallFooter } from '../components/sections/SmallFooter';
import { FooterWithForm } from '../components/sections/FooterWithForm';
import { HeroSplitScreen } from '../components/sections/HeroSplitScreen';
import { CallToActionWithVideo } from '../components/sections/CallToActionWithVideo';
import { GridListWithHeading } from '../components/sections/GridListWithHeading';
import { FeaturesGroup } from '../components/sections/FeaturesGroup';
import { NewsFeature } from '../components/sections/NewsFeature';

const Index = () => (
	<Container>
		<Header1 />
		<NewsFeature />
		{/* <Hero /> */}
		<HeroSplitScreen />
		<FeaturesGroup />
		<FooterWithForm />
		<SmallFooter />
	</Container>
);

export default Index;
