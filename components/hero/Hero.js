import React from "react";
import Link from "next/link";
import VideoModal from '../ModalVideo/VideoModal'
import simg1 from '/public/images/slider/right-img.jpg' // سنحتفظ بالصورة حالياً
import Image from "next/image";

const Hero = () => {
    return (
        <section className="wpo-hero-section-1">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-5 col-lg-5 col-12">
                        <div className="wpo-hero-section-text">
                            <div className="wpo-hero-title">
                                <h2>Din Partner för en Stressfri Flytt</h2>
                            </div>
                            <div className="wpo-hero-subtitle">
                                <p>Vi är en certifierad flyttfirma som erbjuder professionella och trygga flytt- och städtjänster för dig och ditt företag.</p>
                            </div>
                            <div className="btns">
                                <Link href="/kontakt" className="btn theme-btn"><i className="fa fa-angle-double-right"
                                    aria-hidden="true"></i> Begär Kostnadsfri Offert</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-vec">
                <div className="right-img">
                    <div className="r-img">
                        <Image src={simg1} alt="Flyttfirma Stockholm" />
                    </div>
                </div>
            </div>
            <div className="pop-up-video">
                <div className="video-holder">
                    <VideoModal/>
                </div>
            </div>
        </section>
    )
}

export default Hero;