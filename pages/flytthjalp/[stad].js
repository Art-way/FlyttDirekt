// File: pages/flytthjalp/[stad].js

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
// Använd en befintlig bild
import serviceImg from '/public/images/service/1.jpg';

const LocalServicePage = ({ location }) => {
    
    if (!location) {
        return <div>Platsen kunde inte hittas.</div>;
    }

    // Skapa dynamiskt innehåll
    const title = `Flytthjälp ${location.name} - Din Lokala Flyttfirma`;
    const metaTitle = `Flytthjälp ${location.name} | Pris & Offert | Flyttdirekt.se`;
    const metaDescription = `Behöver du pålitlig flytthjälp i ${location.name}? Flyttdirekt erbjuder säker och effektiv bohagsflytt till ett bra pris. Begär en kostnadsfri offert idag!`;

    // Schema Markup för lokal tjänst
    const localServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": `Flytthjälp i ${location.name}`,
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
            <PageTitle pageTitle={title} pagesub={`Flytthjälp`} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt={`Flyttfirma i ${location.name}`} />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Din pålitliga partner för flytthjälp i {location.name}</h2>
                                        <p>
                                            Söker du en professionell och trygg <strong>flyttfirma i {location.name}</strong>? Då har du kommit rätt. Flyttdirekt erbjuder komplett <strong>flytthjälp i {location.name}</strong> för både privatpersoner och företag.
                                        </p>
                                        <p>{location.description}</p>
                                        
                                        <h2>Våra tjänster i {location.name}</h2>
                                        <ul>
                                            <li>Fullständig bohagsflytt och villaflytt.</li>
                                            <li>Smidig och effektiv kontorsflytt.</li>
                                            <li>Säker transport av tunga och ömtåliga föremål.</li>
                                            <li>Möjlighet att kombinera med <Link href="/flyttstadning">flyttstädning</Link> och <Link href="/magasinering">magasinering</Link>.</li>
                                            <li>Alltid fullt försäkrade transporter.</li>
                                        </ul>

                                        <div className="cta-widget" style={{backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '5px', textAlign: 'center', margin: '40px 0'}}>
                                            <h3>Få ett Fast Pris för din Flytt i {location.name}</h3>
                                            <p>Varje flytt är unik. Fyll i vårt formulär så återkommer vi med en kostnadsfri offert anpassad för just dig.</p>
                                            <Link href="/kontakt" className="theme-btn">Begär Offert Nu</Link>
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

export default LocalServicePage;
