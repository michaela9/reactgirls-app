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
 import { mentStudentArr, heroObjTwo, infoObjOne, mentoringCardArr, titleObjOne, mentPriceArr } from './Data';

function Mentoring() {
    let arr = mentoringCardArr;
    return (
        <div>
            <Hero {...heroObjTwo} />
            <Info {...infoObjOne}/>
            <InfoCards data={mentoringCardArr} {...titleObjOne} />
            <Student data={mentStudentArr} {...titleObjOne} />
            <Price data={mentPriceArr} {...titleObjOne} />
            <Newsletter />
            <Questions />
        </div>
    )
}

export default Mentoring;
