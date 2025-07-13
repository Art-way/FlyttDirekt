import React from 'react';
import Link from "next/link";
import Services from '../../api/service';
import blogs from '../../api/blogs'; // Använder de svenska blogginläggen
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Importera bilder direkt här
import aboutWidgetImg from '/public/images/blog/about-widget.jpg';

// Dynamically import the ElfsightForm component with SSR turned off
const ElfsightForm = dynamic(
    () => import('../ElfsightForm/ElfsightForm'),
    { ssr: false }
);


const SubmitHandler = (e) => {
    e.preventDefault()
}

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = (props) => {
    // Skapa en filtrerad och unik lista av de 6 första bloggarna för "Senaste Inlägg"
    const recentBlogs = [...new Map(blogs.map(item => [item.slug, item])).values()].slice(0, 5);
    
    // Använd de 6 första tjänsterna för kategorier
    const serviceCategories = Services.slice(0, 6);

    return (
        <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
            <div className="blog-sidebar">
                <div className="widget about-widget">
                    <div className="img-holder">
                        <Image src={aboutWidgetImg} alt="Flyttdirekt Blogg" />
                    </div>
                    <h4>Flyttdirekt.se</h4>
                    <p>Välkommen till vår blogg! Här delar vi med oss av tips, guider och nyheter för en enklare flytt.</p>
                    <div className="social">
                        <ul className="clearfix">
                            <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                            <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                            <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                        </ul>
                    </div>
                    <div className="aw-shape">
                    </div>
                </div>
                <div className="widget search-widget">
                    <form onSubmit={SubmitHandler}>
                        <div>
                            <input type="text" className="form-control" placeholder="Sök i bloggen..." />
                            <button type="submit"><i className="ti-search"></i></button>
                        </div>
                    </form>
                </div>
                <div className="widget category-widget">
                    <h3>Kategorier</h3>
                    <ul>
                        {serviceCategories.map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href="/service-single/[slug]" as={`/service-single/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget recent-post-widget">
                    <h3>Senaste Inlägg</h3>
                    <div className="posts">
                        {recentBlogs.map((blog, bl) => (
                            <div className="post" key={bl}>
                                <div className="img-holder">
                                    <Image src={blog.screens} alt={blog.title} />
                                </div>
                                <div className="details">
    <h4><Link onClick={ClickHandler} href='/blogg/[slug]' as={`/blogg/${blog.slug}`}>{blog.title}</Link></h4>
                                    <span className="date">{blog.create_at}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="widget tag-widget">
                    <h3>Taggar</h3>
                    <ul>
                        <li><Link onClick={ClickHandler} href="/blogg">Flyttips</Link></li>
                        <li><Link onClick={ClickHandler} href="/blogg">Packning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blogg">Städning</Link></li>
                        <li><Link onClick={ClickHandler} href="/blogg">RUT-avdrag</Link></li>
                        <li><Link onClick={ClickHandler} href="/blogg">Magasinering</Link></li>
                        <li><Link onClick={ClickHandler} href="/blogg">Checklista</Link></li>
                    </ul>
                </div>
                <div className="widget">
                    <ElfsightForm />
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>Hur kan vi<br /> hjälpa dig?</h2>
                    <p>Behöver du professionell flytthjälp? Kontakta oss idag för en kostnadsfri offert och personlig service.</p>
                    <Link onClick={ClickHandler} href="/kontakt">Kontakta Oss</Link>
                </div>
            </div>
        </div>
    )
}

export default BlogSidebar;
