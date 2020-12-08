import { useState } from 'react';
import Homepage from './components/Homepage';
import Donate from './components/Donate';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
	const [items, setItems] = useState([
		{
			itemName: `Shoes`,
			itemPicture: `../images/shoe.png`
		},
		{
			itemName: `Shoes`,
			itemPicture: `../images/shoe.png`
		},
		{
			itemName: `Shoes`,
			itemPicture: `../images/shoe.png`
		},
		{
			itemName: `Shoes`,
			itemPicture: `../images/shoe.png`
		},
		{
			itemName: `Shoes`,
			itemPicture: `../images/shoe.png`
		},
		{
			itemName: `Shoes`,
			itemPicture: `../images/shoe.png`
		}
	]);

	return (
		<>
			<Switch>
				<Route exact path="/donate" render={() => <Donate />} />
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
