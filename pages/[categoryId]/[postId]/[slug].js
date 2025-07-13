// ====================================================================================================
// File: pages/[categoryId]/[postId]/[slug].js
// المسار: pages/[categoryId]/[postId]/[slug].js
// الوصف: تم تحديث هذه الصفحة لتكون الصفحة الأساسية للروابط القديمة التسعة فقط.
// ====================================================================================================

import React, { Fragment } from 'react';
import Head from 'next/head';
import Navbar from '../../../components/Navbar/Navbar';
import PageTitle from '../../../components/pagetitle/PageTitle';
import Footer from '../../../components/footer/Footer';
import Scrollbar from '../../../components/scrollbar/scrollbar';
import ServiceSidebar from '../../../components/ServiceSidebar/ServiceSidebar';
import guides from '../../../api/guides';
import locations from '../../../api/locations';

const GuideContent = ({ guide }) => (
    <div className="wpo-service-single-wrap">
        <div className="wpo-service-single-content">
            <div className="wpo-service-single-content-des" dangerouslySetInnerHTML={{ __html: guide.content }} />
        </div>
    </div>
);

const LocalServiceContent = ({ location, serviceType }) => (
     <div className="wpo-service-single-wrap">
        <div className="wpo-service-single-content">
            <div className="wpo-service-single-content-des">
                <h2>{serviceType} i {location.name}</h2>
                <p>Detta är en sida för {serviceType.toLowerCase()} i {location.name}. Vi erbjuder kompletta och säkra lösningar för företag i området.</p>
                <p>{location.description || ''}</p>
            </div>
        </div>
    </div>
);

const LegacyUrlPage = ({ content, type }) => {
    if (!content) {
        return <div>Innehållet kunde inte hittas.</div>;
    }

    const pageTitle = content.title || `Företagsflytt ${content.name}`;
    const metaDescription = content.metaDescription || `Information om våra tjänster i ${content.name}`;

    return (
        <Fragment>
            <Head>
                <title>{pageTitle} | Flyttdirekt.se</title>
                <meta name="description" content={metaDescription} />
            </Head>
            <Navbar />
            <PageTitle pageTitle={pageTitle} pagesub={type === 'guide' ? 'Guide' : 'Lokal Tjänst'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            {type === 'guide' && <GuideContent guide={content} />}
                            {type === 'local-service' && <LocalServiceContent location={content} serviceType="Företagsflytt" />}
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
    // قائمة نهائية بالروابط القديمة التي نريد دعمها كصفحات أساسية
    const legacyPathsToKeep = [
      '/17/28/vad-kostar-flyttfirma-stockholm',
      '/17/24/guide-till-pianons-vikt',
      '/17/16/kontorsflytt-upplands-vasby',
      '/17/17/kontorsflytt-bromma',
      '/17/27/rutavdrag-flyttfirma-guide',
      '/17/18/basta-flyttfirman-stockholm-tips',
      '/17/29/flyttstad-checklista-guide',
      '/17/20/flytthjalp-guide-goteborg-stockholm',
      '/17/21/guide-till-pianoflytt',
    ];

    const paths = legacyPathsToKeep.map(p => {
        const parts = p.split('/').filter(Boolean);
        return {
            params: {
                categoryId: parts[0],
                postId: parts[1],
                slug: parts[2]
            }
        };
    });

    return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
    const { slug } = params;
    let content = null;
    let type = null;

    // البحث في الأدلة
    const guide = guides.find(g => g.slug === slug);
    if (guide) {
        content = guide;
        type = 'guide';
    } else {
        // البحث في الخدمات المحلية
        if (slug.startsWith('kontorsflytt-')) {
            const locationSlug = slug.replace('kontorsflytt-', '');
            const location = locations.find(l => l.slug === locationSlug);
            if (location) {
                content = location;
                type = 'local-service';
            }
        }
    }

    if (!content) {
        return { notFound: true };
    }

    return {
        props: { content, type },
        revalidate: 60,
    };
}

export default LegacyUrlPage;