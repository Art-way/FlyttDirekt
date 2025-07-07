import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head'; // استيراد Head لـ SEO

// استخدام صور موجودة من القالب
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
            "image": "https://www.flyttdirekt.se/images/logo.svg", // قم بالتغيير إلى رابط شعارك
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
            "name": "Vad kostar flytthjälp i Stockholm?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Priset för flytthjälp i Stockholm varierar beroende på bostadens storlek, avstånd och vilka tjänster som inkluderas. Vi erbjuder ett konkurrenskraftigt flytthjälp pris och du kan få en kostnadsfri offert för att få ett exakt pris för just din flytt. RUT-avdraget kan också halvera arbetskostnaden."
            }
        }, {
            "@type": "Question",
            "name": "Kan jag få hjälp med bara tunga lyft?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Ja, absolut. Vi erbjuder flexibla lösningar och kan hjälpa till med enbart tunga och otympliga moment som att flytta en soffa, säng eller ett piano. Kontakta oss för att hyra bärhjälp."
            }
        }]
    };

    return (
        <Fragment>
            <Head>
                <title>Flytthjälp Stockholm - Pris & Offert från en säker Flyttfirma</title>
                <meta 
                    name="description" 
                    content="Behöver du flytthjälp i Stockholm? Få ett fast pris från en rekommenderad flyttfirma. Vi erbjuder säker bohagsflytt, företagsflytt & pianoflytt med RUT-avdrag." 
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
            <PageTitle pageTitle={'Professionell Flytthjälp i Stockholm'} pagesub={'Våra Tjänster'} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Flytthjälp Stockholm" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Flytthjälp för en trygg och effektiv flytt</h2>
                                        <p>
                                            Att flytta kan vara en av livets mest stressande händelser. Med <strong>Flyttdirekt</strong> får du professionell <strong>flytthjälp i Stockholm</strong> som gör processen enkel och bekymmersfri. Vi är en erfaren <strong>flyttfirma i Stockholm</strong> som hanterar allt från mindre lägenheter till stora villor och kontor. Vårt mål är att erbjuda en säker och effektiv bohagsflytt, oavsett vart du ska flytta.
                                        </p>
                                        <p>
                                            Vi förstår att varje flytt är unik. Därför skräddarsyr vi våra tjänster för att passa just dina behov. Oavsett om du behöver hjälp med hela processen eller bara tunga lyft, står vårt team redo att assistera.
                                        </p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={serviceImg2} alt="Packning av flyttkartonger" /></li>
                                                <li><Image src={serviceImg3} alt="Transport med flyttbil" /></li>
                                            </ul>
                                        </div>
                                        
                                        <h2>Vad ingår i vår flytthjälp?</h2>
                                        <p>När du anlitar oss för din <strong>flytt i Stockholm</strong> kan du förvänta dig en komplett service. Vår standardtjänst inkluderar:</p>
                                        <ul>
                                            <li><strong>Erfaren personal:</strong> Vårt team är utbildat i säker hantering och packteknik.</li>
                                            <li><strong>Transport:</strong> Vi har moderna och fullt utrustade flyttbilar.</li>
                                            <li><strong>Försäkring:</strong> Dina ägodelar är fullt försäkrade under hela flytten.</li>
                                            <li><strong>Tunga lyft:</strong> Vi hanterar tunga möbler som soffor, sängar och skåp.</li>
                                            <li><strong>Montering:</strong> Vi kan hjälpa till med demontering och montering av möbler.</li>
                                        </ul>

                                        <h2>Pris och RUT-avdrag för flytthjälp</h2>
                                        <p>
                                            Vad kostar en flyttfirma? Priset för flytthjälp beror på flera faktorer. Vi erbjuder transparent prissättning och ett konkurrenskraftigt <strong>flytthjälp pris i Stockholm</strong>. Dessutom har du möjlighet att använda <strong>RUT-avdrag för flytthjälp</strong>, vilket kan halvera arbetskostnaden. Vi hjälper dig med all administration kring avdraget.
                                        </p>
                                        <p>
                                            För en exakt prisbild, begär en kostnadsfri <strong>flyttfirma stockholm offert</strong> från oss idag.
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
                                    <h2>Hur kan vi hjälpa dig?</h2>
                                    <p>Oavsett dina behov, är vi här för att hjälpa till. Kontakta oss för en kostnadsfri offert och personlig service.</p>
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

export default FlytthjalpPage;