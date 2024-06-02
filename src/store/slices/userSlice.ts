import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface UserState {
	isAdmin: boolean;
	username: string | null;
	email: string | null;
	firstName: string | null;
	lastName: string | null;
	streetAddress: string | null;
	postalCode: string | null;
	city: string | null;
	mobileNumber: string | null;
}

const initialState: UserState = {
	isAdmin: false,
	username: null,
	email: null,
	firstName: null,
	lastName: null,
	streetAddress: null,
	postalCode: null,
	city: null,
	mobileNumber: null,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setAdmin: (state, action: PayloadAction<boolean>) => {
			state.isAdmin = action.payload;
		},
		signOut: (state) => {
			state.isAdmin = false;
		},
	},
});

export const { setAdmin, signOut } =
	userSlice.actions;


export default userSlice.reducer;
