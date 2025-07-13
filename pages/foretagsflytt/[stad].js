// ====================================================================================================
// File: pages/foretagsflytt/[stad].js
// المسار: pages/foretagsflytt/[stad].js
// الوصف: صفحة ديناميكية لخدمات نقل الشركات في مدن محددة.
// ====================================================================================================

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Head from 'next/head';
import Link from 'next/link';
import locations from '../../api/locations';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';

const LocalForetagsflyttPage = ({ location }) => {
    if (!location) {
        return <div>Platsen kunde inte hittas.</div>;
    }
    
    const title = `Företagsflytt & Kontorsflytt i ${location.name}`;
    const metaDescription = `Professionell företagsflytt i ${location.name}. Vi minimerar ert driftstopp och säkerställer en effektiv kontorsflytt. Kontakta oss för en offert.`;

    return (
        <Fragment>
            <Head>
                <title>{title} | Flyttdirekt.se</title>
                <meta name="description" content={metaDescription} />
            </Head>
            <Navbar />
            <PageTitle pageTitle={title} pagesub={'Företagsflytt'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Effektiv kontorsflytt i {location.name}</h2>
                                        <p>Vi är er lokala expert på <strong>företagsflytt i {location.name}</strong>. Vi förstår vikten av en snabb och välorganiserad flytt för att minimera påverkan på er verksamhet.</p>
                                        <p>{location.description}</p>
                                        <p>Kontakta oss idag för att planera er nästa <strong>kontorsflytt i {location.name}</strong>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
    // Definiera de städer som har specifika sidor för företagsflytt
    const foretagsflyttLocations = ['bromma', 'upplands-vasby'];
    const paths = foretagsflyttLocations.map(stad => ({
        params: { stad },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const location = locations.find(loc => loc.slug === params.stad) || null;
    if (!location) {
        return { notFound: true };
    }
    return {
        props: { location },
    };
}

export default LocalForetagsflyttPage;