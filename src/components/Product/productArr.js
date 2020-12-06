import { findAllByDisplayValue } from "@testing-library/react";

const productArr = [ 
    {
        title: "Komunita",
        info: "ReactGirls je komunita lidí, které spojuje láska k technologiím a programování. Komunita nejen pro ženy, které se chtějí stát programátorkami za vedení profesionálních lektorů a programátorů. Zapojte se do naší komunity na Slacku a na sociálních sítích.",
        hidebutton: false,
        buttontext: "Zjistit více",
        img: "images/community/photo_19.jpg",
        imgstart: false,
        lightblue: false,
        link: '/about'
    },
    {
        title: "Workshopy",
        info: "Pořádáme pravidelné workshopy programování v Reactu. Naučíme vás základy programování v HTML, CSS, JavaScriptu a Reactu. Další workshop momentálně připravujeme, aby vám neuniklo jeho otevření sledujte Newsletter",
        hidebutton: true,
        img: "images/community/photo_51.jpg",
        imgstart: true,
        lightblue: true
    },
    {
        title: "Webináře",
        info: "Pořádáme webináře související s programováním v Reactu, soft témata o práci a rekvalifikaci v IT. Některé z webinářů je možné shlédnout na našem Youtube. O dalších se dozvíte v Newsletteru a na sociálních sítích.",
        hidebutton: true,
        img: "images/community/photo_12.jpg",
        imgstart: false,
        lightblue: false
    },
    {
        title: "Mentoring",
        info: "Spustili jsme pro vás mentoringový program pro dosažení vysněných cílů. Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream.",
        hidebutton: false,
        buttontext: "Zjistit více",
        img: "images/community/photo_8.jpg",
        imgstart: true,
        lightblue: true,
        link: '/mentoring'
    },
    {
        title: "Akademie",
        info: "Připravujeme pro vás akademii, kde se budeme intenzivně věnovat frontednovému programování HTML, CSS, JavaScript a React.  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream.",
        hidebutton: false,
        buttontext: "Zjistit více",
        img: "images/community/photo_5.jpg",
        imgstart: false,
        lightblue: false,
        link: '/academy'
    },
    {
        title: "Meetupy",
        info: "Pořádáme pro vás pravidlené Reactgirls meetupy s názvem Reactgirls Beer se zajímavými osobnostmi.  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream.  Caramels bonbon sweet roll ice cream.",
        hidebutton: true,
        img: "images/community/photo_14.jpg",
        imgstart: true,
        lightblue: true
    }
]

export default productArr;


