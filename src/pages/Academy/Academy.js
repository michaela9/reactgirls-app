import React from 'react';
import { Price, Newsletter, Program }  from '../../components';
 import  Hero  from '../../components/reusable/Hero/Hero';
 import  Student  from '../../components/reusable/Student/Student';
 import  Info  from '../../components/reusable/Info/Info';
 import  InfoCards  from '../../components/reusable/InfoCards/InfoCards';
 import  Questions  from '../../components/reusable/Questions/Questions';
 import  Process from '../../components/reusable/Process/Process';

 import { 
    acadStudentArr, 
    academyCardArr, 
    heroObjThree, 
    infoObjTwo, 
    titleObjTwo, 
    acadPriceArr,
    programArr1,
    acadQuestionsArr,
    } from './Data';

function Academy() {
    return (
        <>
            <Hero {...heroObjThree} />
            <Info {...infoObjTwo} />
            <Program data={programArr1}/>
            <InfoCards data={academyCardArr} {...titleObjTwo} />
            <Student data={acadStudentArr} {...titleObjTwo} />
            <Process />
            <Price data={acadPriceArr} {...titleObjTwo} />
            <Newsletter />
            <Questions data={acadQuestionsArr} />
        </>
    )
}

export default Academy;
