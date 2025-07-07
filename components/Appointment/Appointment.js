import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import cimg from '/public/images/contact.jpg';
import Image from 'next/image';

const Appointment = () => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: ''
    });
    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));
    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            // Here you would typically send the form data to your backend
            alert('Tack för din förfrågan! Vi återkommer inom kort.');
            setForms({
                name: '',
                email: '',
                subject: '',
                phone: '',
                message: ''
            })
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className="wpo-contact-section section-padding">
            <div className="container">
                <div className="wpo-contact-section-wrapper">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-12">
                            <div className="wpo-contact-form-area">
                                <div className="wpo-section-title-s2">
                                    <h2>Begär en kostnadsfri offert</h2>
                                </div>
                                <form onSubmit={(e) => submitHandler(e)} className="contact-validation-active">
                                    <div className="row">
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Ditt namn" />
                                            </div>
                                            {validator.message('name', forms.name, 'required|alpha_space')}
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Din e-post" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <input
                                                    className="form-control"
                                                    value={forms.phone}
                                                    type="phone"
                                                    name="phone"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    placeholder="Ditt telefonnummer" />
                                                {validator.message('phone', forms.phone, 'required|phone')}
                                            </div>
                                        </div>
                                        <div className="col col-lg-6 col-12">
                                            <div className="form-field">
                                                <select className="form-control"
                                                    onBlur={(e) => changeHandler(e)}
                                                    onChange={(e) => changeHandler(e)}
                                                    value={forms.subject}
                                                    type="text"
                                                    name="subject">
                                                    <option>Välj en tjänst</option>
                                                    <option>Flytthjälp</option>
                                                    <option>Flyttstädning</option>
                                                    <option>Magasinering</option>
                                                    <option>Företagsflytt</option>
                                                    <option>Pianoflytt</option>
                                                    <option>Annat</option>
                                                </select>
                                                {validator.message('subject', forms.subject, 'required')}
                                            </div>
                                        </div>
                                        <div className="col fullwidth col-lg-12 ">
                                            <textarea
                                                className="form-control"
                                                onBlur={(e) => changeHandler(e)}
                                                onChange={(e) => changeHandler(e)}
                                                value={forms.message}
                                                type="text"
                                                name="message"
                                                placeholder="Beskriv ditt ärende här...">
                                            </textarea>
                                            {validator.message('message', forms.message, 'required')}
                                        </div>
                                    </div>
                                    <div className="submit-area">
                                        <button type="submit" className="theme-btn"><i className="fa fa-angle-double-right"
                                            aria-hidden="true"></i> Skicka förfrågan</button>
                                    </div>
                                </form>
                                <div className="border-style"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="wpo-contact-img">
                                <Image src={cimg} alt="Kontakta Flyttdirekt" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Appointment;