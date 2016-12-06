import React from 'react';
import NavBar from './nav_bar'

const App = ({children}) => {
	return (
		<content className="full-page">
			<NavBar />
			<div className="main-content">
				{children}
			</div>
		</content>
	)
};

export default App;