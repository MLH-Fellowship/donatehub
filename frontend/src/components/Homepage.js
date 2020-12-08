import '../styles/homepage.css';
import shoe from '../images/shoe.png';
import ItemCard from './common/ItemCard';

const Homepage = () => {
	return (
		<div className="hmpg-container">
			<div className="hmpg-header">
				<div className="hmpg-title">
					<h2>donatehub</h2>
				</div>
				<div className="hmpg-nav-link">
					<a href="">Home</a>
					<a href="">Donate</a>
					<a href="">About Us</a>
					<a href="">Contact</a>
				</div>
				<div className="hmpg-donate-btn">
					<button>donate</button>
				</div>
			</div>
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
						<ItemCard img={shoe} itemName="Shoe" />
						<ItemCard img={shoe} itemName="Shoe" />
						<ItemCard img={shoe} itemName="Shoe" />
						<ItemCard img={shoe} itemName="Shoe" />
						<ItemCard img={shoe} itemName="Shoe" />
						<ItemCard img={shoe} itemName="Shoe" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
