import { findAllByDisplayValue } from "@testing-library/react";

const productArr = [ 
    {
        title: "Komunita",
        info: "ReactGirls je komunita lidí, které spojuje láska k technologiím a programování. Pomáháme ženám, které se chtějí stát programátorkami za vedení profesionálních lektorů a mentorů. Zapojte se do naší komunity na Slacku a na sociálních sítích.",
        hidebutton: false,
        buttontext: "Zjistit více",
        img: "images/community/photo_19.jpg",
        imgstart: false,
        lightblue: false,
        link: '/about',
        id: "community"
    },
    {
        title: "Workshopy",
        info: "Pořádáme pravidelné workshopy plné programování a přednášek na nejen technické témata. Naučíme vás základy HTML, CSS, Javascriptu a Reactu. Další workshop momentálně připravujeme, pro bližší informace sledujte naše sociální sítě nebo odebírejte náš newsletter.",
        hidebutton: true,
        img: "images/community/photo_51.jpg",
        imgstart: true,
        lightblue: true,
        id: "workshop"
    },
    {
        title: "Webináře",
        info: "Pořádáme webináře související s programováním v Reactu, soft témata o práci a rekvalifikaci v IT. Některé z webinářů je možné shlédnout na našem Youtube. O dalších se dozvíte v Newsletteru a na sociálních sítích.",
        hidebutton: true,
        img: "images/community/photo_12.jpg",
        imgstart: false,
        lightblue: false,
        id: "webinar"
    },
    {
        title: "Mentoring",
        info: "Vyzkoušejte si náš jedinečný mentoringový program. Jedná se o intenzivní několikatýdenní školení, ve kterém má mentee k dispozici svého individuálního mentora. Ten ji vede k tvorbě komplexního webového projektu od základů a předává ji užitečné know-how. Na konci je mentee připravena sama zvládnout tvorbu dalších projektů v Reactu.",
        hidebutton: false,
        buttontext: "Zjistit více",
        img: "images/community/photo_8.jpg",
        imgstart: true,
        lightblue: true,
        link: '/mentoring',
        id: "mentoring"
    },
    {
        title: "Akademie",
        info: "ReactGirls Akademie je program určený pro začátečnice, které se chtějí seznámit s komplexním frontendovým programováním. Od kódování webové aplikace v HTML a CSS, přes seznámení se s principy programování v JavaScriptu, až po první krůčky s Reactem.",
        hidebutton: false,
        buttontext: "Zjistit více",
        img: "images/community/photo_5.jpg",
        imgstart: false,
        lightblue: false,
        link: '/academy',
        id: "academy"
    },
    {
        title: "Meetupy",
        info: "Pořádáme pro Vás pravidelné ReactGirls meetupy pod názvem ReactGirls Beer. Na meetupech se kromě seznámení se s komunitou můžete také těšit na zajímavé přednášky jak ze světa technologií, tak i na mnoho dalších aktuálních témat.",
        hidebutton: true,
        img: "images/community/photo_14.jpg",
        imgstart: true,
        lightblue: true,
        id: "meetup"
    }
]

export default productArr;


