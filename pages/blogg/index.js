import React, { Fragment } from 'react';
import PageTitle from '../../components/pagetitle/PageTitle';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';
import BlogList from '../../components/BlogList/BlogList';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Head from 'next/head';

const BlogPage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>Blogg - Flyttips och Guider | Flyttdirekt.se</title>
                <meta name="description" content="Läs våra senaste blogginlägg fyllda med tips och guider för en enklare och smidigare flytt. Allt från packningstips till checklistor." />
            </Head>
            <Navbar />
            <PageTitle pageTitle='Vår Blogg' pagesub="Blogg" />
            <BlogList/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPage;