import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';

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
        "description": "Säker och professionell pianoflytt i Stockholm. Vi har expertisen och specialutrustningen för att flytta pianon och flyglar tryggt."
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
                <title>Pianoflytt Stockholm - Pris & Offert för att Flytta Piano</title>
                <meta 
                    name="description" 
                    content="Professionell pianoflytt i Stockholm till fast pris. Vi har erfarenhet av att flytta pianon och flyglar säkert. Få en kostnadsfri offert idag." 
                />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            </Head>

            <Navbar />
            <PageTitle pageTitle={'Säker och Professionell Pianoflytt'} pagesub={'Våra Tjänster'} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Säker pianoflytt i Stockholm" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Expertis för att flytta ditt piano eller din flygel</h2>
                                        <p>
                                            Att <strong>flytta piano</strong> är ett uppdrag som kräver mer än bara styrka – det kräver teknik, erfarenhet och rätt utrustning. Flyttdirekt erbjuder specialiserad <strong>pianoflytt i Stockholm</strong> och ser till att ditt värdefulla instrument hanteras med största omsorg. Vi klassificerar detta som <strong>tunga lyft</strong> och har ett dedikerat team för just dessa uppdrag.
                                        </p>
                                        <p>
                                            Oavsett om det är ett gammalt ärvt piano eller en ny konsertflygel, förstår vi instrumentets värde, både ekonomiskt och sentimentalt. Vi vet hur man bär, säkrar och transporterar för att undvika skador.
                                        </p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceImg2} alt="Specialutrustning för tunga lyft" /></li>
                                                <li><Image src={serviceImg3} alt="Försiktig transport av flygel" /></li>
                                            </ul>
                                        </div>
                                        
                                        <h2>Vår metod för en säker pianoflytt</h2>
                                        <p>Information om <strong>piano vikt</strong> är avgörande. Vår process är utformad för att hantera instrumentets tyngd och ömtålighet.</p>
                                        <ul>
                                            <li><strong>Besiktning:</strong> Vi analyserar förutsättningarna på plats, inklusive trappor, dörröppningar och hissar.</li>
                                            <li><strong>Skydd:</strong> Pianot skyddas noggrant med filtar och specialanpassat emballage.</li>
                                            <li><strong>Bärselar & Utrustning:</strong> Vi använder alltid professionella bärselar och pianovagnar för att säkerställa ett säkert lyft.</li>
                                            <li><strong>Säker transport:</strong> Instrumentet spänns fast ordentligt i våra bilar för en stabil transport.</li>
                                        </ul>

                                        <h2>Vad kostar det att flytta ett piano?</h2>
                                        <p>
                                            Få ett fast <strong>pianoflytt Stockholm pris</strong> från oss. Kostnaden baseras på pianots typ, vikt och flyttens komplexitet. Att försöka <strong>flytta ett piano</strong> själv kan leda till dyra skador på både instrumentet och fastigheten, så anlita alltid proffs.
                                        </p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 col-md-8">
                            <div className="wpo-single-sidebar">
                                <div className="wpo-service-widget widget">
                                    <h2>Alla Tjänster</h2>
                                    <ul>
                                        <li><a href="/flytthjalp">Flytthjälp</a></li>
                                        <li><a href="/flyttstadning">Flyttstädning</a></li>
                                        <li><a href="/magasinering">Magasinering</a></li>
                                        <li><a href="/foretagsflytt">Företagsflytt</a></li>
                                        <li><a href="/pianoflytt">Pianoflytt</a></li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-widget widget">
                                    <h2>Flytta ett piano?</h2>
                                    <p>Låt våra experter hantera ditt instrument. Kontakta oss för en trygg pianoflytt och en kostnadsfri offert.</p>
                                    <a href="/kontakt">Begär Offert</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <Scrollbar />
        </Fragment>
    );
}

export default PianoflyttPage;