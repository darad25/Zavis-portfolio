import { Hero } from '../components/sections/Hero';
import { FeaturedWork } from '../components/sections/FeaturedWork';
import { IllustrationFeatured } from '../components/sections/IllustrationFeatured';
import { SkillsStrip } from '../components/sections/SkillsStrip';

export default function Home() {
    return (
        <>
            <Hero />
            <SkillsStrip />
            <FeaturedWork />
            <IllustrationFeatured />
            {/* Testimonials or Social Proof can be added here */}
        </>
    );
}
