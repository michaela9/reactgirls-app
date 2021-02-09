import { LinkA, LinkScroll } from '../../components/reusable/styled';


/* switch between Newsletter and LogInButton on Hero Mentoring page*/
export const heroObjTwo = {
    title: "Zúčastni se jedinečného Mentoringu s ReactGirls!",
    subtitle: "#ReactGirlsPrague",
    buttonText: "ODEBÍRAT NEWSLETTER",
    img: "/images/gallery/mentoring",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdLTtWVz3S3cLZtxeTbmlkL9VtXYv9YGYlBH1XxrlXVv-60Qw/viewform",
    showNewsletter: false,
    showLogInButton: true,
};

export const infoObjOne = {
    text: "Přihlaš se do Mentoringu ReactGirls a získej kouče, který tě bude mentorovat a rozvíjet tvé technické dovednosti.",
    content: "mentoring",
}

export const mentoringCardArr = [
    {
        icon: "/images/icons/week.svg",
        title: "Týdenní setkávání",
        text: "Pravidelná týdenní setkávání po dobu 3 měsíců, mentorování a tvorba projektu, code review.",
    },
    {
        icon: "/images/icons/coach.svg",
        title: "Koučové k dispozici",
        text: "Na horké lince k dispozici další koučové, kteří ti poradí.",
    },
    {
        icon: "/images/icons/flexible.svg",
        title: "Flexibilita",
        text: "Forma setkávání online i offline, dle tvých časových možností.",
    },
    {
        icon: "/images/icons/feedback.svg",
        title: "Feedback",
        text: "Závěrečné zhodnocení a feedback od mentora.",
    },
    {
        icon: "/images/icons/interview.svg",
        title: "Mock interview",
        text: "Po absolvování mentoringu možnost vyzkoušet si mock interview se zkušeným HR.",
    },
    {
        icon: "/images/icons/certificate.svg",
        title: "Certifikát",
        text: "Certifikát o absolvování mentoringu a ReactGirls merch ve formě trička a batůžku.",
    },
];

export const titleObjOne = {
    mainStudentTitle: "Pro koho je Mentoring určen?",
    mainCardsTitle: "Co Mentoring nabízí?",
    mainPriceTitle: "Co vše je v ceně Mentoringu?"
};

export const mentStudentArr = [
    {
        icon: "/images/icons/website.svg",
        heading: "Zájemkyním",
        text: "Zájemkyním o programování, které se chtějí naučit tvorbu webových stránek v populární JavaScrtipové knihovně React.",
    },
    {
        icon: "/images/icons/victory.svg",
        heading: "Začátečnicím",
        text: "Začatečnicím, které již mají zkušenosti s programováním a chtěly by je posunout na další úroveň s Reactem.",
    },
    {
        icon: "/images/icons/woman3.svg",
        heading: "Ženám",
        text: "Ženám, které se chtějí naučit frontendové programování a být mentorované osobnostmi z IT.",
    }
];

/* switch between Newsletter and LogInButton on Price Container of Mentoring page*/

export const mentPrice = {
    price: "2700 CZK",
    form: "https://docs.google.com/forms/d/e/1FAIpQLSdLTtWVz3S3cLZtxeTbmlkL9VtXYv9YGYlBH1XxrlXVv-60Qw/viewform",
    showNewsletter: false,
    showLogInButton: true,
}

export const mentPriceArr = [
    {
        text: "mentor po dobu 3 měsíců",
    },
    {
        text: "pravidelná týdenní setkávání",
    },
    {
        text: "plánování agendy", 
    },
    {
        text: "code review", 
    },
    {
        text: "online konzultace s dalšími kouči",
    },
    {
        text: "možnost prezentace vytvořeného projektu",  
    },
    {
        text: "mock interview",  
    },
];

export const mentQuestionsArr = [
    {
        question: "Pro koho je mentoring určen?",
        answer: "Začatečnicím, které již mají zkušenosti s programováním*, znají základy HTML a CSS, prípadne JS* a chtěly by je posunout na další úroveň s Reactem.",
    },
    {
        question: "Jak se můžu na mentoring přihlásit?",
        answer: <>Stačí kliknout <LinkA href="https://docs.google.com/forms/d/e/1FAIpQLSdLTtWVz3S3cLZtxeTbmlkL9VtXYv9YGYlBH1XxrlXVv-60Qw/viewform">ZDE </LinkA>a vyplnit registrační formulář. Obratem ti na e-mail pošleme všechny nezbytné informace a informace o platbě.</>
    },
    {
        question: "Co si z mentoringu odnesu?",
        answer: "Odneseš si znalosti HTML, CSS, JavaScriptu, Reactu. Reálnou zkušenost s Reactem, motivaci, možnost vyzkoušet si interview se zkušeným HR, certifikát o absolvování a merch ReactGirls.",
    },
    {
        question: "Stále si nejsi jistá?",
        answer: <>Pokud se chceš ujistit, že je mentoring pro tebe to pravé, případně máš ještě další otázky, neváhej nás <LinkA href="/contact">kontaktovat</LinkA>.</>
    }, 
];

export const processArrMent = [
    {
        number: 1,
        heading: "MÁM ZÁJEM",
        text: "Klikni na tlačítko registrace",
        reversed: false,
        last: false,
        first: true
    },
    {
        number: 2,
        heading: "VYPLŇ FORMULÁŘ",
        text: "Po kliknutí na tlačítko REGISTRACE se objeví formulář, ten vyplň a nezapomeň zejména na vyplnění motivace a přiložení odkazu na GitHub či jiné úložiště tvých kódů.",
        reversed: true,
        last: false,
        first: false
    },
    {
        number: 3,
        heading: "KONTAKTUJEME TĚ",
        text: "Před spuštěním běhu tě budeme kontaktovat a sdělíme ti, zda jsme vybrali právě tebe. Pošleme ti taky všechny potřebné informace o mentoringovom programu společně s informacemi o platbě.",
        reversed: false,
        last: true,
        first: false
    }
]