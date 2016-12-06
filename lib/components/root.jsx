import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

//children
import App from './app';
import MainPage from './main-page'
import AboutPage from './about'

const Root = () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
			<IndexRoute component={MainPage} />
				<Route path="/about" component={AboutPage}/>
			</Route>
		</Router>
	)
};

export default Root;