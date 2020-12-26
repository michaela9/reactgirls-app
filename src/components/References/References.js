import React from 'react';
import { TitleCenter,Container } from '../reusable/styled';
import { 
    SpeechCont,
    Speech,
    SpeechIcon,
    SpeechText,
    ReferenceContainer,
    SpeechName,
} from './References.elements';

function References () {
    return (
        <>
            <Container lightBlue>
                    <ReferenceContainer>
                        <TitleCenter>Co o nás říkají naši studenti?</TitleCenter>
                        <SpeechCont>               
                                <Speech>
                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                    <SpeechText>“ReactGirls mi pomohli v mé programátorské cestě. Účast na Akademii byla pro mě velmi užitečná. Rozhodně doporučuji!”</SpeechText>   
                                    <SpeechName>Helenka Vondráčková</SpeechName>
                                </Speech>

                                <Speech>
                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                    <SpeechText>“ReactGirls mi pomohli v mé programátorské cestě. Účast na Akademii byla pro mě velmi užitečná. Rozhodně doporučuji!”</SpeechText>   
                                    <SpeechName>Helenka Vondráčková</SpeechName>
                                </Speech>

                                <Speech>
                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                    <SpeechText>“ReactGirls mi pomohli v mé programátorské cestě. Účast na Akademii byla pro mě velmi užitečná. Rozhodně doporučuji!”</SpeechText>   
                                    <SpeechName>Helenka Vondráčková</SpeechName>
                                </Speech>
                    </SpeechCont>
                </ReferenceContainer>
        </Container>
    </>
    )
}
export default References;
