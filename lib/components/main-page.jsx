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
			— Alex Manning is a web developer, dad, and live music enthusiast living in the Bay Area
			</span>
		</section>
		<content className="main-content">
			<a className="project-content airdng"
				href="https://www.alexandersmanning.com/AirDnG" target="_blank">
				 <img className="project-image" 
									src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1483473944/network_4_n1uyey.png"
						/>
				<div className="project-overlay">
					<span className="project-name dark">
						AirDnG
					</span>
					<span className="front-project-description dark">
						metrics for AirBnB listings<br />
						(D3, React.js, Redux, Express.js, MongoDB, AWS)
					</span>
				</div>
			</a>
			<a className="project-content readmore"
				href="https://www.npmjs.com/package/read-more-react" target="_blank">
				 <img className="project-image" 
									src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1483472785/notebook_1_ethiae.png"
						/>
				<div className="project-overlay">
					<span className="project-name dark">
						Read More + React
					</span>
					<span className="front-project-description dark">
						npm package to intelligenty truncate text<br />
						(React.js)
					</span>
				</div>
			</a>
			<a className="project-content katamari" href="https://www.alexandersmanning.com/katamari" target="_blank">
				 <img className="project-image" 
									src="https://res.cloudinary.com/ddvdi1pie/image/upload/v1480902753/moon_1_o9pq01.png"
						/>
				<div className="project-overlay">
					<span className="project-name">
						Katamari
					</span>
					<span className="front-project-description">
						a calming, yet challenging, browser game<br />
						(jQuery, Howler.js, Easel.js)
					</span>
				</div>
			</a>
			
		</content>
	</content>
)}
export default MainPage;
