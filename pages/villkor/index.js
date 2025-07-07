// File: pages/terms/index.js

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar.js'
import PageTitle from '../../components/pagetitle/PageTitle.js'
import Scrollbar from '../../components/scrollbar/scrollbar.js'
import Footer from '../../components/footer/Footer.js'
import Image from 'next/image';
import Head from 'next/head';

// ... (يمكن تعديل مكون FAQ بنفس الطريقة إذا أردت)

const TermPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Allmänna Villkor | Flyttdirekt.se</title>
                <meta name="description" content="Läs våra allmänna villkor för flyttjänster, flyttstädning och magasinering. Information om bokning, avbokning, betalning och försäkring." />
            </Head>
            <Navbar />
            <PageTitle pageTitle={'Allmänna Villkor'} pagesub={'Villkor'} />
            <section className="wpo-terms-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="wpo-terms-wrap">
                                <div className="wpo-terms-text">
                                    <h2>Allmänna Villkor för Tjänster hos Flyttdirekt.se</h2>
                                    <p>Dessa villkor gäller för alla uppdrag som utförs av Flyttdirekt.se. Genom att boka en tjänst hos oss accepterar kunden dessa villkor.</p>
                                    
                                    <h3>Bokning och Avbokning</h3>
                                    <p>Bokning sker via telefon, e-post eller vårt bokningsformulär. Avbokning måste ske senast 72 timmar före utsatt tid för att undvika debitering.</p>
                                    
                                    <h3>Betalning och Priser</h3>
                                    <p>Betalning sker via faktura eller Swish efter utfört arbete. Alla priser som anges till privatpersoner är inklusive moms och efter eventuellt RUT-avdrag, om inget annat anges.</p>
                                    
                                    <h3>Kundens Ansvar</h3>
                                    <p>Kunden ansvarar för att informera om samtliga föremål som ska flyttas, inklusive särskilt ömtåliga eller tunga föremål. Kunden ansvarar även för att säkerställa att det finns fri väg för transport och att eventuella tillstånd för parkering är ordnade.</p>

                                    <h3>Vårt Ansvar och Försäkring</h3>
                                    <p>Flyttdirekt.se innehar ansvarsförsäkring via Trygg-Hansa som täcker eventuella skador som uppstår under uppdraget och som vi är ansvariga för, i enlighet med Bohag 2010 och Kontor 2003.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;