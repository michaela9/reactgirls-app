/* switch between Newsletter and LogInButton on Hero Mentoring page*/

export const heroObjTwo = {
    title: "Zúčastni se jedinečného Mentoringu s ReactGirls!",
    subtitle: "#ReactGirlsPrague",
    buttonText: "ODEBÍRAT NEWSLETTER",
    img: "/images/community/photo_48.jpg",
    form: "https://docs.google.com/forms/d/160ZcvYJN0OVk_HVyuofUIh5p4dWrSGtqFer3U38pQcw/edit#response=ACYDBNhfy5HQSHHoSiBf-z4fhtDebQNdTdb07g1DTfj4qWV2T-0y7MtrPsYiZGhbMWBUkHI",
    showNewsletter: false,
    showLogInButton: true,
};

export const infoObjOne = {
    text: "Přihlaš se do Mentoringu ReactGirls a získej kouče, který tě bude mentorovat a rozvíjet tvé technické dovednosti",
}

export const mentoringCardArr = [
    {
        icon: "/images/icons/week.svg",
        title: "Týdenní setkávání",
        text: "Pravidelné týdenní setkávání po dobu 3 měsíců, mentorování a úkoly od zkušeného kouče.",
    },
    {
        icon: "/images/icons/coach.svg",
        title: "Kouč k dispozici",
        text: "Na horké lince k dispozici další koučové, kteří ti při řešení zadaných úkolů také poradí.",
    },
    {
        icon: "/images/icons/flexible.svg",
        title: "Flexibilita",
        text: "Forma setkávání s koučem je zcela na domluvě – online i offline, dle tvých časových možností.",
    },
    {
        icon: "/images/icons/feedback.svg",
        title: "Feedback",
        text: "Závěrečné zhodnocení a feedback od kouče, možnost absolvovat celodenní Reactgirls Workshop.",
    },
    {
        icon: "/images/icons/interview.svg",
        title: "Mock interview",
        text: "Po absolvování mentoringu možnost vyzkoušet si mock interview se zkušeným HR.",
    },
    {
        icon: "/images/icons/certificate.svg",
        title: "Certifikát",
        text: "Certifikát o absolvování mentoringu a merch ve formě trička a batůžku.",
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
        heading: "Studentkám",
        text: "Studentkám, které se chtějí naučit frontendové programování a nechat se mentorovat osobnostmi z IT.",
    }
];

/* switch between Newsletter and LogInButton on Price Container of Mentoring page*/

export const mentPrice = {
    price: "2700 CZK",
    form: "https://docs.google.com/forms/d/160ZcvYJN0OVk_HVyuofUIh5p4dWrSGtqFer3U38pQcw/edit#response=ACYDBNhfy5HQSHHoSiBf-z4fhtDebQNdTdb07g1DTfj4qWV2T-0y7MtrPsYiZGhbMWBUkHI",
    showNewsletter: false,
    showLogInButton: true,
}

export const mentPriceArr = [
    {
        text: "kouč po dobu 3 měsíců",
    },
    {
        text: "pravidelná týdenní setkávání",
    },
    {
        text: "pravidelné zadávání úkolů", 
    },
    {
        text: "možnost konzultace s dalšími kouči",
    },
    {
        text: "možnost vyzkoušet si mock interview",  
    },
];

export const mentQuestionsArr = [
    {
        question: "Pro koho je kurz určen?",
        answer: "Kurz je určen pro všechny ženy, které mají základní zkušenosti s programováním a mají zájem se naučit programovat v ReactJS.",
    },
    {
        question: "Jak se můžu na kurz přihlásit?",
        answer: <>Stačí kliknout <a>ZDE </a>a vyplnit registrační formulář. Obratem ti na e-mail pošleme všechny nezbytné informace a informace o platbě.</>
    },
    {
        question: "Jak bude Akademie probíhat? ",
        answer: <>Akademie bude probíhat prezenčně, materiály budou k dispozici na <a>Slacku</a> a <a>Google Disku</a>. V harmonogramu <a>výše</a> jsou vypsány časy jednotlivých lekcí.</>
    },
    {
        question: "Co si z kurzu odnesu?",
        answer: "Odneseš si znalosti HTML, CSS, JavaScriptu, Reactu. Reálnou zkušenost s Reactem, motivaci, možnost vyzkoušet si interview se zkušeným HR, certifikát o absolvování a merch ReactGirls.",
    },
    {
        question: "Co se stane pokud bude opět karanténa?",
        answer: "V případě karantény přesuneme celou výuku do online prostředí.",
    },
    {
        question: "Stále si nejsi jistá?",
        answer: <>Pokud se chceš ujistit, že je akademie pro tebe to pravé, případně máš ještě další otázky, neváhej nás <a>kontaktovat</a>.</>
    }, 
];

export const processArrMent = [
    {
        number: 1,
        heading: "MÁM ZÁJEM",
        text: "Klikni na tlačítko MÁM ZÁJEM",
        reversed: false,
        last: false,
        first: true
    },
    {
        number: 2,
        heading: "VYPLŇ FORMULÁŘ",
        text: "Po kliknutí na tlačítko REGISTRACE se objeví formulář, ten vyplň a nezapomeň zejména na vyplnění motivaci a přiložení odkazu na GitHub či jiné úložiště tvých kódů.",
        reversed: true,
        last: false,
        first: false
    },
    {
        number: 3,
        heading: "KONTAKTUJEME TĚ",
        text: "2 týdny před spuštěním běhu tě budeme kontaktovat a sdělíme ti, zda jsme vybrali právě tebe. Pošleme ti taky všechny potřebné informace o mentoringovom programu společně s informacemi o platbě.",
        reversed: false,
        last: true,
        first: false
    }
]