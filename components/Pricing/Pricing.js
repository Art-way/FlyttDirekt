import React from 'react'
import Link from "next/link";

const Pricing = (props) => {

    return (
        <section className="wpo-pricing-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className="wpo-section-title">
                            <h2>Våra Pris-exempel</h2>
                            <p>Vi erbjuder transparent och konkurrenskraftig prissättning. Välj det paket som passar dig bäst eller begär en skräddarsydd offert.</p>
                        </div>
                    </div>
                </div>
                <div className="pricing-grids clearfix">
                    <div className="grid">
                        <div className="type">
                            <h5>Lilla Flytten</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">fr. 3500 <small>kr</small></h3>
                                <p>Efter RUT-avdrag</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>För 1-2 rum & kök</li>
                                <li>2 flyttgubbar & 1 lastbil</li>
                                <li>Transport & Bärhjälp</li>
                                <li>Ansvarsförsäkring</li>
                                <li>-</li>
                            </ul>
                            <Link href="/kontakt" className="get-started">Begär Offert</Link>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>Stora Flytten</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">fr. 7000 <small>kr</small></h3>
                                <p>Efter RUT-avdrag</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>För 3-5 rum & kök</li>
                                <li>3 flyttgubbar & 1 lastbil</li>
                                <li>Transport & Bärhjälp</li>
                                <li>Packhjälp (Valfritt)</li>
                                <li>Ansvarsförsäkring</li>
                            </ul>
                            <Link href="/kontakt" className="get-started">Begär Offert</Link>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="type">
                            <h5>Allt Inkluderat</h5>
                        </div>
                        <div className="pricing-header">
                            <div>
                                <h3 className="price">Offert</h3>
                                <p>Kontakta oss</p>
                            </div>
                        </div>
                        <div className="pricing-body">
                            <ul>
                                <li>Komplett lösning</li>
                                <li>Packning & Uppackning</li>
                                <li>Flytthjälp & Transport</li>
                                <li>Flyttstädning</li>
                                <li>Magasinering (Valfritt)</li>
                            </ul>
                            <Link href="/kontakt" className="get-started">Begär Offert</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;