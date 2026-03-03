import { Hero } from '../components/sections/Hero';
import { FeaturedWork } from '../components/sections/FeaturedWork';
import { SkillsStrip } from '../components/sections/SkillsStrip';

export default function Home() {
    return (
        <>
            <Hero />
            <SkillsStrip />
            <FeaturedWork />
            {/* Testimonials or Social Proof can be added here */}
        </>
    );
}
