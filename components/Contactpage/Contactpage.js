import React from 'react';
import ElfsightForm from '../ElfsightForm/ElfsightForm';

const Contactpage = () => {

    return(
        <section className="wpo-contact-pg-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-10 offset-lg-1">
                        <div className="office-info">
                            <div className="row">
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-placeholder"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Adress</h2>
                                            <p>Exempelgatan 1, 123 45 Stockholm, Sverige</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-email"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>E-post</h2>
                                            <p>kontakt@flyttdirekt.se</p>
                                            <p>support@flyttdirekt.se</p>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col col-xl-4 col-lg-6 col-md-6 col-12">
                                    <div className="office-info-item">
                                        <div className="office-info-icon">
                                            <div className="icon">
                                                <i className="fi flaticon-phone-call"></i>
                                            </div>
                                        </div>
                                        <div className="office-info-text">
                                            <h2>Telefon</h2>
                                            <p>Växel: 08-123 45 678</p>
                                            <p>Support: 08-123 45 679</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className="wpo-contact-title">
                            <h2>Har du några frågor?</h2>
                            <p>Fyll i formuläret nedan så återkommer vi till dig så snart som möjligt. Du kan även nå oss via telefon eller e-post.</p>
                        </div>
                        <div className="wpo-contact-form-area">
                            <ElfsightForm />
                        </div>
                    </div>                
                </div>
            </div> 
            <section className="wpo-contact-map-section">
                <div className="wpo-contact-map">
                    {/* Updated Google Maps iframe for Stockholm */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.897447288289!2d18.06892631604988!3d59.32932348169837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e6e5a4959b%3A0x8f2d65a2a7a7d4d!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2s!4v1671234567890"></iframe>
                </div>
            </section>
        </section>
     )
}

export default Contactpage;
