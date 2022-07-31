import React from 'react';

const AboutPage = () => {

	return (
			<content className="about-page">
				<section className="small-blurb-container">
					<span className="blurb">
						Full stack engineer. Passionate about tooling, bundle optimization, and building a better web. Bagel connoisseur.
					</span>
				</section>
				<section className="image-container">
					<img className='about-image' src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1659149636/alex-image_fmxjwh.jpg"/>
				</section>
				<content className="main-content-about">
					<h2 className="name-title">Alex Manning</h2>
					<p className="about-info-paragraph">
                                            I am a Tech Lead, at <a href="https://block.xyz">Block</a>, living in the Bay Area. I have a strong history of building products from scratch, and a passion for all things Web.
					</p> 
					<p className="about-info-paragraph">
                                          When I am not programming, I am playing with my son, collecting records, reading whatever fiction I can get my hands on, following baseball, and probably watching a bit too much Netflix.
					</p>
					<content className="contact-link-container">
						<span className="contact-title">Let's work together</span>
						<div className="link-group">
							<a className="contact-link" href="https://github.com/alexandersmanning" target="_blank" >
								<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1481004816/github-logo_avulo9.png" alt="Github"/>
							</a>
							<a className="contact-link" href="http://www.alexandersmanning.com/resume.pdf" target="_blank" >
								<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_64/v1484846406/resume-icon-png-10_xpjtpf.png" alt="Resume"/>
							</a>
							<a className="contact-link" href="https://www.linkedin.com/in/alexandersmanning/" target="_blank" >
								<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1481004820/linkedin-logo_ruddep.png" alt="LinkedIn"/>
							</a>
							
						</div>
					</content>
			</content>
		</content>
	)
};

export default AboutPage;
