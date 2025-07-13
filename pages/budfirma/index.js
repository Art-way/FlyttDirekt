// ====================================================================================================
// File: pages/budfirma/index.js
// المسار: pages/budfirma/index.js
// الوصف: صفحة جديدة لخدمة شركة الشحن.
// ====================================================================================================

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Head from 'next/head';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';

const BudfirmaPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Budfirma - Snabba & Pålitliga Transporter | Flyttdirekt.se</title>
                <meta name="description" content="Behöver du en pålitlig budfirma? Vi erbjuder snabba och säkra transporter för företag och privatpersoner i hela Stockholmsområdet." />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Budfirma & Transport'} pagesub={'Våra Tjänster'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                     <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Snabba och Säkra Budtjänster</h2>
                                        <p>Utöver våra flyttjänster erbjuder vi även professionella bud- och transporttjänster. Oavsett om det gäller ett enstaka paket eller regelbundna leveranser kan du lita på oss.</p>
                                        <h3>Information om vår budservice kommer snart...</h3>
                                        <p>Vi håller på att uppdatera denna sida med mer information. Kontakta oss gärna om du har några frågor om våra transportlösningar.</p>
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
}

export default BudfirmaPage;
