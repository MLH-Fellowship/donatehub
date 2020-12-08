import Nav from './common/Nav';
import '../styles/donate.css';

const Donate = () => {
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
						<input type="text" placeholder="Name of item..." />
					</div>
					<div className="dnt-field">
						<label htmlFor="Item Name">Category </label>
						<div className="dnt-sorting-options">
							<select>
								<option value="clothes">Clothes</option>
								<option value="electronics">Electronic</option>
							</select>
						</div>
					</div>
					<div className="dnt-field">
						<label htmlFor="Item Name">Address </label>
						<input type="text" placeholder="Your Address..." />
					</div>
					<div className="dnt-field">
						<label htmlFor="Item Name">Contact Number </label>
						<input type="text" placeholder="Phone Number..." />
					</div>
					<div className="dnt-field">
						<label htmlFor="Item Name">Picture </label>
						<div className="file">
							<input type="file" />
						</div>
					</div>
				</div>
				<div className="dnt-submit">
					<button>Submit</button>
				</div>
			</div>
		</div>
	);
};

export default Donate;
