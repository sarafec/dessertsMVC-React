import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './Landing';
import Recipe from './Recipe';

/** ROUTING **/
const Main = () => (
	<main>
	<Switch>
		<Route exact path='/dessertsMVC-React/' component={Landing} />
		<Route path='/dessertsMVC-React/recipe' component={Recipe} />
	</Switch>
	</main>
)

export default Main;