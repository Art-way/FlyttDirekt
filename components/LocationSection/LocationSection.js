
// ====================================================================================================
// File: components/LocationSection/LocationSection.js
// المسار: components/LocationSection/LocationSection.js
// الوصف: مكون جديد لعرض شبكة من المدن مع روابط لصفحات الخدمات المحلية.
// ====================================================================================================

import React from 'react';
import Link from 'next/link';
import locations from '../../api/locations';

const LocationSection = () => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        // استخدام نفس كلاسات التنسيق من قسم "WorkSection" للحفاظ على تناسق التصميم
        <section className="wpo-work-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-md-12">
                        <div className="wpo-section-title">
                            <span>Våra Områden</span>
                            <h2>Här Jobbar Vi</h2>
                            <p>Vi är stolta över att erbjuda våra professionella flyttjänster i hela Stockholmsregionen. Hitta din ort nedan och begär en kostnadsfri offert idag.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        {/* عرض أول 8 مدن في الصفحة الرئيسية للحفاظ على تصميم نظيف */}
                        {locations.slice(0, 8).map((location, litem) => (
                            <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={litem}>
                                <div className="wpo-work-item">
                                    <div className="wpo-work-text">
                                        <h3><Link onClick={ClickHandler} href={`/flytthjalp/${location.slug}`}>{location.name}</Link></h3>
                                        <p>Flytthjälp & Städ</p>
                                        <Link className="read-more" onClick={ClickHandler} href={`/flytthjalp/${location.slug}`}>Begär Offert</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationSection;