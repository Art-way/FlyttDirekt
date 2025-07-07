import React from 'react';
import Link from 'next/link'
import BlogSidebar from '../BlogSidebar/BlogSidebar.js'
import VideoModal from '../ModalVideo/VideoModal'

import blogs from '../../api/blogs' // Använder våra svenska blogginlägg
import Image from 'next/image.js';

const ClickHandler = () =>{
    window.scrollTo(10, 0);
}

const BlogList = (props) => {
    return(
        <section className="wpo-blog-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                        <div className="wpo-blog-content">
                            {blogs.map((blog, bitem) => (
                                <div className={`post ${blog.blClass}`} key={bitem}>
                                    <div className="entry-media">
                                        <Image src={blog.screens} alt={blog.title}/>
                                        {blog.blClass === 'format-video' && <VideoModal />}
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi flaticon-user"></i> Av <Link onClick={ClickHandler} href="/om-oss">{blog.author}</Link> </li>
                                            <li><i className="fi flaticon-comment-white-oval-bubble"></i> Kommentarer {blog.comment} </li>
                                            <li><i className="fi flaticon-calendar"></i> {blog.create_at}</li>
                                        </ul>
                                    </div>
                                    <div className="entry-details">
    <h3><Link onClick={ClickHandler} href="/blogg/[slug]" as={`/blogg/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p>{blog.description}</p>
    <Link onClick={ClickHandler} href="/blogg/[slug]" as={`/blogg/${blog.slug}`} className="read-more">LÄS MER...</Link>
                                    </div>
                                </div>
                            ))}

                             <div className="pagination-wrapper pagination-wrapper-left">
                                <ul className="pg-pagination">
                                    <li>
                                        <Link href="/blogg" aria-label="Previous">
                                            <i className="fi ti-angle-left"></i>
                                        </Link>
                                    </li>
                                    <li className="active"><Link href="/blogg">1</Link></li>
                                    <li><Link href="/blogg">2</Link></li>
                                    <li>
                                        <Link href="/blogg" aria-label="Next">
                                            <i className="fi ti-angle-right"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    <BlogSidebar blLeft={props.blLeft}/>
                </div>
            </div>
        </section>
     )
}

export default BlogList;