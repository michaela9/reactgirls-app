import React from 'react';
import { 
    Price,
    Newsletter,
    Questions,
    Program
 }  from '../../components';
 import  Hero  from '../../components/reusable/Hero/Hero';
 import  Student  from '../../components/reusable/Student/Student';
 import  Info  from '../../components/reusable/Info/Info';
 import  InfoCards  from '../../components/reusable/InfoCards/InfoCards';
 import { 
    acadStudentArr, 
    academyCardArr, 
    heroObjThree, 
    infoObjTwo, 
    titleObjTwo, 
    acadPriceArr,
    programArr1
    } from './Data';

function Academy() {
    return (
        <div>
            <Hero {...heroObjThree} />
            <Info {...infoObjTwo} />
            <Program data={programArr1}/>
            <InfoCards data={academyCardArr} {...titleObjTwo} />
            <Student data={acadStudentArr} {...titleObjTwo} />
            <Price data={acadPriceArr} {...titleObjTwo} />
            <Newsletter />
            <Questions />
        </div>
    )
}

export default Academy;
