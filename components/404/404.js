import React from 'react'
import Link from 'next/link'
import erimg from '/public/images/error-404.png' // سنحتفظ بالصورة لأنها مناسبة
import Image from 'next/image'

const Error = (props) => {
    const ClickHandler = () =>{
        window.scrollTo(10, 0);
     }

    return(
        <section className="error-404-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="content clearfix">
                            <div className="error">
                                <Image src={erimg} alt="Sidan hittades inte"/>
                            </div>
                            <div className="error-message">
                                <h3>Hoppsan! Sidan kunde inte hittas.</h3>
                                <p>Vi ber om ursäkt, men sidan du letar efter verkar inte finnas. Detta kan bero på att du skrivit in fel webbadress eller att sidan har flyttats.</p>
                                <Link onClick={ClickHandler} href="/" className="theme-btn"><i className='fi flaticon-house'></i> Tillbaka till startsidan</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Error;