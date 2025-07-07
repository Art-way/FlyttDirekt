import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import blogs from '../../api/blogs'
import Link from "next/link";
import Image from "next/image";

const settings = {
    // ... settings remain the same
};

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <section className="wpo-blog-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-6">
                        <div className="wpo-section-title-s2">
                            <h2>Från vår blogg</h2>
                            <p>De senaste nyheterna och de bästa tipsen för en lyckad flytt, direkt från våra experter.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-blog-wrap wpo-blog-slide owl-carousel">
                    <Slider {...settings}>
                        {blogs.map((blog, bl) => (
                            <div className="wpo-blog-item" key={bl}>
                                <div className="wpo-blog-img">
                                    <Image src={blog.screens} alt={blog.title} />
                                </div>
                                <div className="wpo-blog-text">
    <h2><Link onClick={ClickHandler} href='/blogg/[slug]' as={`/blogg/${blog.slug}`}>{blog.title}</Link></h2>
                                    <ul>
                                        <li><i className="fa fa-calendar-o" aria-hidden="true"></i> {blog.create_at}</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i> {blog.comment}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;