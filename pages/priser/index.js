import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Footer from '../../components/footer/Footer.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Pricing from '../../components/Pricing/Pricing'
import Head from 'next/head';

const PricingPage =() => {
    return(
        <Fragment>
            <Head>
                <title>Priser - Vad kostar flytthjälp? | Flyttdirekt.se</title>
                <meta name="description" content="Se våra prisexempel för flytthjälp och flyttstädning. Vi erbjuder fasta och transparenta priser med RUT-avdrag. Begär en kostnadsfri offert idag." />
            </Head>
            <Navbar/>
            <PageTitle pageTitle={'Priser & Paket'} pagesub={'Priser'}/> 
            <Pricing/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PricingPage;