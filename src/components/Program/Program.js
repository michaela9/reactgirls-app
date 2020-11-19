import React from 'react';

import {
    ProgramTable,
    ProgramTableHead,
    ProgramDataHead,
    ProgramTableRow,
    ProgramTableRowH,
    ProgramTableBody,
    ProgramData,
    ProgramDataTopic
} from './Program.elements';

import { Container, Wrapper, WrapperColumn, TitleCenter } from '../reusable/styled';

function Program({data}) {
    return (
        <>
            <Container lightblue>
                <WrapperColumn>
                    <TitleCenter>Program Akademie</TitleCenter>
                </WrapperColumn>
            </ Container>
            <Container>
                <Wrapper>
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
                                    <ProgramTableRow data={data}>
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
                </Wrapper>
            </Container>
        </>
    )
}

export default Program
