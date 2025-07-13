// File: pages/flyttstadning/[stad].js

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar'; // Importera den nya komponenten

const locations = require('../../api/locations');
// استخدام صورة مناسبة
import serviceImg from '/public/images/service/2.jpg';

const LocalStadningPage = ({ location }) => {
    
    if (!location) {
        return <div>Platsen kunde inte hittas.</div>;
    }

    // إنشاء محتوى ديناميكي
    const title = `Flyttstädning ${location.name} med Garanti`;
    const metaTitle = `Flyttstädning ${location.name} | Garanterat Rent & Fast Pris`;
    const metaDescription = `Boka professionell flyttstädning i ${location.name} med 100% nöjd-kund-garanti. Vi följer mäklarstandard till fast pris. Få offert idag!`;

    // Schema Markup للخدمة المحلية
    const localServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": `Flyttstädning i ${location.name}`,
        "provider": {
            "@type": "LocalBusiness",
            "name": `Flyttdirekt.se - ${location.name}`,
            "telephone": "+46-8-123-45-678",
        },
        "areaServed": {
            "@type": "City",
            "name": location.name
        },
        "description": metaDescription
    };

    return (
        <Fragment>
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <script 
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localServiceSchema) }}
                />
            </Head>

            <Navbar />
            <PageTitle pageTitle={title} pagesub={`Flyttstädning`} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt={`Flyttstädning i ${location.name}`} />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Garanterad flyttstädning i {location.name}</h2>
                                        <p>
                                            Ska du flytta och behöver en pålitlig <strong>städfirma i {location.name}</strong>? Flyttdirekt erbjuder en komplett och garanterad <strong>flyttstädning</strong> så att du kan fokusera på ditt nya hem. Vi ser till att din gamla bostad blir skinande ren och redo för besiktning.
                                        </p>
                                        <p>Vi är verksamma i hela {location.name} med omnejd och erbjuder en service du kan lita på, alltid till ett fast och konkurrenskraftigt pris.</p>
                                        
                                        <h2>Vad ingår i vår städning?</h2>
                                        <p>Vår tjänst täcker allt som krävs enligt mäklarstandard. Vi har en detaljerad <strong>checklista för flyttstädning</strong> som inkluderar:</p>
                                        <ul>
                                            <li>Grundlig rengöring av kök och badrum.</li>
                                            <li>Fönsterputsning, inklusive karmar och mellan glas.</li>
                                            <li>Rengöring av alla garderober, skåp och lådor.</li>
                                            <li>Dammsugning och våttorkning av samtliga golv.</li>
                                        </ul>
                                        <p>Läs mer om vad som ingår på vår huvudsida för <Link href="/flyttstadning">flyttstädning</Link>.</p>

                                        <div className="cta-widget" style={{backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '5px', textAlign: 'center', margin: '40px 0'}}>
                                            <h3>Få ett Fast Pris på Städningen i {location.name}</h3>
                                            <p>Få ett kostnadsfritt prisförslag baserat på din bostadsyta. Inga dolda avgifter!</p>
                                            <Link href="/kontakt" className="theme-btn">Begär Prisförslag</Link>
                                        </div>
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
};

export async function getStaticPaths() {
    // Samma logik som för flytthjälp, vi använder samma städer
    const paths = locations.map(loc => ({
        params: { stad: loc.slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const location = locations.find(loc => loc.slug === params.stad) || null;
    
    if (!location) {
        return { notFound: true };
    }

    return {
        props: {
            location,
        },
    };
}

export default LocalStadningPage;
