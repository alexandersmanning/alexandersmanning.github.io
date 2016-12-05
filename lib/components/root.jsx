import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

//children
import App from './app';
import MainPage from './main-page'

const Root = () => {
	return (
		<Router history={hashHistory}>
			<Route path="/" component={App}>
			<IndexRoute component={MainPage} />
			</Route>
		</Router>
	)
};

export default Root;