import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./features/cardsSlice/cardSlice";
import cartSlice from "./features/cartSlice/cartSlice";

const store = configureStore({
	reducer: {
		cart: cartSlice.reducer,
		cards: cardSlice,
	},
});

export default store;
