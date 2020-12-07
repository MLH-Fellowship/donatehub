import '../styles/homepage.css';

const Homepage = () => {
	return (
		<div className="hmpg-container">
			<div className="hmpg-header">
				<div className="hmpg-title">
					<h2>shophub</h2>
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
			<div className="hmpg-body"></div>
		</div>
	);
};

export default Homepage;
