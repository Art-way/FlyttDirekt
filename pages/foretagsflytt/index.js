import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar'; // Importera den nya komponenten

// استخدام صور موجودة من القالب
import serviceImg from '/public/images/service/4.jpg';
import serviceImg2 from '/public/images/projects/img-2.jpg';
import serviceImg3 from '/public/images/team/bg.jpg';

const ForetagsflyttPage = () => {

    // Schema Markup لخدمة Företagsflytt
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Företagsflytt",
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
            "@type": "AdministrativeArea",
            "name": "Stockholms län"
        },
        "description": "Effektiv och säker företagsflytt i Stockholm med omnejd. Vi minimerar ert driftstopp och hanterar allt från IT-utrustning till tunga arkivskåp."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Hur minimerar ni driftstoppet under en kontorsflytt?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Genom noggrann planering och en dedikerad projektledare. Vi kan utföra flytten utanför ordinarie kontorstid, till exempel under kvällar eller helger, för att säkerställa att er verksamhet kan fortsätta med minimala avbrott."
            }
        }, {
            "@type": "Question",
            "name": "Erbjuder ni företagsflytt i hela Stockholm?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, vi utför företagsflytt och kontorsflytt i hela Stockholmsområdet, inklusive specialiserade tjänster för områden som Bromma och Upplands Väsby."
            }
        }]
    };

    return (
        <Fragment>
            <Head>
                <title>Företagsflytt & Kontorsflytt Stockholm | Flyttdirekt.se</title>
                <meta
                    name="description"
                    content="Planerar ni att flytta kontor? Vi erbjuder professionell företagsflytt med minimalt driftstopp. Kontakta oss för en offert på er kontorsflytt i Stockholm."
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
            <PageTitle pageTitle={'Effektiv Företagsflytt med Minimalt Driftstopp'} pagesub={'Våra Tjänster'} />

            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Planering av en kontorsflytt" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Professionell hjälp när ni ska flytta kontor</h2>
                                        <p>
                                            En <strong>företagsflytt</strong> är ett komplext projekt som kräver noggrann planering och expertis. Flyttdirekt är specialister på <strong>kontorsflytt i Stockholm</strong> och ser till att hela processen, från nedpackning av IT-utrustning till montering av arbetsplatser, sker smidigt och effektivt. Vårt mål är att minimera ert driftstopp så att ni snabbt kan återgå till er normala verksamhet.
                                        </p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceImg2} alt="Säker hantering av IT-utrustning" /></li>
                                                <li><Image src={serviceImg3} alt="Strukturerad uppmärkning och packning" /></li>
                                            </ul>
                                        </div>

                                        <h2>Vår process för en lyckad kontorsflytt</h2>
                                        <p>Vi vet att tid är pengar. Därför följer vi en beprövad process för att säkerställa en lyckad flytt.</p>
                                        <ul>
                                            <li><strong>Projektledning:</strong> Ni får en dedikerad projektledare som är er enda kontaktpunkt genom hela flytten.</li>
                                            <li><strong>Planering & Tidsplan:</strong> Vi skapar en detaljerad tidsplan i samråd med er för att passa er verksamhet.</li>
                                            <li><strong>Packning & Märkning:</strong> Systematisk packning och märkning av allt kontorsmaterial, arkiv och utrustning.</li>
                                            <li><strong>Säker Transport:</strong> Vi hanterar känslig utrustning med största varsamhet.</li>
                                            <li><strong>Montering & Installation:</strong> Vi hjälper till att ställa i ordning det nya kontoret enligt era önskemål.</li>
                                        </ul>

                                        <h2>Kontorsflytt i hela Stockholmsområdet</h2>
                                        <p>
                                            Vi utför uppdrag i hela regionen, från en specialiserad <strong>kontorsflytt i Bromma</strong> till storskaliga projekt som <strong>kontorsflytt i Upplands Väsby</strong>. Oavsett var ert nya kontor ligger, kan ni lita på att vi har den lokala kunskapen och resurserna som krävs.
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

export default ForetagsflyttPage;
