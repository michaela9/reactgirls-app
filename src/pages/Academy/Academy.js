import React from 'react';
import { 
    Price,
    Newsletter,
    Questions
 }  from '../../components';
 import  Hero  from '../../components/reusable/Hero/Hero';
 import  Student  from '../../components/reusable/Student/Student';
 import  Info  from '../../components/reusable/Info/Info';
 import  InfoCards  from '../../components/reusable/InfoCards/InfoCards';
 import { acadStudentArr, academyCardArr, heroObjThree, infoObjTwo, titleObjTwo } from './Data';

function Academy() {
    return (
        <div>
            <Hero {...heroObjThree} />
            <Info {...infoObjTwo} />
            <InfoCards data={academyCardArr} {...titleObjTwo} />
            <Student data={acadStudentArr} {...titleObjTwo} />
            <Price />
            <Newsletter />
            <Questions />
        </div>
    )
}

export default Academy;
