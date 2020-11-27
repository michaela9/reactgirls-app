import React from 'react';
import { WrapperColumn, Container, TitleCenter } from '../styled';

import StudentCont from './StudentCont';

function Student({
    data,
    mainStudentTitle
}) {
    return (
        <Container>
        <WrapperColumn>   
            <TitleCenter>{mainStudentTitle}</TitleCenter>
            <StudentCont data={data} />
        </WrapperColumn> 
    </Container>
    )
}

export default Student;
