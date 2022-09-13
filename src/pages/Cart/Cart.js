import "./cart.css";
import { BsArrowLeftShort } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartItems } from "../../app/features/cartSlice/cartSlice";
import { IncDecBtn } from "../../components/IncDecBtn/IncDecBtn";

export const Cart = () => {
	const dispatch = useDispatch();
	const { cart } = useSelector((state) => state.cart);
	console.log(cart, "CART");

	useEffect(() => {
		const cart = JSON.parse(localStorage.getItem("cart"));
		dispatch(getCartItems(cart));
	}, []);

	useEffect(() => {
		if (JSON.parse(localStorage.getItem("cart")) === null) {
			localStorage.setItem("cart", JSON.stringify(cart));
		}
	}, []);

	return (
		<div className="cart-container">
			<div>
				<BsArrowLeftShort /> Back to Home
			</div>
			<h3>Order Summery ({cart.length})</h3>
			<div className="cart-details">
				{/* --- */}
				<div className="products-qty-price">
					<div className="products-details">
						<p>s.no.</p>
						<p>items</p>
						<p>qty</p>
					</div>
					{cart.map((cartItem, idx) => {
						return (
							<div key={cartItem.id} className="single-product-qty">
								<p className="product-sr-no">{idx + 1}</p>
								<p className="product-name">{cartItem.name}</p>
								<IncDecBtn card={cartItem} />
							</div>
						);
					})}
					<p className="add-more-btn">
						<FiPlus /> Add More Items
					</p>
				</div>

				<div className="price-details-container">
					<p>Price Details</p>
					<div className="border-bottom">
						{cart.map((cartItem) => (
							<div className="df">
								<span>
									{cartItem.qty} X ${cartItem.final_price}.00
								</span>
								<span>${cartItem.qty * cartItem.final_price}</span>
							</div>
						))}
					</div>

					<div className="border-bottom">
						<div className="df">
							<span>Total Savings</span>
							<span>
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
							<span>-$5.00</span>
						</div>
						<div className="df">
							<span>Taxes and Charges</span>
							<span>-$2.00</span>
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
		</div>
	);
};
