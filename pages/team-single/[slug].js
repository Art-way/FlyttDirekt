import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useRouter } from 'next/router';
import Team from '../../api/team';
import Footer from '../../components/footer/Footer.js';
import Image from 'next/image';
import Head from 'next/head';

const TeamSinglePage = (props) => {
    const router = useRouter();
    const TeamDetails = Team.find(item => item.slug === router.query.slug);

    if (!TeamDetails) {
        return <div>Laddar teammedlem...</div>;
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <Head>
                <title>{TeamDetails.name} - {TeamDetails.title} | Flyttdirekt.se</title>
                <meta name="description" content={`Lär känna ${TeamDetails.name}, vår ${TeamDetails.title} på Flyttdirekt. Läs om hens erfarenhet och expertis.`} />
            </Head>
            <Navbar hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={TeamDetails.name} pagesub={TeamDetails.title} />
            <div className="team-pg-area section-padding">
                <div className="container">
                    <div className="team-info-wrap">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="team-info-img">
                                    <Image src={TeamDetails.tImg} alt={TeamDetails.name} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="team-info-text">
                                    <h2>{TeamDetails.name}</h2>
                                    <ul>
                                        <li>Position: <span>{TeamDetails.title}</span></li>
                                        <li>Erfarenhet:<span>10+ År</span></li>
                                        <li>Ansvar:<span>Kundkontakt & Projektledning</span></li>
                                        <li>Adress:<span>Stockholm, Sverige</span></li>
                                        <li>Telefon:<span>08-123 45 678</span></li>
                                        <li>Email:<span>info@flyttdirekt.se</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="exprience-area">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="exprience-wrap">
                                    <h2>Personlig Erfarenhet</h2>
                                    <p>Med över ett decennium i flyttbranschen har {TeamDetails.name.split(' ')[0]} en gedigen erfarenhet av att hantera alla typer av flyttprojekt. Passionen ligger i att hitta den bästa och mest effektiva lösningen för varje unik kund, och att se till att varje flytt blir en positiv upplevelse.</p>
                                    <p>Fokus ligger alltid på tydlig kommunikation och noggrann planering, vilket är nyckeln till en lyckad och stressfri flytt. {TeamDetails.name.split(' ')[0]} är stolt över att vara en del av ett team som sätter kvalitet och kundnöjdhet i första rummet.</p>
                                </div>
                                <div className="wpo-contact-area ex-wiget">
                                    <h2>Kontakta Mig</h2>
                                    <div className="quote-form">
                                        <form onSubmit={SubmitHandler}>
                                            <div className="form-group half-col">
                                                <input type="text" className="form-control" placeholder="Ditt Namn:" name="name" />
                                            </div>
                                            <div className="form-group half-col">
                                                <input type="email" className="form-control" placeholder="Din E-post:" name="email" />
                                            </div>
                                            <div className="form-group full-col">
                                                <textarea className="form-control" name="note" placeholder="Ditt meddelande..."></textarea>
                                            </div>
                                            <div className="form-group full-col">
                                                <button className="btn theme-btn" type="submit"><i className="fa fa-angle-double-right" aria-hidden="true"></i> Skicka meddelande</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default TeamSinglePage;