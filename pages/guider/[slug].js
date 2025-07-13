// ====================================================================================================
// File: pages/guider/[slug].js
// المسار: pages/guider/[slug].js
// الوصف: صفحة ديناميكية لعرض المقالات والأدلة.
// ====================================================================================================

import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Head from 'next/head';
import guides from '../../api/guides';
import ServiceSidebar from '../../components/ServiceSidebar/ServiceSidebar';

const GuidePage = ({ guide }) => {
    if (!guide) {
        return <div>Guiden kunde inte hittas.</div>;
    }

    return (
        <Fragment>
            <Head>
                <title>{guide.title} | Flyttdirekt Guider</title>
                <meta name="description" content={guide.metaDescription} />
            </Head>
            <Navbar />
            <PageTitle pageTitle={guide.title} pagesub={'Guide'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <div dangerouslySetInnerHTML={{ __html: guide.content }} />
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
    const paths = guides.map(guide => ({
        params: { slug: guide.slug },
    }));
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const guide = guides.find(g => g.slug === params.slug) || null;
    if (!guide) {
        return { notFound: true };
    }
    return {
        props: { guide },
    };
}

export default GuidePage;