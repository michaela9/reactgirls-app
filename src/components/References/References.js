import React from 'react';
import { TitleCenter,ContainerColor, Wrapper } from '../reusable/styled';
import { 
    ReferenceArrow,
    SpeechContent,
    SpeechImg,
    Speech,
    SpeechIcon,
    SpeechText,
    ReferenceContainer,
    ReferenceContent,
    SpeechName,
} from './References.elements';

function References () {
                    return (
                        <>
                        <ContainerColor>
                            <Wrapper>
                                <ReferenceContainer>
                                    <TitleCenter>Co o nás říkají naši studenti?</TitleCenter>
                                    <ReferenceContent>
                                        <ReferenceArrow src='/images/icons/left-arrow.svg' />
                                            <SpeechContent>
                                                <SpeechImg src='/images/references/helena.jpg'/>
                                                <Speech>
                                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                                    <SpeechText>“ReactGirls mi pomohli v mé programátorské cestě. Účast na Akademii byla pro mě velmi užitečná. Rozhodně doporučuji!”</SpeechText>   
                                                    <SpeechName>Helenka Vondráčková</SpeechName>
                                                </Speech>
                                            </SpeechContent>
                                            <SpeechContent>
                                                <SpeechImg src='/images/references/helena.jpg'/>
                                                <Speech>
                                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                                    <SpeechText>“ReactGirls mi pomohli v mé programátorské cestě. Účast na Akademii byla pro mě velmi užitečná. Rozhodně doporučuji!”</SpeechText>   
                                                    <SpeechName>Helenka Vondráčková</SpeechName>
                                                </Speech>
                                            </SpeechContent>
                                        <ReferenceArrow src='/images/icons/right-arrow.svg' />
                                    </ReferenceContent>
                                </ReferenceContainer>
                            </Wrapper>
                        </ContainerColor>
                        </>
    )
}
export default References;
