import React from 'react';

const AboutPage = () => {

	return (
			<content className="about-page">
				<section className="small-blurb-container">
					<span className="blurb">
						Full stack web developer and engineer. Passionate about data, processes, and efficiency. Bagel connoisseur.
					</span>
				</section>
				<section className="image-container">
					<img className='about-image' src="http://res.cloudinary.com/ddvdi1pie/image/upload/v1481006493/Manning_fodipl.jpg"/>
				</section>
				<content className="main-content-about">
					<h2 className="name-title">Alex Manning</h2>
					<p className="about-info-paragraph">
						I am a former Industrial Engineering Manager who decided to pursue my true passion for programming and data analysis.
					</p> 
					<p className="about-info-paragraph">
						After 6 years of analyzing manufacturing data and managing numerous internal development projects, I realized I wanted to be on the other side of the conversation and create my own applications. Over the past year I have studied on my own and attended full time courses to make this dream a reality.
					</p>
					<p className="about-info-paragraph">
						As a developer I have worked on projects that touch on subjects I care deeply about, including music and statistics. Through <a href="http://www.foundsounds.live">Found Sounds</a>, I created an application where users could easily find upcoming concerts near them. Katamari provides an ever changing audiovisual experience, where ambient sounds are randomized through the collision of the balls. Finally, in <a href="http://www.airdng.info">AirDnG</a>, I applied my passion for data visualization to an analysis of AirBnB's listings for San Francisco. 
					</p>
					<p className="about-info-paragraph">
						I am currently looking for a Software Developer position where I can apply my programming skills to any and all problems that can be thrown at me.
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
							<a className="contact-link" href="https://angel.co/alexandersmanning" target="_blank" >
								<img className="contact-image" src="https://res.cloudinary.com/ddvdi1pie/image/upload/c_scale,w_64/v1481006209/69-angellist-128_hai6eu.png" alt="Angel List"/>
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