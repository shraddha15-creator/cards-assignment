import "./cardlist.css";
import { AiOutlineStar } from "react-icons/ai";
import { Card } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getData } from "../../app/features/cardsSlice/cardSlice";

export const CardsListing = () => {
	const dispatch = useDispatch();
	const cards = useSelector((state) => state.cards);
	console.log("from CARDDDDSSS ", cards.cards);

	const showCards = cards.cards;
	console.log(showCards, " show cardsssss");

	useEffect(() => {
		dispatch(getData());
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
				{showCards.map((card) => (
					<Card key={card.id} {...card} />
				))}
			</div>
		</div>
	);
};
