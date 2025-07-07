import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import ReactDOMServer from 'react-dom/server';

import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Footer from '../../../components/footer/Footer.js';
import BlogSidebar from '../../../components/BlogSidebar/BlogSidebar';
import Scrollbar from '../../../components/scrollbar/scrollbar';
const articles = require('../../../api/articles');
const PriceTable = () => (
    <div className="price-table-wrap" style={{margin: '40px 0'}}>
        <h3 style={{marginBottom: '20px'}}>Prisexempel för Flytthjälp i Stockholm</h3>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Bostadsstorlek</th>
                    <th>Uppskattat Timpris (efter RUT)</th>
                    <th>Uppskattat Fast Pris (efter RUT)</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1 rum & kök (ca 40 kvm)</td><td>550 - 650 kr/timme</td><td>3 500 - 5 000 kr</td></tr>
                <tr><td>2 rum & kök (ca 60 kvm)</td><td>600 - 700 kr/timme</td><td>5 000 - 7 500 kr</td></tr>
                <tr><td>3 rum & kök (ca 80 kvm)</td><td>650 - 750 kr/timme</td><td>7 000 - 10 000 kr</td></tr>
            </tbody>
        </table>
        <p><small><i>Observera att detta är uppskattningar. Begär alltid en offert för ett exakt <strong>flyttfirma stockholm pris</strong>.</i></small></p>
    </div>
);

const PianoWeightTable = () => (
    <div className="price-table-wrap" style={{margin: '40px 0'}}>
        <h3 style={{marginBottom: '20px'}}>Uppskattad vikt för olika pianotyper</h3>
        <table className="table table-bordered table-striped">
             <thead><tr><th>Pianotyp</th><th>Uppskattad Vikt</th></tr></thead>
            <tbody>
                <tr><td>Upprättstående piano (mindre/studiopiano)</td><td>150 - 200 kg</td></tr>
                <tr><td>Upprättstående piano (större/äldre modell)</td><td>200 - 400 kg</td></tr>
                <tr><td>Liten flygel (baby grand)</td><td>250 - 350 kg</td></tr>
                <tr><td>Konsertflygel</td><td>400 - 600+ kg</td></tr>
            </tbody>
        </table>
        <p><small><i>Ett <strong>gammalt piano</strong> kan ha en betydligt högre <strong>vikt</strong> på grund av gjutjärnsramen.</i></small></p>
    </div>
);

const CallToAction = ({ cta }) => (
    <div className="cta-widget" style={{backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '5px', textAlign: 'center', margin: '40px 0'}}>
        <h3>{cta.title}</h3>
        <p>{cta.description}</p>
        <Link href={cta.link} className="theme-btn">{cta.button}</Link>
    </div>
);

// ===================================================================
//  مكون الصفحة الرئيسي (لا يحتاج إلى تعديل في المستقبل)
// ===================================================================

const ArticlePage = ({ articleDetails, pageContent }) => {
    if (!pageContent) {
        return <div>Sidan kunde inte laddas.</div>;
    }

    return (
        <Fragment>
            <Head>
                <title>{pageContent.metaTitle}</title>
                <meta name="description" content={pageContent.metaDescription} />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(pageContent.schemaData) }}
                />
            </Head>

            <Navbar />
            <PageTitle pageTitle={pageContent.title} pagesub={pageContent.pageSub} />
            
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-lg-8 col-12">
                            <div className="wpo-blog-content">
                                {/* عرض المحتوى الديناميكي هنا */}
                                <div dangerouslySetInnerHTML={{ __html: pageContent.contentHtml }} />
                            </div>
                        </div>
                        <BlogSidebar />
                    </div>
                </div>
            </section>
            
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};

export default ArticlePage;


// ===================================================================
//  منطق Next.js لجلب البيانات (المكان الوحيد الذي يحتاج إلى تحديث)
// ===================================================================

