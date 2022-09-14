import { useSelector } from "react-redux";

export const PriceDetails = () => {
	const { cart } = useSelector((state) => state.cart);

	return (
		<>
			<div className="price-details-container">
				<h5 className="price-details-title">Price Details</h5>
				<div className="border-bottom">
					{cart?.map((cartItem) => (
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
							{cart?.reduce(
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
							{cart?.reduce(
								(acc, currValue) =>
									(acc += currValue.final_price * currValue.qty),
								0
							)}
						</span>
					</div>
					<div className="place-order-btn">Place Order</div>
				</div>
			</div>
		</>
	);
};
