import React from 'react';
import Link from "next/link";
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import MobileMenu from '../MobileMenu/MobileMenu';
import Logo from '/public/images/logo.svg';
import Image from 'next/image';

const Header = (props) => {
    
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={props.topbarNone}>
            <HeaderTopbar />
            <div className={`wpo-site-header ${props.hclass}`}>
                <nav className="navigation navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                                <div className="mobail-menu">
                                    <MobileMenu />
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-6">
                                <div className="navbar-header">
                                    <Link onClick={ClickHandler} className="navbar-brand" href="/"><Image src={Logo}
                                        alt="Flyttdirekt Logo" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-1 col-1">
                                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                                    <button className="menu-close"><i className="ti-close"></i></button>
                                    <ul className="nav navbar-nav mb-2 mb-lg-0">
                                        <li><Link onClick={ClickHandler} href="/">Hem</Link></li>
                                        <li><Link onClick={ClickHandler} href="/om-oss/">Om Oss</Link></li>
                                        <li className="menu-item-has-children">
                                            <Link href="/#services">Tjänster</Link>
                                            <ul className="sub-menu">
                                                <li><Link onClick={ClickHandler} href="/flytthjalp/">Flytthjälp</Link></li>
                                                <li><Link onClick={ClickHandler} href="/flyttstadning/">Flyttstädning</Link></li>
                                                <li><Link onClick={ClickHandler} href="/magasinering/">Magasinering</Link></li>
                                                <li><Link onClick={ClickHandler} href="/foretagsflytt/">Företagsflytt</Link></li>
                                                <li><Link onClick={ClickHandler} href="/pianoflytt/">Pianoflytt</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link onClick={ClickHandler} href="/blogg/">Blogg</Link></li>
                                        <li><Link onClick={ClickHandler} href="/kontakt/">Kontakt</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-2 col-2">
                                <div className="header-right">
                                    <div className="close-form">
                                        <a onClick={ClickHandler} className="theme-btn" href="tel:08-12345678">
                                            <i className="fa fa-phone" aria-hidden="true"></i>
                                            <span>Få en kostnadsfri offert</span> 08-123 45 678
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;
