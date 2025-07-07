import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '/public/images/testimonial.jpg'
import Image from "next/image";

const settings = {
    dots: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
};

const testimonial = [
    {
        Des: "Otroligt proffsiga och effektiva! Hela flytten från vår trea i Vasastan gick smidigare än vi någonsin kunnat ana. Killarna var trevliga och försiktiga med alla våra saker. Rekommenderas varmt!",
        Title: 'Familjen Eriksson',
        Sub: "Bohagsflytt, Stockholm",
    },
    {
        Des: "Vi anlitade Flyttdirekt för vår kontorsflytt. Allt fungerade perfekt från första kontakt till slutförd flytt. Minimalt driftstopp och superbra service. Vi är mycket nöjda.",
        Title: 'Johan Andersson',
        Sub: "VD, Techbolaget AB",
    },
    {
        Des: "Flyttstädningen var helt perfekt, skinande rent och inga anmärkningar på besiktningen. Det var så skönt att kunna lämna över den delen och fokusera på det nya hemmet. Tack!",
        Title: 'Maria Persson',
        Sub: "Flyttstädning, Göteborg",
    }
]

const Testimonial = () => {
    return (
        <section className="wpo-testimonials-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Vad Våra Kunder Säger</h2>
                            <p>Vi är stolta över våra nöjda kunder. Läs några av deras omdömen om oss.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-testimonials-wrap">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="wpo-testimonials-img">
                                <Image src={ts1} alt="Nöjda kunder hos Flyttdirekt" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="wpo-testimonials-text">
                                <div className="quote">
                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                </div>
                                <div className="wpo-testimonials-slide owl-carousel">
                                    <Slider {...settings}>
                                        {testimonial.map((tesmnl, tsm) => (
                                            <div className="wpo-testimonials-slide-item" key={tsm}>
                                                <p>{tesmnl.Des}</p>
                                                <h5>{tesmnl.Title}</h5>
                                                <span>{tesmnl.Sub}</span>
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;