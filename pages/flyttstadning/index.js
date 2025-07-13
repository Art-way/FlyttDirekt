// File: pages/flyttstadning/index.js
// المحتوى: صفحة خدمة "المساعدة في النقل" مع نصوص احترافية ومحسنة لمحركات البحث

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';

// استخدام صور مناسبة من القالب
import serviceImg from '/public/images/service/2.jpg';

const FlyttstadningPage = () => {
    // Schema Markup لخدمة Flytthjälp
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Flyttstädning",
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
            "@type": "Country",
            "name": "Sverige"
        },
        "description": "Professionell flyttstädning med 100% nöjd-kund-garanti. Vi följer Mäklarsamfundets rekommendationer och ser till att din gamla bostad är skinande ren för nästa ägare."
    };

    // Schema Markup للأسئلة الشائعة (FAQ)
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
            "@type": "Question",
            "name": "Vad ingår i en flyttstädning?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Allt som krävs för en godkänd besiktning ingår. Detta inkluderar rengöring av alla ytor, fönsterputs, rengöring av vitvaror in- och utvändigt, avkalkning av badrum och mycket mer. Vi följer en detaljerad checklista."
            }
        }, {
            "@type": "Question",
            "name": "Lämnar ni garanti på flyttstädningen?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolut! Vi lämnar 100% nöjd-kund-garanti. Om du eller den nya hyresgästen mot förmodan skulle ha några anmärkningar, kommer vi tillbaka och åtgärdar dem kostnadsfritt."
            }
        }]
    };

    return (
        <Fragment>
            <Head>
                <title>Flyttstädning Stockholm med Garanti | Flyttdirekt.se</title>
                <meta 
                    name="description" 
                    content="Boka garanterad flyttstädning till fast pris. Vi följer en komplett checklista för skinande rena resultat. Få RUT-avdrag direkt på fakturan." 
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
            <PageTitle pageTitle={'Flyttstädning med 100% Nöjd-Kund-Garanti'} pagesub={'Våra Tjänster'} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt="Professionell flyttstädning" />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Garanterad Flyttstädning för en smidig överlämning</h2>
                                        <p>
                                            En av de sista och viktigaste delarna av en flytt är städningen. Lämna över det tunga jobbet till en professionell <strong>städfirma</strong>. Vi på Flyttdirekt erbjuder en komplett och <strong>garanterad flyttstädning</strong> som säkerställer att du kan lämna din gamla bostad med gott samvete och få den godkänd vid besiktningen.
                                        </p>
                                        <p>
                                            Vi vet exakt vad som krävs och vår tjänst täcker allt. Glöm stressen med <strong>flyttstäd checklista</strong> – vi har den och följer den till punkt och pricka. Vi använder miljövänliga rengöringsmedel och professionell utrustning.
                                        </p>
                                        
                                        <h2>Vår Kompletta Checklista för Flyttstädning</h2>
                                        <p>För att garantera kvaliteten på vårt arbete följer vi Mäklarsamfundets rekommendationer. Här är ett utdrag ur vår checklista:</p>
                                        <ul>
                                            <li><strong>Kök:</strong> Rengöring av ugn, spis, fläkt, kyl/frys (in- och utvändigt), skåp och bänkskivor.</li>
                                            <li><strong>Badrum:</strong> Avkalkning och rengöring av dusch, badkar, toalett och handfat. Rengöring av golvbrunn.</li>
                                            <li><strong>Alla rum:</strong> Dammsugning och våttorkning av golv, rengöring av lister, dörrar, fönsterkarmar och garderober.</li>
                                            <li><strong>Fönsterputs:</strong> Putsning av samtliga fönster, in- och utsida samt mellan glasen.</li>
                                        </ul>

                                        <h2>Pris och RUT-avdrag för Flyttstädning</h2>
                                        <p>
                                            Vi erbjuder fasta och transparenta priser baserade på din bostads yta. Du kan även nyttja <strong>RUT-avdrag för flyttstädning</strong>, vilket gör tjänsten mycket prisvärd. Vi sköter all kontakt med Skatteverket och avdraget görs direkt på din faktura.
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

export default FlyttstadningPage;
