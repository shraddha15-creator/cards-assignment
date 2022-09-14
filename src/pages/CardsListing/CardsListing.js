import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineStar } from "react-icons/ai";
import { Card } from "../../components";
import { getData } from "../../app/features/cardsSlice/cardSlice";
import { getCartItems } from "../../app/features/cartSlice/cartSlice";
import CardsDb from "../../DB/CardsDb.json";
import "./cardlist.css";

export const CardsListing = () => {
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
		<div className="cardlist-conatiner">
			<div>
				<h3 className="cardlist-title">Most Popular</h3>
				<div className="cardlist-star line-before">
					<AiOutlineStar className="star-icon" />
				</div>
			</div>
			<div className="cards">
				{CardsDb?.map((card) => (
					<Card key={card.id} {...card} />
				))}
			</div>
		</div>
	);
};
