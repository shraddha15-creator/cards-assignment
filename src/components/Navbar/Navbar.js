import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import Avtaar from "../../assets/avtaar.jpg";
import "./navbar.css";

export const Navbar = () => {
	const location = useLocation();
	const { cart } = useSelector((state) => state.cart);
	return (
		<nav
			className={`navbar ${location.pathname === "/cart" && "navbar-shadow"}`}
		>
			<Link to="/" className="navbar-left">
				<img
					src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
					alt="brand-logo"
					className="brand-logo"
				/>
				<p className="brand-title">Happay</p>
			</Link>
			{location.pathname === "/cart" ? (
				<img src={Avtaar} alt="avtaar" className="avtaar" />
			) : (
				<Link to="/cart" className="navbar-right">
					<FiShoppingCart className="cart-icon" />
					<div className="cart-badge">{cart.length}</div>
					<img src={Avtaar} alt="avtaar" className="avtaar" />
				</Link>
			)}
		</nav>
	);
};
