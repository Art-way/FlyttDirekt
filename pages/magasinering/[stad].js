// File: pages/magasinering/[stad].js

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
import serviceImg from '/public/images/service/3.jpg';

const LocalMagasineringPage = ({ location }) => {
    
    if (!location) {
        return <div>Platsen kunde inte hittas.</div>;
    }

    // إنشاء محتوى ديناميكي
    const title = `Magasinering ${location.name} – Hyra Förråd`;
    const metaTitle = `Magasinering ${location.name} | Säker Möbelförvaring & Förråd`;
    const metaDescription = `Behöver du magasinering i ${location.name}? Hyr ett säkert, torrt och tempererat förråd hos oss. Perfekt för möbelförvaring vid flytt eller renovering.`;

    // Schema Markup للخدمة المحلية
    const localServiceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": `Magasinering i ${location.name}`,
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
            <PageTitle pageTitle={title} pagesub={`Magasinering`} />
            
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={serviceImg} alt={`Säker magasinering i ${location.name}`} />
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Hyra förråd i {location.name} – Tryggt och enkelt</h2>
                                        <p>
                                            Behöver du en säker plats för dina möbler och ägodelar? Vi erbjuder prisvärd och flexibel <strong>magasinering i {location.name}</strong>. Våra förråd är den perfekta lösningen vid en flytt, renovering eller när du helt enkelt behöver mer utrymme.
                                        </p>
                                        <p>Vi erbjuder en helhetslösning där vi även kan hjälpa till med <Link href={`/flytthjalp/${location.slug}`}>transport till och från förrådet</Link>, vilket gör din <strong>flytt och förvaring</strong> i {location.name} smidigare än någonsin.</p>
                                        
                                        <h2>Varför välja vår möbelförvaring i {location.name}?</h2>
                                        <ul>
                                            <li><strong>Säkerhet:</strong> Våra anläggningar är larmade, övervakade och endast tillgängliga för dig.</li>
                                            <li><strong>Klimatkontrollerat:</strong> Vi ser till att dina ägodelar skyddas från fukt och kyla.</li>
                                            <li><strong>Flexibla Storlekar:</strong> Vi har förråd i flera olika storlekar för att passa just dina behov.</li>
                                            <li><strong>Centralt & Tillgängligt:</strong> Lätt att nå för dig som bor och verkar i {location.name}.</li>
                                        </ul>

                                        <div className="cta-widget" style={{backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '5px', textAlign: 'center', margin: '40px 0'}}>
                                            <h3>Få Pris på Magasinering i {location.name}</h3>
                                            <p>Kontakta oss för att diskutera dina behov och få en kostnadsfri offert på att hyra förråd.</p>
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
    // Vi återanvänder samma lista med platser
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

export default LocalMagasineringPage;
