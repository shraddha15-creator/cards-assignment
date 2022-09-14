import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
	decQty,
	incQty,
	removeFromCart,
} from "../../app/features/cartSlice/cartSlice";
import "./incDecBtn.css";

export const IncDecBtn = ({ card }) => {
	const location = useLocation();
	const dispatch = useDispatch();
	return (
		<div className="inc-dec-btn">
			<div className="qty-btn-value">
				<div
					className={`btn-qty qty-dec ${
						location.pathname === "/cart" && "cart-btn-qty"
					}`}
					onClick={() =>
						dispatch(card.qty > 1 ? decQty(card.id) : removeFromCart(card.id))
					}
				>
					-
				</div>
				<div
					className={`qty-value ${
						location.pathname === "/cart" && "cart-qty-value"
					}`}
				>
					{card.qty}
				</div>
				<div
					className={`btn-qty qty-inc ${
						location.pathname === "/cart" && "cart-btn-qty"
					}`}
					onClick={() => dispatch(incQty(card.id))}
				>
					+
				</div>
			</div>
		</div>
	);
};
