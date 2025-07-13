import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar'; // Importera den nya komponenten

// استخدام صور موجودة من القالب
import serviceImg from '/public/images/service/5.jpg';
import serviceImg2 from '/public/images/projects/img-4.jpg';
import serviceImg3 from '/public/images/service/10.jpg';

const PianoflyttPage = () => {
    // Schema Markup لخدمة Pianoflytt
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Pianoflytt",
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
            }
        },
        "areaServed": {
            "@type": "City",
            "name": "Stockholm"
        },
        "description": "Specialiserad och försäkrad pianoflytt i Stockholm. Vi har rätt utrustning och erfarenhet för att flytta ditt piano eller din flygel på ett säkert sätt."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Vad kostar det att flytta ett piano?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Priset för att flytta ett piano beror på flera faktorer som typ av piano (piano eller flygel), dess vikt, och förhållandena på både hämtnings- och lämningsadressen (t.ex. trappor och trånga utrymmen). Kontakta oss för ett exakt pianoflytt pris för just din situation i Stockholm."
            }
        }, {
            "@type": "Question",
            "name": "Hur mycket väger ett piano?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ett pianos vikt varierar stort. Ett standard upprättstående piano väger oftast mellan 150-250 kg. En mindre flygel kan väga runt 250-300 kg, medan en konsertflygel kan väga över 500 kg. Denna information är av vikt för pianist och för oss som flyttfirma för att planera lyftet korrekt."
            }
        }]
    };

    return (
        <Fragment>
            <Head>
                <title>Pianoflytt & Tunga Lyft Stockholm | Specialiserad Transport</title>
                <meta name="description" content="Behöver du hjälp med pianoflytt i Stockholm? Vi är specialister på tunga lyft och transport av pianon och flyglar. Försäkring ingår alltid." />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Specialister på Pianoflytt & Tunga Lyft'} pagesub={'Våra Tjänster'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Specialister som utför en säker pianoflytt" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Säker Pianoflytt med Rätt Teknik och Utrustning</h2>
                                        <p>
                                            Ett piano är inte bara en tung möbel – det är ett värdefullt och känsligt instrument som kräver specialhantering. Att försöka flytta ett piano utan rätt kunskap kan leda till kostsamma skador. Vi på Flyttdirekt är <strong>specialister på pianoflytt i Stockholm</strong> och har den erfarenhet och utrustning som krävs för att utföra jobbet säkert.
                                        </p>
                                        <p>
                                            Oavsett om du har ett upprättstående piano, en ståtlig flygel eller ett tungt kassaskåp, kan du lita på att vi hanterar ditt tunga lyft med största precision och omsorg.
                                        </p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceImg2} alt="Användning av bärselar för pianoflytt" /></li>
                                                <li><Image src={serviceImg3} alt="Skyddande emballage för en flygel" /></li>
                                            </ul>
                                        </div>
                                        <h2>Vår expertis inom tunga lyft:</h2>
                                        <p>En säker pianoflytt handlar om mer än bara muskelstyrka. Det handlar om teknik.</p>
                                        <ul>
                                            <li><strong>Specialutrustning:</strong> Vi använder bärselar, pianomattor, ramper och skyddande emballage.</li>
                                            <li><strong>Erfaret Team:</strong> Vår personal är specifikt tränad för att hantera tunga och otympliga föremål.</li>
                                            <li><strong>Anpassad Transport:</strong> Våra bilar är utrustade för att säkra pianot ordentligt under transporten.</li>
                                            <li><strong>Full Försäkring:</strong> Vi har en specialförsäkring som täcker eventuella skador under flytten.</li>
                                        </ul>
                                        <h2>Vi flyttar alla typer av tunga föremål</h2>
                                        <p>
                                            Vår expertis sträcker sig bortom pianon. Vi hjälper dig gärna med andra tunga lyft som kassaskåp, industrimaskiner, stora konstverk och andra föremål som kräver specialhantering.
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

export default PianoflyttPage;
