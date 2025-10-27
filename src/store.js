import { configureStore } from "@reduxjs/toolkit";
import venueReducer from "./slices/venueSlice";
import addonsReducer from "./slices/addonsSlice";
import mealsReducer from "./slices/mealsSlice";

export const store = configureStore({
	reducer: {
		venue: venueReducer,
		addons: addonsReducer,
		meals: mealsReducer,
	},
});
