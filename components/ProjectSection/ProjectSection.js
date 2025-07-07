import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Projects from '../../api/project'
import Link from "next/link";
import Image from "next/image";

const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ProjectSection = () => {
    return (
        <section className="wpo-project-section section-padding">
            <div className="container-fluid">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Våra Projekt</h2>
                            <p>Här är ett urval av de flyttprojekt vi framgångsrikt har genomfört för våra nöjda kunder.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <div className="wpo-project-slider">
                            <Slider {...settings}>
                                {Projects.slice(0, 5).map((project, prj) => (
                                    <div className="item" key={prj}>
                                        <div className="single-work">
                                            <Image className="img-responsive" src={project.pImg} alt={project.title} />
                                            <div className="hover_layer">
                                                <div className="info">
                                                    <h3><Link onClick={ClickHandler} href='/project-single/[slug]' as={`/project-single/${project.slug}`}>{project.title}</Link></h3>
                                                    <p>{project.subTitle}</p>
                                                </div>
                                                <div className="details-btn">
                                                    <Link className="project-btn" onClick={ClickHandler} href='/project-single/[slug]' as={`/project-single/${project.slug}`}>+</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectSection;