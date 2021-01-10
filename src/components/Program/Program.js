import React from 'react';

import {
    ProgramTable,
    ProgramTableHead,
    ProgramDataHead,
    ProgramTableRow,
    ProgramTableRowH,
    ProgramTableBody,
    ProgramData,
    ProgramDataTopic,
    ProgramWrapper
} from './Program.elements';

import { Container, Wrapper, TitleCenter } from '../reusable/styled';

function Program({data}) {
    return (
        <>
            <Container >
                <Wrapper>
                    <ProgramWrapper>
                    <TitleCenter>Program Akademie</TitleCenter>
                    <ProgramTable>
                        <ProgramTableHead>
                            <ProgramTableRowH>
                                <ProgramDataHead >Datum</ProgramDataHead>
                                <ProgramDataHead >Téma</ProgramDataHead>
                                <ProgramDataHead >Čas</ProgramDataHead>
                                <ProgramDataHead >Místo</ProgramDataHead>
                            </ProgramTableRowH>
                        </ProgramTableHead>
                        <ProgramTableBody>
                            {data.map((item) => {
                                return(
                                    <ProgramTableRow key={item.topic} data={data} 
                                    border={item.border}>
                                        <ProgramData>{item.date}</ProgramData>
                                        <ProgramDataTopic>{item.topic}</ProgramDataTopic>
                                        <ProgramData>{item.time}</ProgramData>
                                        <ProgramData>{item.place} </ProgramData>
                                    </ProgramTableRow>
                                    )
                                })
                            }
                        </ProgramTableBody>
                    </ProgramTable>
                    </ProgramWrapper>
                </Wrapper>
            </Container>
        </>
    )
}

export default Program
