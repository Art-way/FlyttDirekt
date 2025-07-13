import React from 'react'
import Services from '../../api/service';
import Link from  'next/link'
import Image from 'next/image';
import ElfsightForm from '../../components/ElfsightForm/ElfsightForm';

const ServiceSidebar = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return (
        <div className="col-lg-4 col-md-8">
            <div className="wpo-single-sidebar">
                <div className="wpo-service-widget widget">
                    <h2>Alla Tjänster</h2>
                    <ul>
                        {Services.slice(0,6).map((service, Sitem) => (
                            <li key={Sitem}><Link onClick={ClickHandler} href="/[slug]" as={`/${service.slug}`}>{service.sTitle}</Link></li>
                        ))}
                    </ul>
                </div>
                <div className="widget">
                    <ElfsightForm/>
                </div>
                <div className="wpo-contact-widget widget">
                    <h2>Hur kan vi<br/> hjälpa dig?</h2>
                    <p>Oavsett dina behov, är vi här för att hjälpa till. Kontakta oss för en kostnadsfri offert och personlig service.</p>
                    <Link href="/kontakt">Kontakta Oss</Link>
                </div>
            </div>
        </div>

    )
}

export default ServiceSidebar;
