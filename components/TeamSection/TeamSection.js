import React from 'react'
import Link from 'next/link'
import Team from '../../api/team'
import Image from 'next/image';

const ClickHandler = () =>{
    window.scrollTo(10, 0);
 }

const TeamSection = (props) => {
    return(
        <section className="wpo-team-section section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-5">
                        <div className="wpo-section-title">
                            <h2>Möt Vårt Team</h2>
                            <p>Vår styrka ligger i vårt erfarna och engagerade team som alltid sätter kunden i första hand.</p>
                        </div>
                    </div>
                </div>
                <div className="wpo-team-wrap">
                    <div className="row">
                        {Team.map((team, aitem) => (
                            <div className="col col-lg-6 col-md-12 col-12" key={aitem}>
                                <div className="wpo-team-item">
                                    <div className="wpo-team-img">
                                        <Image src={team.tImg} alt={team.name}/>
                                    </div>
                                    <div className="wpo-team-text">
                                        <span>{team.title}</span>
                                        <h2><Link onClick={ClickHandler} href='/team-single/[slug]' as={`/team-single/${team.slug}`}>{team.name}</Link></h2>
                                        <div className="social">
                                            <ul>
                                                {/* Social links can be updated later if needed */}
                                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeamSection;