
import React, { Fragment } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/hero/Hero';
import Scrollbar from '../components/scrollbar/scrollbar';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import LocationSection from '../components/LocationSection/LocationSection'; // استيراد المكون الجديد
import WorkSection from '../components/WorkSection/WorkSection';
import Appointment from '../components/Appointment/Appointment';
import ProjectSection from '../components/ProjectSection/ProjectSection';
import TeamSection from '../components/TeamSection/TeamSection';
import Testimonial from '../components/Testimonial/Testimonial';
import BlogSection from '../components/BlogSection/BlogSection.js';
import PartnerSection from '../components/PartnerSection/PartnerSection';
import Footer from '../components/footer/Footer.js';
import Head from 'next/head';

const HomePage = () => {
    return (
        <Fragment>
            <Head>
                <title>Flyttfirma Stockholm - Flytthjälp & Flyttstädning | Flyttdirekt.se</title>
                <meta name="description" content="Flyttdirekt är din pålitliga flyttfirma i Stockholm. Vi erbjuder professionell flytthjälp, flyttstädning med garanti, och säker magasinering. Få en kostnadsfri offert!" />
            </Head>
            <Navbar />
            <Hero />
            <ServiceSection />
            <LocationSection /> {/* إضافة المكون الجديد هنا */}
            <WorkSection />
            <Appointment />
            <ProjectSection />
            <TeamSection />
            <Testimonial />
            <BlogSection/>
            <PartnerSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default HomePage;