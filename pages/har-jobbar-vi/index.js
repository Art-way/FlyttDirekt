// ====================================================================================================
// File: pages/har-jobbar-vi/index.js
// المسار: pages/har-jobbar-vi/index.js
// الوصف: صفحة جديدة تعرض جميع المناطق التي تعمل بها الشركة.
// ====================================================================================================

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Head from 'next/head';
import Link from 'next/link';
import locations from '../../api/locations'; // استيراد المواقع

const HarJobbarViPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Här Jobbar Vi - Våra Verksamhetsområden | Flyttdirekt.se</title>
                <meta name="description" content="Vi erbjuder flytthjälp och flyttstädning i hela Stockholmsområdet. Se en komplett lista över de städer och områden vi är verksamma i." />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Här Jobbar Vi'} pagesub={'Våra Områden'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2>Vi är verksamma i hela Stockholmsregionen</h2>
                            <p>Hitta din lokala flytthjälp nedan. Vi expanderar ständigt, så kontakta oss gärna även om du inte hittar din ort i listan.</p>
                            <div className="row">
                                {locations.map((location, index) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={index}>
                                        <div className="p-3 border rounded m-2">
                                            <Link href={`/flytthjalp/${location.slug}`}>
                                                Flytthjälp {location.name}
                                            </Link>
                                        </div>
                                    </div>
                                ))}
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

export default HarJobbarViPage;
