// ====================================================================================================
// File: components/ServiceSidebar/ServiceSidebar.js
// المسار: components/ServiceSidebar/ServiceSidebar.js
// الوصف: مكون الشريط الجانبي المصحح والموحد لصفحات الخدمات.
// ====================================================================================================

import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the ElfsightForm component with SSR turned off
const ElfsightForm = dynamic(
    () => import('../ElfsightForm/ElfsightForm'),
    { ssr: false }
);

const ServiceSidebar = () => {
    const services = [
        { title: 'Flytthjälp', slug: '/flytthjalp' },
        { title: 'Flyttstädning', slug: '/flyttstadning' },
        { title: 'Magasinering', slug: '/magasinering' },
        { title: 'Företagsflytt', slug: '/foretagsflytt' },
        { title: 'Pianoflytt', slug: '/pianoflytt' }
    ];

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>Alla Tjänster</h2>
                    <ul>
                        {services.map((service, index) => (
                            <li key={index}>
                                <Link href={service.slug}>{service.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="widget">
                    <h2 style={{paddingBottom: '20px'}}>Få en offert direkt</h2>
                    <p style={{marginBottom: '20px'}}>Fyll i dina uppgifter så återkommer vi snabbt med ett kostnadsfritt prisförslag.</p>
                    <ElfsightForm />
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>Redo att boka?</h2>
                    <p>Vi är redo att hjälpa dig. Kontakta oss idag för en kostnadsfri offert och personlig service du kan lita på.</p>
                    <Link href="/kontakt" className="theme-btn">Kontakta Oss</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceSidebar;
