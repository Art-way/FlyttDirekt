// File: pages/magasinering/index.js
// المحتوى: صفحة خدمة "التخزين" مع نصوص احترافية ومحسنة لمحركات البحث

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar'; // Importera den nya komponenten

// استخدام صور موجودة من القالب
import serviceImg from '/public/images/service/3.jpg';
import serviceImg2 from '/public/images/service-single/3.jpg';
import serviceImg3 from '/public/images/projects/img-3.jpg';

const MagasineringPage = () => {
    // Schema Markup لخدمة Magasinering
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Magasinering",
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
        "description": "Säker och flexibel magasinering av möbler och bohag i Stockholm. Våra förråd är larmade, tempererade och övervakade för din trygghet."
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Vad kostar magasinering av möbler?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Priset för magasinering beror på hur stor yta du behöver och hur länge du vill förvara dina saker. Vi erbjuder flexibla lösningar och konkurrenskraftiga priser. Kontakta oss för en skräddarsydd offert för din möbelförvaring."
            }
        }, {
            "@type": "Question",
            "name": "Är era förråd säkra?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, säkerheten är vår högsta prioritet. Alla våra förråd är larmade, videoövervakade och har kontrollerad temperatur för att skydda dina ägodelar mot stöld, fukt och skadedjur."
            }
        }]
    };

    return (
        <Fragment>
            <Head>
                <title>Magasinering & Möbelförvaring i Stockholm | Säkra Förråd</title>
                <meta name="description" content="Behöver du magasinering i Stockholm? Vi erbjuder säker och prisvärd förvaring av möbler och bohag. Kontakta oss för att hyra förråd idag." />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Säker och Flexibel Magasinering'} pagesub={'Våra Tjänster'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Säkert och rent förråd för magasinering av möbler i Stockholm" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Trygg möbelförvaring för dina behov</h2>
                                        <p>
                                            Behöver du extra utrymme mellan flyttar, under en renovering eller vid en längre utlandsvistelse? Flyttdirekt erbjuder säker och flexibel <strong>magasinering i Stockholm</strong>. Vi har <strong>förråd</strong> i olika storlekar för att passa allt från några enstaka kartonger till ett helt bohag.
                                        </p>
                                        <p>
                                            Vår tjänst för <strong>magasinering av möbler</strong> är den perfekta lösningen när du behöver en trygg plats för dina ägodelar. Vi kan även hjälpa till med transport till och från vårt lager för en komplett service inom <strong>flytt och förvaring i Stockholm</strong>.
                                        </p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceImg2} alt="Larmat och videoövervakat förråd" /></li>
                                                <li><Image src={serviceImg3} alt="Flexibel möbelförvaring för kort eller lång tid" /></li>
                                            </ul>
                                        </div>
                                        <h2>Varför välja vår magasinering?</h2>
                                        <p>När du väljer att hyra förråd hos oss får du mer än bara ett utrymme. Du får sinnesro.</p>
                                        <ul>
                                            <li><strong>Säkerhet:</strong> Våra anläggningar är larmade och videoövervakade dygnet runt.</li>
                                            <li><strong>Klimatkontroll:</strong> Vi erbjuder tempererade förråd för att skydda känsliga föremål som elektronik och konst.</li>
                                            <li><strong>Flexibilitet:</strong> Hyr förråd så länge du behöver, från en vecka till flera år.</li>
                                            <li><strong>Helhetslösning:</strong> Vi kan hämta, förvara och sedan köra ut dina saker till din nya adress.</li>
                                        </ul>
                                        <h2>Prisvärd magasinering</h2>
                                        <p>
                                            Vi strävar efter att erbjuda prisvärd magasinering utan dolda avgifter. Kontakta oss idag för att diskutera dina förvaringsbehov och få en kostnadsfri offert.
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

export default MagasineringPage;
