import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const getData = createAsyncThunk(
	"cart/getData",
	async (arg, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				"https://react-coding-assignment.s3.ap-south-1.amazonaws.com/cards/items.json"
			);
			return response.data;
		} catch (error) {
			rejectWithValue(error.response.data);
		}
	}
);

const cardSlice = createSlice({
	name: "cards",
	initialState: {
		cards: [],
		isSuccess: false,
		message: "",
		loading: false,
	},
	extraReducers: {
		[getData.pending]: (state) => {
			state.loading = true;
		},
		[getData.fulfilled]: (state, action) => {
			state.loading = false;
			state.cards = action.payload;
			state.isSuccess = true;
		},
		[getData.rejected]: (state, action) => {
			state.message = action.payload;
			state.loading = false;
			state.isSuccess = false;
		},
	},
});

export default cardSlice.reducer;
