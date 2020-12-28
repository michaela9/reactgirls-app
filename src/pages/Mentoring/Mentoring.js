import React from 'react';
 import  Hero  from '../../components/reusable/Hero/Hero';
 import  Student  from '../../components/reusable/Student/Student';
 import  Info  from '../../components/reusable/Info/Info';
 import  InfoCards  from '../../components/reusable/InfoCards/InfoCards';
 import  Questions  from '../../components/reusable/Questions/Questions';
 import  Process from '../../components/reusable/Process/Process';

 
 import { 
     mentStudentArr, 
     heroObjTwo, 
     infoObjOne, 
     mentoringCardArr, 
     titleObjOne, 

     mentQuestionsArr,
     processArrMent
} from './Data';

function Mentoring() {
    return (
        <div>
            <Hero {...heroObjTwo} />
            <Info {...infoObjOne}/>
            <InfoCards data={mentoringCardArr} {...titleObjOne} />
            <Student data={mentStudentArr} {...titleObjOne} />
            <Process data={processArrMent} />
            <Questions data={mentQuestionsArr}/>
        </div>
    )
}

export default Mentoring;
