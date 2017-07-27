import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Recipe from './Recipe';

const Main = () => (
	<main>
	<Switch>
		<Route exact path='/' component={Landing} />
		<Route path='/recipe' component={Recipe} />
	</Switch>
	</main>
)

export default Main;