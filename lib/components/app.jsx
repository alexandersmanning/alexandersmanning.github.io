import React from 'react';

const App = ({children}) => {
	return (
		<content className="full-page">
			<nav className="nav-container">
				<div className="link-container">
					<span className="link-text">about</span>
				</div>
				<div className="name-container">
					<span className="nav-name">MANNING</span>
				</div>
				<div className="link-container">
					<span className="link-text">contact</span>
				</div>
			</nav>
			<div className="main-content">
				{children}
			</div>
		</content>
	)
};

export default App;