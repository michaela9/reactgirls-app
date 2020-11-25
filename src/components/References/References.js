import React from 'react';
import { TitleCenter,Container, WrapperColumn } from '../reusable/styled';
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
    Item1,
    ItemCont
} from './References.elements';

import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


function References () {
    return (
        <>
            <Container lightblue>
                    <WrapperColumn>
                        <TitleCenter>Co o nás říkají naši studenti?</TitleCenter>
                        <ReferenceContent>
                      
                            <Carousel breakPoints={breakPoints}>
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

                        </Carousel>
                       
                    </ReferenceContent>
                </WrapperColumn>
        </Container>
    </>
    )
}
export default References;
