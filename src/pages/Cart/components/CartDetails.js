import { CartProducts } from "./CartProducts";
import { PriceDetails } from "./PriceDetails";

export const CartDetails = () => {
	return (
		<>
			<div className="cart-details">
				<CartProducts />
				<PriceDetails />
			</div>
		</>
	);
};
