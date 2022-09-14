import { useSelector } from "react-redux";
import { CartProducts } from "./CartProducts";
import { PriceDetails } from "./PriceDetails";

export const CartDetails = () => {
	const { cart } = useSelector((state) => state.cart);
	return (
		<>
			<div className="cart-details">
				<CartProducts />
				<PriceDetails />
			</div>
		</>
	);
};
