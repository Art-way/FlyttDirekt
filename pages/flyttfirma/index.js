import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar'; // Importera den nya komponenten

// استخدام صور مناسبة من القالب
import serviceImg from '/public/images/about.jpg';
import checklistImg from '/public/images/projects/img-2.jpg';
import qualityImg from '/public/images/work/3.jpg';

const FlyttfirmaPage = () => {
    
    // Schema Markup لـ LocalBusiness & WebPage
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Flyttdirekt.se",
        "image": "https://www.flyttdirekt.se/images/logo.svg",
        "@id": "https://www.flyttdirekt.se/",
        "url": "https://www.flyttdirekt.se/",
        "telephone": "+46-8-123-45-678",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Exempelgatan 1",
            "addressLocality": "Stockholm",
            "postalCode": "12345",
            "addressCountry": "SE"
        },
        "description": "Flyttdirekt är en professionell flyttfirma som erbjuder ett komplett utbud av flyttjänster, inklusive bohagsflytt, företagsflytt, flyttstädning och magasinering i hela Sverige."
    };

    return (
        <Fragment>
            <Head>
                <title>Flyttfirma i Sverige - Allt du behöver för en lyckad flytt</title>
                <meta 
                    name="description" 
                    content="Vad gör en flyttfirma och varför ska du anlita en? Läs vår guide om allt från priser och RUT-avdrag till att välja den bästa och mest rekommenderade flyttfirman." 
                />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
                />
            </Head>

            <Navbar />
            <PageTitle pageTitle={'Din Professionella Flyttfirma'} pagesub={'Guide'} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Team från en professionell flyttfirma" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Vad gör en professionell flyttfirma?</h2>
                                        <p>
                                            En <strong>flyttfirma</strong> är ett företag som specialiserar sig på att hjälpa privatpersoner och företag att flytta deras ägodelar från en plats till en annan. Men en modern och professionell flyttfirma gör så mycket mer än att bara bära och transportera. Det handlar om att erbjuda en komplett och stressfri upplevelse, från första kartongen till sista möbeln är på plats.
                                        </p>
                                        <p>
                                            Hos oss på Flyttdirekt får du en helhetslösning. Vi erbjuder ett brett spektrum av tjänster för att göra din flytt så enkel som möjligt.
                                        </p>

                                        <h3>Fördelarna med att anlita en professionell flyttfirma</h3>
                                        <ul>
                                            <li><strong>Tidsbesparing:</strong> Vårt erfarna team arbetar snabbt och effektivt, vilket frigör tid för dig att fokusera på annat.</li>
                                            <li><strong>Trygghet och Säkerhet:</strong> Vi har rätt utrustning och teknik för att hantera dina ägodelar varsamt och är fullt försäkrade.</li>
                                            <li><strong>Minskad Stress:</strong> Vi tar hand om logistiken och det tunga arbetet, så att du kan få en lugnare flyttdag.</li>
                                            <li><strong>Effektivitet:</strong> Med vår erfarenhet optimerar vi packning och transport för att göra flytten så smidig som möjligt.</li>
                                        </ul>

                                        <div className="wpo-service-single-sub-img" style={{marginTop: '30px'}}>
                                            <ul>
                                                <li><Image src={checklistImg} alt="Checklista för att anlita flyttfirma" /></li>
                                                <li><Image src={qualityImg} alt="Kvalitetsgaranti från flyttfirma" /></li>
                                            </ul>
                                        </div>
                                        
                                        <h2>Checklista: Att tänka på när du anlitar en flyttfirma</h2>
                                        <p>Att välja rätt bland alla <strong>rekommenderade flyttfirmor</strong> kan vara svårt. Här är en utökad checklista som hjälper dig:</p>
                                        <ul>
                                            <li><strong>Kontrollera F-skatt och försäkringar:</strong> En seriös firma har alltid F-skattsedel och en gällande transportöransvarsförsäkring (Bohag 2010). Fråga efter bevis!</li>
                                            <li><strong>Begär en tydlig offert:</strong> Se till att du får ett skriftligt avtal som specificerar vad som ingår, inklusive moms och eventuellt RUT-avdrag. Jämför <Link href="/priser">våra priser</Link> och läs vår guide om <Link href="/17/28/vad-kostar-flyttfirma-stockholm">vad en flyttfirma kostar</Link>.</li>
                                            <li><strong>Läs omdömen:</strong> Vad säger tidigare kunder? Leta efter omdömen på oberoende plattformar.</li>
                                            <li><strong>Fråga om RUT-avdrag:</strong> Säkerställ att firman hanterar <Link href="/17/27/rutavdrag-flyttfirma-guide">RUT-avdraget</Link> direkt på fakturan.</li>
                                            <li><strong>Personlig kontakt:</strong> En bra flyttfirma är lätt att kommunicera med och svarar på dina frågor. Läs mer <Link href="/om-oss">om oss</Link> och vår filosofi.</li>
                                        </ul>
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

export default FlyttfirmaPage;
