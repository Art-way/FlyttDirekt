import React from 'react';
import cimg from '/public/images/contact.jpg';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import the ElfsightForm component with SSR turned off
const ElfsightForm = dynamic(
    () => import('../ElfsightForm/ElfsightForm'),
    { ssr: false }
);

const Appointment = () => {

    return (
        <section className="wpo-contact-section section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <h2>Begär en kostnadsfri offert</h2>
                                </div>
                                <ElfsightForm />
                                <div className="border-style"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-contact-img">
                                <Image src={cimg} alt="Kontakta Flyttdirekt" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment;
