import React from 'react';
import { Price,Newsletter }  from '../../components';
 import  Hero  from '../../components/reusable/Hero/Hero';
 import  Student  from '../../components/reusable/Student/Student';
 import  Info  from '../../components/reusable/Info/Info';
 import  InfoCards  from '../../components/reusable/InfoCards/InfoCards';
 import  Questions  from '../../components/reusable/Questions/Questions';
 
 import { 
     mentStudentArr, 
     heroObjTwo, 
     infoObjOne, 
     mentoringCardArr, 
     titleObjOne, 
     mentPriceArr,
     mentQuestionsArr, 
} from './Data';

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
            <Questions data={mentQuestionsArr}/>
        </div>
    )
}

export default Mentoring;
