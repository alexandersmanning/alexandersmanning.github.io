import React from 'react';

const MainPage = () => {

	const outsidePage = (link) => {
		debugger
		window.location.assign(link)
	}


	return (
	<content className="main-page">
		<section className="title-blurb">
			<span className="blurb">
			— Alex Manning is a web developer, engineer, and live music enthusiast living in the Bay Area
			</span>
		</section>
		<content className="main-content">
			<a className="project-content found-sounds" href="http://www.foundsounds.live" target="_blank">
				 <img className="project-image" 
									src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1480899229/cassette_1_a0nwcj.png"
						/>
				<div className="project-overlay">
					<span className="project-name">
						Found Sounds
					</span>
				</div>
			</a>
			<a className="project-content airdng"
				href="http://www.alexandersmanning.com/AirDnG" target="_blank">
				 <img className="project-image" 
									src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1480917169/network_3_hctzry.png"
						/>
				<div className="project-overlay">
					<span className="project-name">
						AirDnG
					</span>
				</div>
			</a>
			<a className="project-content katamari" href="http://www.alexandersmanning.com/katamari" target="_blank">
				 <img className="project-image" 
									src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1480902753/moon_1_o9pq01.png"
						/>
				<div className="project-overlay">
					<span className="project-name">
						Katamari
					</span>
				</div>
			</a>
			
		</content>
	</content>
)}
export default MainPage;