import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			state.cart = [...state.cart, action.payload];
			localStorage.setItem("cart", JSON.stringify(state.cart));
			console.log(action.payload, "addToCart sliceeeee");
		},
		getCartItems: (state, action) => {
			state.cart = action.payload;
		},
		decQty: (state, action) => {
			const updatedCart = state.cart.map((ele) => {
				if (ele.id === action.payload) {
					ele.qty = ele.qty - 1;
				}
				return ele;
			});
			state.cart = updatedCart;
			localStorage.setItem("cart", JSON.stringify(updatedCart));
		},
		incQty: (state, action) => {
			const updatedCart = state.cart.map((ele) => {
				if (ele.id === action.payload) {
					ele.qty = ele.qty + 1;
				}
				return ele;
			});
			state.cart = updatedCart;
			localStorage.setItem("cart", JSON.stringify(updatedCart));
		},
		removeFromCart: (state, action) => {
			state.cart = state.cart.filter((item) => item.id !== action.payload);
			localStorage.setItem("cart", JSON.stringify(state.cart));
		},
	},
});

export default cartSlice;
export const { addToCart, getCartItems, decQty, incQty, removeFromCart } =
	cartSlice.actions;
