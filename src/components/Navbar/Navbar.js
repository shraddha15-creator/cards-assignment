import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Avtaar from "../../assets/avtaar.jpg";
import "./navbar.css";

export const Navbar = () => {
	const { cart } = useSelector((state) => state.cart);
	return (
		<nav className="navbar">
			<div className="navbar-left">
				<img
					src="https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/blue_logo.svg"
					alt="brand-logo"
					className="brand-logo"
				/>
				<p className="brand-title">Happay</p>
			</div>
			<Link to="/cart" className="navbar-right">
				<FiShoppingCart className="cart-icon" />
				<div className="cart-badge">{cart.length}</div>
				<img src={Avtaar} alt="avtaar" className="avtaar" />
			</Link>
		</nav>
	);
};
