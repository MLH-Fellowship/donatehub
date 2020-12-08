import '../../styles/nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="nv-header">
			<Link to="/">
				<div className="nv-title">
					<h2>donatehub</h2>
				</div>
			</Link>
			<div className="nv-nav-link">
				<Link to="/">Home</Link>
				<Link to="/donate">Donate</Link>
				<Link to="/">About Us</Link>
				<Link to="/">Contact</Link>
			</div>
			<div className="nv-donate-btn">
				<Link to="/donate">
					<button>donate</button>
				</Link>
			</div>
		</div>
	);
};

export default Nav;
