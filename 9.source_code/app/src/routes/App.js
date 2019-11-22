import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Service from '../containers/Service';

import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path='/login' component={Login} />
          			<Route exact path='/service' component={Service} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
  	</BrowserRouter>
);

export default App;

{/* <Router exact path='/login' component={Login} /> */}