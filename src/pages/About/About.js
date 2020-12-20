import React from 'react';
import AboutInfo from '../../components/reusable/AboutInfo/AboutInfo';
import { aboutInfoObj1,aboutInfoObj2, aboutProductArr } from './Data';
import AboutHero from '../../components/AboutHero/AboutHero';
import AboutProduct from '../../components/AboutProduct/AboutProduct';
import NewsletterSection from '../../components/reusable/Newsletter/NewsletterSection';
import Gallery from '../../components/Gallery/Gallery';
import  Thanks  from '../../components/Thanks/Thanks';

function About() {
    return (
        <>
            <AboutHero {...aboutInfoObj1} />
            <AboutProduct data={aboutProductArr} />
            <AboutInfo {...aboutInfoObj2} />
            <NewsletterSection />
            <Gallery />
            <Thanks />
        </>
    )
}

export default About;
