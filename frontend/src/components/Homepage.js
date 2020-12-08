import '../styles/homepage.css';
import shoe from '../images/shoe.png';
import ItemCard from './common/ItemCard';
import Nav from './common/Nav';

const Homepage = ({ data }) => {
	return (
		<div className="hmpg-container">
			<Nav />
			<div className="hmpg-body">
				<div className="hmpg-sub-container">
					<div className="hmpg-sub-containers-items">
						<p>
							<span>Home</span>/Items
						</p>
						<h2>Items</h2>
						<div className="hmpg-sorting-options">
							<select>
								<option value="date">Newest</option>
								<option value="clothes">Clothes</option>
								<option value="electronics">Electronic</option>
							</select>
						</div>
					</div>
					<div className="hmpg-sub-containers-cards">
						{data.map(item => (
							<ItemCard img={shoe} itemName={item.itemName} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
