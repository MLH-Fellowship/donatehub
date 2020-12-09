import { useState } from 'react';
import Homepage from './components/Homepage';
import Donate from './components/Donate';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
	const [items, setItems] = useState([
		{
			itemName: `Shoes`,
			category: `shoes`,
			address: `House #123, BB Block`,
			contactNo: `123445677`,
			picture: ``
		}
	]);

	return (
		<>
			<Switch>
				<Route
					exact
					path="/donate"
					render={() => <Donate items={items} setItems={setItems} />}
				/>
				<Route
					exact
					path="/"
					render={() => <Homepage data={items} />}
				/>
				<Redirect to="/" />
			</Switch>
		</>
	);
}

export default App;
