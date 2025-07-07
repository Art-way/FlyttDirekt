import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

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
                                            En <strong>flyttfirma</strong> är ett företag som specialiserar sig på att hjälpa privatpersoner och företag att flytta deras ägodelar från en plats till en annan. Men en modern och professionell flyttfirma gör så mycket mer än att bara bära och transportera.
                                        </p>
                                        <p>
                                            Hos oss på Flyttdirekt får du en helhetslösning. Vi erbjuder ett brett spektrum av tjänster för att göra din flytt så enkel som möjligt.
                                        </p>

                                        <h3>Våra Kärntjänster:</h3>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <h4><Link href="/flytthjalp">Flytthjälp</Link></h4>
                                                <p>Själva transporten av ditt bohag, utförd av erfaren personal.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4><Link href="/flyttstadning">Flyttstädning</Link></h4>
                                                <p>Garanterad städning av din gamla bostad så att den blir godkänd.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4><Link href="/foretagsflytt">Företagsflytt</Link></h4>
                                                <p>Effektiv och strukturerad flytt av kontor och verksamheter.</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <h4><Link href="/magasinering">Magasinering</Link></h4>
                                                <p>Säker förvaring av dina möbler och ägodelar.</p>
                                            </div>
                                        </div>

                                        <div className="wpo-service-single-sub-img" style={{marginTop: '30px'}}>
                                            <ul>
                                                <li><Image src={checklistImg} alt="Checklista för att anlita flyttfirma" /></li>
                                                <li><Image src={qualityImg} alt="Kvalitetsgaranti från flyttfirma" /></li>
                                            </ul>
                                        </div>
                                        
                                        <h2>Checklista: Att tänka på när du anlitar en flyttfirma</h2>
                                        <p>Att välja rätt bland alla <strong>rekommenderade flyttfirmor</strong> kan vara svårt. Här är en snabb checklista:</p>
                                        <ul>
                                            <li><strong>Kontrollera F-skatt och försäkringar:</strong> En seriös firma har alltid F-skattsedel och en gällande transportöransvarsförsäkring.</li>
                                            <li><strong>Begär en tydlig offert:</strong> Se till att du får ett skriftligt avtal som specificerar vad som ingår. Läs mer om <Link href="/17/28/vad-kostar-flyttfirma-stockholm">vad en flyttfirma kostar</Link>.</li>
                                            <li><strong>Läs omdömen:</strong> Vad säger tidigare kunder? Omdömen är en bra indikator på företagets kvalitet.</li>
                                            <li><strong>Fråga om RUT-avdrag:</strong> Säkerställ att firman hanterar RUT-avdraget direkt på fakturan.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="col-lg-4 col-md-8">
                            <div className="wpo-single-sidebar">
                                <div className="wpo-service-widget widget">
                                    <h2>Hitta din lokala flytthjälp</h2>
                                    <ul>
                                        <li><Link href="/flytthjalp/stockholm">Flytthjälp Stockholm</Link></li>
                                        <li><Link href="/flytthjalp/sollentuna">Flytthjälp Sollentuna</Link></li>
                                        <li><Link href="/flytthjalp/nacka">Flytthjälp Nacka</Link></li>
                                        <li><Link href="/flytthjalp/taby">Flytthjälp Täby</Link></li>
                                        <li><Link href="/flytthjalp/bromma">Flytthjälp Bromma</Link></li>
                                    </ul>
                                </div>
                                <div className="wpo-contact-widget widget">
                                    <h2>Redo att boka?</h2>
                                    <p>Vi är redo att hjälpa dig. Kontakta oss idag för en kostnadsfri offert och personlig service du kan lita på.</p>
                                    <a href="/kontakt">Kontakta Oss</a>
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

export default FlyttfirmaPage;