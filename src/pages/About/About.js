import React from 'react';
import AboutInfo from '../../components/reusable/AboutInfo/AboutInfo';
import { aboutInfoObj1,aboutInfoObj2, aboutInfoObj3, aboutInfoObj4, aboutInfoObj5, aboutProductArr } from './Data';
import AboutHero from '../../components/AboutHero/AboutHero';
import AboutProduct from '../../components/AboutProduct/AboutProduct';
import Newsletter from '../../components/Newsletter/Newsletter';
import Gallery from '../../components/Gallery/Gallery';
import  Thanks  from '../../components/Thanks/Thanks';


function About() {
    return (
        <>
            <AboutHero {...aboutInfoObj1} />
            <AboutProduct data={aboutProductArr} />
            <AboutInfo {...aboutInfoObj2} />
            <AboutInfo {...aboutInfoObj3} />
            <AboutInfo {...aboutInfoObj4} />
            <Newsletter />
            <Gallery />
            <Thanks />
        </>
    )
}

export default About;