export async function getStaticPaths() {
    const paths = articles.map(article => ({
        params: {
            categoryId: article.categoryId.toString(),
            postId: article.postId.toString(),
            slug: article.slug,
        },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const articleDetails = articles.find(
        item => item.categoryId === params.categoryId && item.postId === params.postId && item.slug === params.slug
    ) || null;

    if (!articleDetails) {
        return { notFound: true };
    }
    // ===================================================================================
    //  قاعدة البيانات المركزية للمحتوى - أضف بيانات الصفحات الجديدة هنا
    // ===================================================================================
    const allPageContent = {
    'vad-kostar-flyttfirma-stockholm': {
        title: "Vad Kostar en Flyttfirma i Stockholm? Komplett Prisguide 2024",
        metaTitle: "Vad Kostar Flyttfirma Stockholm? Pris & Offert [2024]",
        metaDescription: "Undrar du vad en flyttfirma i Stockholm kostar? Få ett exakt pris med vår guide. Vi täcker flytthjälp priser, RUT-avdrag och hur du får en billig & bra flytthjälp.",
        pageSub: "Prisguide",
        contentHtml: `
            <p>Att anlita en <strong>flyttfirma i Stockholm</strong> är ett stort beslut, och en av de första frågorna är alltid: <strong>vad kostar det?</strong> Priset, eller <strong>flyttfirma kostnad</strong>, kan variera kraftigt. I denna guide går vi igenom allt du behöver veta om <strong>flyttfirma stockholm pris</strong> för att du ska kunna fatta ett informerat beslut och hitta den <strong>bästa flyttfirma stockholm</strong> har att erbjuda.</p>
            
            <h2>Faktorer som påverkar priset på flytthjälp</h2>
            <p>För att förstå din <strong>flyttfirma stockholm offert</strong> är det viktigt att känna till vilka faktorer som spelar in:</p>
            <ul>
                <li><strong>Bostadens storlek:</strong> Antalet rum och kvadratmeter avgör mängden bohag och tidsåtgång.</li>
                <li><strong>Avstånd:</strong> Längden på transportsträckan mellan din gamla och nya adress.</li>
                <li><strong>Våningar och hiss:</strong> Trappor utan hiss ökar arbetstiden och därmed kostnaden.</li>
                <li><strong>Tunga föremål:</strong> Specialhantering för tunga saker som pianon. Läs mer om vår <a href="/pianoflytt">pianoflytt i Stockholm</a>.</li>
                <li><strong>Packning:</strong> Om du vill ha hjälp med att packa och packa upp.</li>
            </ul>
            ${ReactDOMServer.renderToString(<PriceTable />)}
            <h2>Timpris vs. Fast Pris – Vad ska man välja?</h2>
            <p>De flesta rekommenderade flyttfirmor i Stockholm erbjuder både timpris och fast pris. Ett fast pris ger dig trygghet och full kostnadskontroll, medan timpris kan vara mer fördelaktigt för mindre flyttar där du själv hjälper till. Oavsett vilket du väljer, se till att du får ett tydligt <strong>flytthjälp pris stockholm</strong>.</p>
            ${ReactDOMServer.renderToString(<CallToAction cta={{title: "Bästa Flyttfirma Stockholm Offert", description: "Få ett skräddarsytt och konkurrenskraftigt pris för din flytt. Vår offert är alltid gratis och utan förpliktelser. Jämför oss gärna!", button: "Begär Kostnadsfri Offert Nu", link: "/kontakt"}} />)}
            <h2>Maximera ditt RUT-avdrag för flytthjälp</h2>
            <p>Glöm inte att du kan använda <strong>RUT-avdrag för flytthjälp</strong>. Detta innebär att du kan dra av 50% av arbetskostnaden. Läs vår fullständiga <a href="/17/27/rutavdrag-flyttfirma-guide">guide om RUT-avdrag för flyttfirma</a> för mer information.</p>
        `,
        schemaData: {
            "@context": "https://schema.org",
            "@graph": [{
                "@type": "Article",
                "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.flyttdirekt.se/17/28/vad-kostar-flyttfirma-stockholm/"},
                "headline": "Vad Kostar en Flyttfirma i Stockholm? Komplett Prisguide 2024",
                "description": "En detaljerad guide om kostnaden för att anlita en flyttfirma i Stockholm, inklusive prisexempel, faktorer som påverkar priset och information om RUT-avdrag.",
                "image": "https://www.flyttdirekt.se/images/service/1.jpg",
                "author": {"@type": "Organization", "name": "Flyttdirekt.se"},
                "publisher": {"@type": "Organization", "name": "Flyttdirekt.se", "logo": {"@type": "ImageObject", "url": "https://www.flyttdirekt.se/images/logo.svg"}},
                "datePublished": "2024-01-01"
            }, {
                "@type": "FAQPage",
                "mainEntity": [
                    {"@type": "Question", "name": "Vad kostar en flyttfirma i Stockholm i timmen?", "acceptedAnswer": {"@type": "Answer", "text": "Timpriset för en flyttfirma i Stockholm ligger oftast mellan 550 kr och 750 kr per timme efter RUT-avdrag, beroende på antalet personer och storleken på flyttbilen."}},
                    {"@type": "Question", "name": "Hur får man en billig flyttfirma i Stockholm?", "acceptedAnswer": {"@type": "Answer", "text": "För att få ett billigare pris, rekommenderar vi att du bokar i god tid, rensar och packar själv, samt är flexibel med flyttdatum. Jämför alltid offerter från flera rekommenderade flyttfirmor och utnyttja RUT-avdraget."}}
                ]
            }]
        }
    },
    'guide-till-pianons-vikt': {
        title: "Guide: Vad Väger ett Piano? Allt om Piano Vikt",
        metaTitle: "Vad Väger ett Piano? Komplett Guide till Piano Vikt",
        metaDescription: "Hur mycket väger ett piano eller en flygel? Vår guide ger dig svaret. Vi täcker vikten på gamla pianon, moderna instrument och varför det är viktigt för en säker pianoflytt.",
        pageSub: "Expertguide",
        contentHtml: `
            <p>Ska du <strong>flytta piano</strong> och undrar <strong>"hur mycket väger ett piano?"</strong>. Det är en av de vanligaste och viktigaste frågorna vi får. Ett pianos vikt är avgörande för att kunna planera en säker och effektiv flytt. I den här guiden går vi igenom allt du behöver veta om <strong>piano vikt</strong>.</p>
            <h2>Varför är vikten så viktig?</h2>
            <p>Att känna till pianots vikt är inte bara <strong>av vikt för pianist</strong> och ägare, utan även för flyttfirmans säkerhet och planering. Felaktiga lyft kan leda till allvarliga skador på både instrumentet, golv, väggar och inte minst personerna som bär. Vår tjänst för <a href="/pianoflytt">professionell pianoflytt</a> säkerställer att allt går rätt till.</p>
            ${ReactDOMServer.renderToString(<PianoWeightTable />)}
            <h2>Gammalt piano vikt vs. modernt piano</h2>
            <p>Ett vanligt misstag är att underskatta vikten på äldre instrument. Ett <strong>gammalt piano har ofta en betydligt högre vikt</strong> än ett modernt, trots liknande storlek. Detta beror på den tunga gjutjärnsramen (harpan) som användes förr i tiden.</p>
            <h2>Flytta flygel – En ännu större utmaning</h2>
            <p>Att <strong>flytta en flygel</strong> är ett ännu mer komplext projekt. Benen och pedalerna måste ofta demonteras, och instrumentet vänds på högkant på en särskild "pianobob" för säker transport. Vikten är ännu högre, och det kräver ett erfaret team på 3-4 personer.</p>
            ${ReactDOMServer.renderToString(<CallToAction cta={{title: "Behöver du hjälp att flytta ditt piano?", description: "Vi är experter på pianoflytt i Stockholm. Kontakta oss för en säker hantering och ett fast pris.", button: "Få Offert på Pianoflytt", link: "/pianoflytt"}} />)}
        `,
        schemaData: {
            "@context": "https://schema.org",
            "@graph": [{
                "@type": "Article",
                "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.flyttdirekt.se/17/24/guide-till-pianons-vikt/"},
                "headline": "Guide: Vad Väger ett Piano? Allt om Piano Vikt",
                "description": "En detaljerad guide om vikten på olika typer av pianon och flyglar, och varför det är avgörande för en säker flytt.",
                "image": "https://www.flyttdirekt.se/images/projects/img-4.jpg",
                "author": {"@type": "Organization", "name": "Flyttdirekt.se"},
                "publisher": {"@type": "Organization", "name": "Flyttdirekt.se", "logo": {"@type": "ImageObject", "url": "https://www.flyttdirekt.se/images/logo.svg"}},
                "datePublished": "2024-01-02"
            }, {
                "@type": "FAQPage",
                "mainEntity": [{"@type": "Question", "name": "Hur mycket väger ett vanligt piano?", "acceptedAnswer": {"@type": "Answer", "text": "Ett vanligt upprättstående piano väger generellt mellan 150 och 250 kg, men äldre modeller med gjutjärnsram kan väga upp till 400 kg."}}]
            }]
        }
    },
    'kontorsflytt-upplands-vasby': {
        title: "Kontorsflytt Upplands Väsby – Smidig Företagsflytt",
        metaTitle: "Kontorsflytt Upplands Väsby | Erfaren Flyttfirma för Företag",
        metaDescription: "Planerar ni en kontorsflytt i Upplands Väsby? Vi erbjuder en komplett och effektiv företagsflytt med minimalt driftstopp. Begär en kostnadsfri offert idag.",
        pageSub: "Företagsflytt",
        contentHtml: `
            <p>En <strong>kontorsflytt i Upplands Väsby</strong> kräver en pålitlig och erfaren partner. Flyttdirekt erbjuder en komplett lösning för <strong>företagsflytt</strong> som är skräddarsydd för att passa just era behov. Vi förstår vikten av minimalt driftstopp och ser till att er verksamhet kan vara igång igen så snabbt som möjligt i de nya lokalerna. Läs mer om vår generella tjänst för <a href="/foretagsflytt">företagsflytt</a>.</p>
            <h2>Varför välja oss för er företagsflytt i Upplands Väsby?</h2>
            <ul>
                <li><strong>Lokal Kännedom:</strong> Vi har lång erfarenhet av att arbeta i Upplands Väsby och känner till området väl.</li>
                <li><strong>Dedikerad Projektledare:</strong> Ni får en personlig kontaktperson som planerar och koordinerar hela flytten.</li>
                <li><strong>Flexibilitet:</strong> Vi kan utföra flytten under kvällar och helger för att inte störa er dagliga verksamhet.</li>
                <li><strong>Full Försäkring:</strong> Er egendom är fullt försäkrad under hela processen.</li>
            </ul>
            ${ReactDOMServer.renderToString(<CallToAction cta={{title: "Få en Offert för Er Kontorsflytt", description: "Kontakta oss idag för en kostnadsfri och detaljerad offert anpassad för er företagsflytt i Upplands Väsby.", button: "Begär Offert Nu", link: "/kontakt"}} />)}
        `,
        schemaData: {
            "@context": "https://schema.org", "@type": "Service", "serviceType": "Kontorsflytt",
            "provider": {"@type": "LocalBusiness", "name": "Flyttdirekt.se", "telephone": "+46-8-123-45-678"},
            "areaServed": {"@type": "City", "name": "Upplands Väsby"},
            "description": "Professionell kontorsflytt och företagsflytt i Upplands Väsby. Vi säkerställer en smidig övergång med minimal störning för er verksamhet."
        }
    },
    'kontorsflytt-bromma': {
        title: "Kontorsflytt Bromma – Experter på Företagsflytt",
        metaTitle: "Kontorsflytt Bromma | Säker & Effektiv Företagsflytt",
        metaDescription: "Flyttdirekt är din expert på kontorsflytt i Bromma. Vi garanterar en välorganiserad flytt med fokus på säkerhet och minimal påverkan på er verksamhet.",
        pageSub: "Företagsflytt",
        contentHtml: `
            <p>Ska ert företag <strong>flytta kontor i Bromma</strong>? Vi på Flyttdirekt har den expertis och de resurser som krävs för att göra er <strong>kontorsflytt i Bromma</strong> till en framgång. Vi hanterar allt från små startups till stora företag och ser till att varje detalj tas om hand.</p>
            <h2>En Strukturerad Process för Kontorsflytt i Bromma</h2>
            <p>Vår styrka ligger i vår noggranna planering. Tillsammans med er skapar vi en detaljerad projektplan för att säkerställa en smidig övergång. Vi erbjuder även tjänster som professionell packhjälp och <a href="/magasinering">magasinering</a> om det skulle behövas under flyttperioden.</p>
            <p>Vare sig ni flyttar inom Bromma eller till en annan del av Stockholm, är vi den <strong>flyttfirma</strong> ni kan lita på.</p>
            ${ReactDOMServer.renderToString(<CallToAction cta={{title: "Planera er flytt i Bromma?", description: "Låt oss hjälpa er. Kontakta oss för en kostnadsfri offert och konsultation.", button: "Kontakta Oss Idag", link: "/kontakt"}} />)}
        `,
        schemaData: {
            "@context": "https://schema.org", "@type": "Service", "serviceType": "Kontorsflytt",
            "provider": {"@type": "LocalBusiness", "name": "Flyttdirekt.se", "telephone": "+46-8-123-45-678"},
            "areaServed": {"@type": "City", "name": "Bromma"},
            "description": "Effektiv och säker kontorsflytt i Bromma. Vi hanterar hela processen för att ni snabbt ska kunna komma igång i era nya lokaler."
        }
    },
    'rutavdrag-flyttfirma-guide': {
        title: "Guide: Allt om RUT-avdrag för Flyttfirma",
        metaTitle: "RUT-avdrag Flyttfirma & Flytthjälp | Komplett Guide",
        metaDescription: "Hur fungerar RUT-avdrag för flytthjälp och flyttstädning? Vår guide förklarar allt du behöver veta om regler, maxbelopp och vilka tjänster som ger rätt till avdrag.",
        pageSub: "Guide & Tips",
        contentHtml: `
            <p>Att flytta kan vara kostsamt, men tack vare <strong>RUT-avdraget</strong> kan du halvera en stor del av kostnaden. Många undrar hur <strong>rutavdrag för flytthjälp</strong> fungerar i praktiken. Här reder vi ut alla frågetecken.</p>
            <h2>Vad är RUT-avdrag?</h2>
            <p>RUT-avdraget är en skattereduktion som du som privatperson kan få för vissa typer av hushållsnära tjänster. När du anlitar en <strong>flyttfirma</strong> för att utföra flyttjänster, är det arbetskostnaden du kan göra avdrag för.</p>
            <h2>Vilka flyttjänster ger rätt till RUT-avdrag?</h2>
            <ul>
                <li>Arbetskostnaden för att packa, lasta, transportera och packa upp ditt bohag (se vår sida om <a href="/flytthjalp">flytthjälp</a>).</li>
                <li>Arbetskostnaden för montering och demontering av möbler.</li>
                <li>Kostnaden för <a href="/flyttstadning">flyttstädning</a> (separat RUT-tjänst).</li>
            </ul>
            <h2>Viktigt att tänka på</h2>
            <p>Du kan få avdrag på 50% av arbetskostnaden, upp till ett maxbelopp på 75 000 kr per person och år. Material, som flyttkartonger, och kostnaden för flyttbilen ingår inte i underlaget för <strong>flytt rutavdrag</strong>. När du anlitar oss på Flyttdirekt drar vi avdraget direkt på din faktura – enkelt och smidigt!</p>
            ${ReactDOMServer.renderToString(<CallToAction cta={{title: "Frågor om RUT-avdraget?", description: "Vi hjälper dig gärna att förstå hur du kan maximera ditt avdrag. Kontakta oss idag!", button: "Kontakta Oss", link: "/kontakt"}} />)}
        `,
        schemaData: {
            "@context": "https://schema.org", "@type": "Article",
            "mainEntityOfPage": {"@type": "WebPage", "@id": "https://www.flyttdirekt.se/17/27/rutavdrag-flyttfirma-guide/"},
            "headline": "Guide: Allt om RUT-avdrag för Flyttfirma",
            "description": "En komplett guide om hur RUT-avdraget fungerar för flyttjänster.",
            "author": {"@type": "Organization", "name": "Flyttdirekt.se"},
            "publisher": {"@type": "Organization", "name": "Flyttdirekt.se", "logo": {"@type": "ImageObject", "url": "https://www.flyttdirekt.se/images/logo.svg"}},
            "datePublished": "2024-01-03"
        }
    }
    ,
    'basta-flyttfirman-stockholm-tips': {
    title: "5 Tips: Så Väljer du Bästa Flyttfirman i Stockholm",
    metaTitle: "Bästa Flyttfirman Stockholm - 5 Tips för ett Tryggt Val",
    metaDescription: "Hur hittar man den bästa flyttfirman i Stockholm? Vår guide ger dig 5 konkreta tips för att välja en pålitlig, rekommenderad och prisvärd flyttfirma.",
    pageSub: "Guide",
    schemaData: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "5 Tips för att Välja den Bästa Flyttfirman i Stockholm",
        "author": { "@type": "Organization", "name": "Flyttdirekt.se" },
        "publisher": { "@type": "Organization", "name": "Flyttdirekt.se", "logo": { "@type": "ImageObject", "url": "https://www.flyttdirekt.se/images/logo.svg" }},
        "datePublished": "2024-01-04"
    }
},
'flyttstad-checklista-guide': {
    title: "Den Ultimata Checklistan för Flyttstädning",
    metaTitle: "Checklista Flyttstädning - Komplett Guide | Flyttdirekt.se",
    metaDescription: "Vår kompletta checklista för flyttstädning garanterar att du inte missar en enda detalj. Följ vår guide för en skinande ren och godkänd städning.",
    pageSub: "Checklista & Guide",
    schemaData: {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Den Ultimata Checklistan för Flyttstädning",
        "author": { "@type": "Organization", "name": "Flyttdirekt.se" },
        "publisher": { "@type": "Organization", "name": "Flyttdirekt.se", "logo": { "@type": "ImageObject", "url": "https://www.flyttdirekt.se/images/logo.svg" }},
        "datePublished": "2024-01-05"
    }
},
};
    
 

    const pageContent = allPageContent[params.slug] || {};

    return {
        props: {
            articleDetails,
            pageContent,
        },
    };
}