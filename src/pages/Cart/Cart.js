import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BsArrowLeftShort } from "react-icons/bs";
import { getCartItems } from "../../app/features/cartSlice/cartSlice";
import "./cart.css";
import { CartDetails } from "./components/CartDetails";

export const Cart = () => {
	const { cart } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart"));
		dispatch(getCartItems(cart));
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("cart")) === null) {
			localStorage.setItem("cart", JSON.stringify(cart));
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className="cart-container">
			<Helmet>
				<title>Happay | Cart</title>
			</Helmet>
			<Link to="/" className="back-btn">
				<BsArrowLeftShort className="back-icon" /> Back to Home
			</Link>
			<h3 className="order-summery">Order Summery ({cart?.length} Items)</h3>
			{cart?.length > 0 ? (
				<CartDetails />
			) : (
				<h1 className="empty-cart">Cart is Empty</h1>
			)}
		</div>
	);
};
