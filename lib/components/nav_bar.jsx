import React from 'react';
import { withRouter } from 'react-router';

const NavBar = ({router}) => {
	let path = router.location.pathname
	let main = (path.indexOf("about")=== -1 ? " selected" : "")
	let about = (path.indexOf("about") > 0 ? " selected" : "")

	return (
		<nav className={"nav-container"}>
			<div className="link-container"
					 onClick={() => {
					 	router.push("/")
					 }}>
				<span className={"link-text" + main}>Main</span>
			</div>
			<div className="name-container">
				<span className="nav-name">MANNING</span>
			</div>
			<div className={"link-container"}
					 onClick={() => {
					 	router.push("/about")
					 }}
			>
				<span className={"link-text" + about}>About</span>
			</div>
		</nav>)
};

export default withRouter(NavBar);