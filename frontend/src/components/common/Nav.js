import '../../styles/nav.css';

const Nav = () => {
	return (
		<div className="nv-header">
			<div className="nv-title">
				<h2>donatehub</h2>
			</div>
			<div className="nv-nav-link">
				<a href="">Home</a>
				<a href="">Donate</a>
				<a href="">About Us</a>
				<a href="">Contact</a>
			</div>
			<div className="nv-donate-btn">
				<button>donate</button>
			</div>
		</div>
	);
};

export default Nav;
