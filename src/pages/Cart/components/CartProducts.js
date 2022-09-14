import { Link } from "react-router-dom";
import { FiPlus } from "react-icons/fi";
import { IncDecBtn } from "../../../components";
import { useSelector } from "react-redux";

export const CartProducts = () => {
	const { cart } = useSelector((state) => state.cart);
	return (
		<>
			<div className="products-qty-price">
				<div className="products-details">
					<p>s.no.</p>
					<p className="cart-title-item">items</p>
					<p>qty</p>
				</div>
				{cart?.map((cartItem, idx) => {
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
		</>
	);
};
