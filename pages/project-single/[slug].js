import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle';
import Scrollbar from '../../components/scrollbar/scrollbar';
import { useRouter } from 'next/router';
import Projects from '../../api/project';
import Footer from '../../components/footer/Footer.js';
import Image from 'next/image';
import Head from 'next/head';

// Importera sidokomponenter
import ServiceSidebar from './sidebar'; // Vi återanvänder samma sidebar
import Benefits from './benefits';     // Vi återanvänder denna komponent men översätter den nedan

// Översätt Benefits-komponenten direkt här för enkelhetens skull
const ProjectBenefits = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const benefitsData = [
        { id: 'panel1', title: 'Noggrann Planering & Projektledning', content: 'Varje projekt börjar med en detaljerad plan och en dedikerad projektledare för att säkerställa att allt löper smidigt, enligt tidsplan och budget.'},
        { id: 'panel2', title: 'Säkerhet och Försäkring', content: 'Vi sätter alltid säkerheten först. Vår personal är utbildad i säker hantering och alla våra transporter är fullt försäkrade för din trygghet.'},
        { id: 'panel3', title: 'Modern Utrustning', content: 'Vi använder modern och anpassad utrustning, från specialbyggda flyttbilar till bärselar och skyddsmaterial, för att skydda dina ägodelar.'},
    ];

    return (
        <div className="wpo-benefits-section">
            <h2>Vår Projektmetod</h2>
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        {benefitsData.map(item => (
                            <div key={item.id} style={{marginBottom: '10px', border: '1px solid #eee', borderRadius: '5px'}}>
                               <div style={{padding: '15px', fontWeight: 'bold', cursor: 'pointer'}} onClick={() => handleChange(item.id)}>
                                   {item.title}
                               </div>
                               {expanded === item.id && <div style={{padding: '0 15px 15px'}}>{item.content}</div>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

const ProjectSinglePage = (props) => {
    const router = useRouter();
    const projectDetails = Projects.find(item => item.slug === router.query.slug);

    if (!projectDetails) {
        return <div>Laddar projekt...</div>;
    }

    return (
        <Fragment>
            <Head>
                <title>{projectDetails.title} | Våra Projekt | Flyttdirekt.se</title>
                <meta name="description" content={`Läs mer om vårt projekt: ${projectDetails.title} i ${projectDetails.subTitle}. Se hur vi hjälper våra kunder med professionella flyttlösningar.`} />
            </Head>
            <Navbar hclass={'wpo-header-style-5'} />
            <PageTitle pageTitle={projectDetails.title} pagesub={'Våra Projekt'} />
            <section className="wpo-service-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="wpo-service-single-wrap">
                                <div className="wpo-service-single-img">
                                    <Image src={projectDetails.pImg} alt={projectDetails.title} />
                                </div>

                                <div className="wpo-project-details-list">
                                    <div className="row">
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Kund</span>
                                                <h2>Privat/Företag</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text-3">
                                                <span>Plats</span>
                                                <h2>{projectDetails.subTitle}</h2>
                                            </div>
                                        </div>
                                        <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                                            <div className="wpo-project-details-text">
                                                <span>Datum</span>
                                                <h2>2023</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="wpo-service-single-content">
                                    <div className="wpo-service-single-content-des">
                                        <h2>Om Projektet: {projectDetails.title}</h2>
                                        <p>{projectDetails.description}</p>
                                        <p>Detta projekt är ett exempel på hur vi på Flyttdirekt tar ett helhetsgrepp för att säkerställa en lyckad flytt. Från den första kontakten och planeringen till den sista kartongen är på plats, är vårt fokus alltid på kundens trygghet och nöjdhet.</p>
                                        <div className="wpo-service-single-sub-img">
                                            <ul>
                                                <li><Image src={projectDetails.spImg1} alt="Projektbild 1" /></li>
                                                <li><Image src={projectDetails.spImg2} alt="Projektbild 2" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <ProjectBenefits />
                            </div>
                        </div>
                        <ServiceSidebar />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    );
};
export default ProjectSinglePage;