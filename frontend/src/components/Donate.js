import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Nav from './common/Nav';
import '../styles/donate.css';

const Donate = ({ items, setItems }) => {
	const [itemName, setItemName] = useState('');
	const [category, setCategory] = useState('clothes');
	const [address, setAddress] = useState('');
	const [contactNo, setContactNo] = useState('');
	const [picture, setPicture] = useState('');
	const [shouldRedirect, setShouldRedirect] = useState(false);

	/**
	 *
	 * add another donate item
	 */
	const donateItem = () => {
		let newItem;
		if (
			itemName !== '' &&
			address !== '' &&
			contactNo !== '' &&
			picture !== ''
		) {
			newItem = {
				itemName,
				category,
				address,
				contactNo,
				picture
			};
			const temp = [...items, newItem];
			setItems(temp);
			setShouldRedirect(true);
		}
	};

	return (
		<div className="dnt-container">
			<Nav />
			<div className="dnt-subcontainer">
				<div className="dnt-headlines">
					<h2>Interested in donating something!?</h2>
					<h3>You are at the right place!</h3>
					<h4>Just fill the form below</h4>
				</div>
				<div className="dnt-inputs">
					<div className="dnt-field">
						<label htmlFor="Item Name">Item Name </label>
						<input
							type="text"
							placeholder="Name of item..."
							onChange={e => setItemName(e.target.value)}
						/>
					</div>
					<div className="dnt-field">
						<label htmlFor="Category">Category </label>
						<div className="dnt-sorting-options">
							<select onChange={e => setCategory(e.target.value)}>
								<option value="clothes">Clothes</option>
								<option value="shoes">Shoes</option>
								<option value="electronics">Electronic</option>
							</select>
						</div>
					</div>
					<div className="dnt-field">
						<label htmlFor="Address">Address</label>
						<input
							type="text"
							placeholder="Your Address..."
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<div className="dnt-field">
						<label htmlFor="Contact Number">Contact Number </label>
						<input
							type="text"
							placeholder="Phone Number..."
							onChange={e => setContactNo(e.target.value)}
						/>
					</div>
					<div className="dnt-field">
						<label htmlFor="Picture">Picture </label>
						<div className="file">
							<input
								type="file"
								onChange={e => setPicture(e.target.value)}
							/>
						</div>
					</div>
				</div>
				<div className="dnt-submit">
					<button onClick={donateItem}>Submit</button>
				</div>
			</div>
			{shouldRedirect && <Redirect to="/" />}
		</div>
	);
};

export default Donate;
