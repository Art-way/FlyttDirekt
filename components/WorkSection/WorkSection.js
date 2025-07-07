import React from 'react';
import wImg1 from '/public/images/work/1.jpg';
import wImg2 from '/public/images/work/2.jpg';
import wImg3 from '/public/images/work/3.jpg';
import Image from 'next/image';

const WorkSection = (props) => {
    return (
        <section className="wpo-work-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Så fungerar det</h2>
                            <p>Vår process är utformad för att vara så enkel och smidig som möjligt för dig. Följ tre enkla steg.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-work-wrap">
                    <div className="row">
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-img">
                                    <Image src={wImg1} alt="Boka flyttfirma online"/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2>1. Boka enkelt online</h2>
                                </div>
                                <div className="visible-text">
                                    <span>1</span>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-text">
                                    <h2>2. Vi sköter flytten</h2>
                                </div>
                                <div className="visible-text">
                                    <span>2</span>
                                </div>
                                <div className="wpo-work-img">
                                    <Image src={wImg2} alt="Professionell flytthjälp"/>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4 col-md-6 col-12">
                            <div className="wpo-work-item">
                                <div className="wpo-work-img">
                                    <Image src={wImg3} alt="Njut av ditt nya hem"/>
                                </div>
                                <div className="wpo-work-text">
                                    <h2>3. Njut av ditt nya hem</h2>
                                </div>
                                <div className="visible-text">
                                    <span>3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WorkSection;