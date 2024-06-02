// src/slices/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
	itemId: string;
	itemName: string;
	itemPrice: number;
	itemSize: string;
	itemQuantity: number;
}

interface CartState {
	items: CartItem[];
}

const initialState: CartState = {
	items: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<CartItem>) => {
			state.items.push(action.payload);
		},
		incrementItem: (state, action: PayloadAction<string>) => {
			const item = state.items.find((item) => item.itemId === action.payload);
			if (item) {
				item.itemQuantity += 1;
			}
		},
		decrementItem: (state, action: PayloadAction<string>) => {
			const item = state.items.find((item) => item.itemId === action.payload);
			if (item && item.itemQuantity > 1) {
				item.itemQuantity -= 1;
			}
		},
		removeItem: (state, action: PayloadAction<string>) => {
			state.items = state.items.filter(
				(item) => item.itemId !== action.payload
			);
		},
		clearCart: (state) => {
			state.items = [];
		},
	},
});

export const { addItem, incrementItem, decrementItem, removeItem, clearCart } =
	cartSlice.actions;
export default cartSlice.reducer;
