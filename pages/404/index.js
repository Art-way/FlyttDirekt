import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Error from '../../components/404/404'; // استيراد المكون المحدث
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Head from 'next/head';

const ErrorPage =() => {
    return(
        <Fragment>
            <Head>
                <title>404 - Sidan Hittades Inte | Flyttdirekt.se</title>
                <meta name="robots" content="noindex" /> 
            </Head>
            <Navbar/>
            <div className="wpo-page-title">
                 {/*  لقد أزلت مكون PageTitle هنا لكي لا يظهر عنوان "404" مرتين */}
            </div>
            <Error/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ErrorPage;