import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/features/cartSlice/cartSlice";
import { IncDecBtn } from "../index";
import "./card.css";

export const Card = (card) => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);

	const getQty = (item) => cart.cart?.find((el) => el.name === item.name);

	return (
		<div className="card-single">
			<div className="card-img">
				<img src={card.img_url} className="card-image" alt="card-img" />
			</div>
			<div className="card-details">
				<div className="card-name-price">
					<p className="card-name">
						{card.name
							.split(" ")
							.map((i) => i.charAt(0).toUpperCase() + i.slice(1))
							.join(" ")}
					</p>

					<div>
						{card.original_price && (
							<span className="original-price">{card.original_price}.00</span>
						)}

						<span className="discount-price">${card.final_price}.00</span>
					</div>
				</div>
				<div className="card-description">{card.description}</div>
			</div>

			{getQty(card)?.qty > 0 ? (
				<IncDecBtn card={getQty(card)} />
			) : (
				<div
					className="btn-add-cart"
					onClick={() => dispatch(addToCart({ ...card, qty: 1 }))}
				>
					Add to cart
				</div>
			)}
		</div>
	);
};
