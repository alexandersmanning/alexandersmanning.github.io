import React from 'react';

const FoundSounds = () => {
	return (
		<content className="project-page">
			<section className="title-blurb">
				<span className="blurb">
				Found Sounds
				</span>
				<span className="sub-blurb">
					Found Sounds is a way of visualizing upcoming concerts in San Francisco, with the idea that users will be able to see local shows more regularly, and be able to keep track of all their upcoming concerts.
				</span>
			</section>
			<section className="project-description">
				<section className="small-blurb-container">
					<span className="small-blurb">
						Visualizing concerts through Google Maps
					</span>
					<img className='blurb-image' src=""/>
					<p className="blurb-info-paragraph">
						Google Maps API is used to provide a visual represenatation of where concerts are in the area. As the bounds of the map change or date ranges are added, the markers on the map will instantaneously update.
					</p>
				</section>
				<span className="small-blurb">
						Venue and Show Information
					</span>
					<img className='blurb-image' src=""/>
					<p className="blurb-info-paragraph">
						Users have the ability to see all shows for a venue by clicking on a specific map marker.
					</p>
				</section>
			</section>
		</content>
	)
};

export default FoundSounds