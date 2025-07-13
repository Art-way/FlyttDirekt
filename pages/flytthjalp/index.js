// File: pages/flytthjalp/index.js
// المحتوى: صفحة خدمة "المساعدة في النقل" مع نصوص احترافية ومحسنة لمحركات البحث

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';

// استخدام صور مناسبة من القالب
import serviceImg from '/public/images/service/1.jpg';
import serviceImg2 from '/public/images/service-single/2.jpg';
import serviceImg3 from '/public/images/service-single/3.jpg';

const FlytthjalpPage = () => {
    // Schema Markup لخدمة Flytthjälp
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Flytthjälp",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Flyttdirekt.se",
            "image": "https://www.flyttdirekt.se/images/logo.svg",
            "telephone": "+46-8-123-45-678",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Exempelgatan 1",
                "addressLocality": "Stockholm",
                "postalCode": "12345",
                "addressCountry": "SE"
            },
            "priceRange": "Kontakta för offert"
        },
        "areaServed": {
            "@type": "City",
            "name": "Stockholm"
        },
        "description": "Professionell och försäkrad flytthjälp i Stockholm. Vi erbjuder kompletta flyttlösningar för privatpersoner och företag, inklusive packning, transport och montering."
    };

    // Schema Markup للأسئلة الشائعة (FAQ)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Vad ingår i er flytthjälp?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Vår standardtjänst för flytthjälp inkluderar erfaren personal, transport med fullt utrustade flyttbilar, bärhjälp för tunga möbler, och full försäkring för dina ägodelar under hela processen. Vi kan även erbjuda tilläggstjänster som packning och montering."
            }
        }, {
            "@type": "Question",
            "name": "Hur beräknas priset för flytthjälp?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Priset baseras på flera faktorer, såsom bostadens storlek, mängden bohag, avståndet mellan adresserna och vilka tilläggstjänster du väljer. Vi erbjuder alltid en kostnadsfri offert med ett tydligt och transparent pris. Du har även rätt till RUT-avdrag, vilket vi hjälper dig med."
            }
        }]
    };

    return (
        <Fragment>
            <Head>
                <title>Flytthjälp Stockholm - Pris & Offert från en säker Flyttfirma</title>
                <meta name="description" content="Behöver du flytthjälp i Stockholm? Få ett fast pris från en rekommenderad flyttfirma. Vi erbjuder säker bohagsflytt, företagsflytt & pianoflytt med RUT-avdrag." />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Professionell Flytthjälp i Stockholm'} pagesub={'Våra Tjänster'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Flyttgubbar som bär en soffa under en flytthjälp i Stockholm" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Flytthjälp för en trygg och effektiv flytt</h2>
                                        <p>
                                            Att flytta kan vara en av livets mest stressande händelser. Med <strong>Flyttdirekt</strong> får du professionell <strong>flytthjälp i Stockholm</strong> som gör processen enkel och bekymmersfri. Vi är en erfaren <strong>flyttfirma i Stockholm</strong> som hanterar allt från mindre lägenheter till stora villor och kontor. Vårt mål är att erbjuda en säker och effektiv bohagsflytt, oavsett vart du ska flytta.
                                        </p>
                                        <p>
                                            Vi förstår att varje flytt är unik. Därför skräddarsyr vi våra tjänster för att passa just dina behov. Oavsett om du behöver hjälp med hela processen – från första kartongen till sista tavlan på väggen – eller bara de tunga lyften, står vårt team redo att assistera.
                                        </p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceImg2} alt="Noggrann packning av flyttkartonger" /></li>
                                                <li><Image src={serviceImg3} alt="Transport med modern och säker flyttbil" /></li>
                                            </ul>
                                        </div>
                                        <h2>Vad ingår i vår flytthjälp?</h2>
                                        <p>När du anlitar oss för din <strong>flytt i Stockholm</strong> kan du förvänta dig en komplett service. Vår standardtjänst inkluderar:</p>
                                        <ul>
                                            <li><strong>Erfaren personal:</strong> Vårt team är utbildat i säker hantering, tunga lyft och effektiv packteknik.</li>
                                            <li><strong>Transport:</strong> Vi har moderna och fullt utrustade flyttbilar i olika storlekar.</li>
                                            <li><strong>Försäkring:</strong> Dina ägodelar är fullt försäkrade under hela flytten via Trygg-Hansa.</li>
                                            <li><strong>Tunga lyft:</strong> Vi hanterar tunga möbler som soffor, sängar, kassaskåp och pianon.</li>
                                            <li><strong>Montering:</strong> Vi kan hjälpa till med demontering och montering av möbler för att underlätta för dig.</li>
                                        </ul>
                                        <h2>Pris och RUT-avdrag för flytthjälp</h2>
                                        <p>
                                            Vad kostar en flyttfirma? Priset för flytthjälp beror på flera faktorer. Vi erbjuder transparent prissättning och ett konkurrenskraftigt <strong>flytthjälp pris i Stockholm</strong>. Dessutom har du möjlighet att använda <strong>RUT-avdrag för flytthjälp</strong>, vilket kan halvera arbetskostnaden. Vi hjälper dig med all administration kring avdraget.
                                        </p>
                                        <p>
                                            För en exakt prisbild, begär en kostnadsfri <strong>flyttfirma stockholm offert</strong> från oss idag genom att fylla i formuläret här på sidan.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Ersätt den gamla sidomenyn med den nya komponenten */}
                        <ServiceSidebar />

                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default FlytthjalpPage;
