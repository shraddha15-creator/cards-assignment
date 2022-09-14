import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BsArrowLeftShort } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { getCartItems } from "../../app/features/cartSlice/cartSlice";
import { IncDecBtn } from "../../components/IncDecBtn/IncDecBtn";
import "./cart.css";

export const Cart = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);

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
			<Link to="/" className="back-btn">
				<BsArrowLeftShort className="back-icon" /> Back to Home
			</Link>
			<h3 className="order-summery">Order Summery ({cart?.length} Items)</h3>
			{cart?.length > 0 ? (
				<div className="cart-details">
					<div className="products-qty-price">
						<div className="products-details">
							<p>s.no.</p>
							<p className="cart-title-item">items</p>
							<p>qty</p>
						</div>
						{cart.map((cartItem, idx) => {
							return (
								<div key={cartItem?.id} className="single-product-qty">
									<p className="product-sr-no">{idx + 1}</p>
									<p className="product-name">
										{cartItem?.name
											.split(" ")
											.map((i) => i.charAt(0).toUpperCase() + i.slice(1))
											.join(" ")}
									</p>
									<IncDecBtn card={cartItem} />
								</div>
							);
						})}
						<Link to="/" className="add-more-btn">
							<FiPlus /> Add More Items
						</Link>
					</div>

					<div className="price-details-container">
						<h5 className="price-details-title">Price Details</h5>
						<div className="border-bottom">
							{cart.map((cartItem) => (
								<div key={cartItem.id} className="df">
									<span>
										{cartItem.qty} X ${cartItem.final_price}.00
									</span>
									<span>${cartItem.qty * cartItem.final_price}.00</span>
								</div>
							))}
						</div>

						<div className="border-bottom">
							<div className="df">
								<span>Total Savings</span>
								<span className="total-savings-value">
									-$
									{cart.reduce(
										(acc, currValue) =>
											currValue.original_price
												? (acc +=
														(currValue.original_price - currValue.final_price) *
														currValue.qty)
												: acc,
										0
									)}
									.00
								</span>
							</div>
							<div className="df">
								<span>Delivery Fee</span>
								<span>$5.00</span>
							</div>
							<div className="df">
								<span>Taxes and Charges</span>
								<span>$2.00</span>
							</div>
						</div>
						<div>
							<div className="df">
								<span> To Pay</span>
								<span>
									-$
									{cart.reduce(
										(acc, currValue) =>
											(acc += currValue.final_price * currValue.qty),
										0
									)}
								</span>
							</div>
							<div className="place-order-btn">Place Order</div>
						</div>
					</div>
				</div>
			) : (
				<h1 className="empty-cart">Cart is Empty</h1>
			)}
		</div>
	);
};
