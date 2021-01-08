import React from 'react';
import { TitleCenter,Container } from '../reusable/styled';
import { 
    SpeechCont,
    Speech,
    SpeechIcon,
    SpeechText,
    ReferenceContainer,
    SpeechName,
    SpeechImg,
    SpeechImgContainer
} from './References.elements';

function References () {
    return (
        <>
            <Container lightBlue>
                    <ReferenceContainer>
                        <TitleCenter>Co o nás říkají naši studenti?</TitleCenter>
                        <SpeechCont>        
                                <Speech>
                                    <SpeechImgContainer>
                                        <SpeechImg src='/images/references/michaela.jpg'/>
                                    </SpeechImgContainer>
                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                    <SpeechText>ReactGirls mi pomohli v mé nové programátorské cestě. Mentoring vnímám jako velice intenzivní a užitečný způsob vzdělávání. 
                                    </SpeechText>
                                    <SpeechText> 
                                        Na reálném projektu jsem si vše vyzkoušela od začátku až do konce. Každý týden jsem se naučila něco nového. Můj mentor Braňo mi byl k dispozici i mimo naše pravidelná týdenní setkání. On i holky z ReactGirls byli opravdu skvělí. 
                                    </SpeechText>
                                    <SpeechText> 
                                        Mentoring mi ukázal cestu, která se při samostudiu těžko hledá. V rámci mého mentoringu vznikl web, který si právě prohlížíte
                                    </SpeechText>   
                                    <SpeechName>Michaela Rudolfová</SpeechName>
                                </Speech>
                                <Speech>
                                    <SpeechImgContainer>
                                        <SpeechImg src='/images/references/svetlana.jpg'/>
                                    </SpeechImgContainer>
                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                    <SpeechText>
                                        V ReactGirls mi ukázali, že vývoj v React.js je zábavný, nie tak zložitý, ako som sa bála a môžu vzniknúť pekné a dynamické aplikácie.
                                    </SpeechText>
                                    <SpeechText>     
                                        Vďaka prvým krokom v JavaScripte a dobre spracovanému prechodu na tvorbu aplikácie v React.js som jasne videla rozdiely, vedela som si naštudovať ďalšie materiály a odraziť sa v samoštúdiu. 
                                    </SpeechText>
                                    <SpeechText> 
                                        Všetky lekcie na seba dobre nadväzovali, preto aj začiatočník pochopí prepojenie medzi HTML, CSS a JavaScriptom a utvorí si celkový obraz o tom, ako vyzerá reálna aplikácia.</SpeechText>   
                                    <SpeechName>Svetlana Margetová</SpeechName>
                                </Speech>
                                <Speech>
                                <SpeechImgContainer>
                                    <SpeechImg src='/images/references/laura.jpg'/>
                                </SpeechImgContainer>
                                    <SpeechIcon src='/images/icons/quote.svg'/>
                                    <SpeechText>
                                    Za jeden měsíc mě lektoři z ReactGirsl Academy naučili všechny základni jazyky programování. 
                                    </SpeechText>
                                    <SpeechText>     
                                    Díky přátelskému přístupu jsem se jako začátečnice nebála zeptat na otázky nebo o dovysvětlení. Všechny přednášky jsou praktické, takže už po pár uvodních lekcí jsem si byla schopna vytvořit malou hru! 
                                    </SpeechText>
                                    <SpeechText> 
                                    Kreativní a talentovaní programatoři z ReactGirls Acadamy mi ukázali, že programovaní je zábava. Doporučila bych Akademii všem, a hlavně holkám, které chtějí nahlédout do programovaní a stát se součástí IT komunity.
                                    </SpeechText>   
                                    <SpeechName>Laura Blažková</SpeechName>
                                </Speech>
                    </SpeechCont>
                </ReferenceContainer>
        </Container>
    </>
    )
}
export default References;
