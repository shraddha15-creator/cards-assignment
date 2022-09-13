import React from "react";
import { useDispatch } from "react-redux";
import {
	decQty,
	incQty,
	removeFromCart,
} from "../../app/features/cartSlice/cartSlice";

export const IncDecBtn = ({ card }) => {
	const dispatch = useDispatch();
	return (
		<div className="qty-btn-value">
			<div
				className="btn-qty qty-dec"
				onClick={() =>
					dispatch(card.qty > 1 ? decQty(card.id) : removeFromCart(card.id))
				}
			>
				-
			</div>
			<div className="qty-value">{card.qty}</div>
			<div
				className="btn-qty qty-inc"
				onClick={() => dispatch(incQty(card.id))}
			>
				+
			</div>
		</div>
	);
};
