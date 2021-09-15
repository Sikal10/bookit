import {configureStore} from "@reduxjs/toolkit";
import roomsReducer from "../slices/roomSlices/roomSlice";
import authReducer from "../slices/authSlices/authSlice";

export const store = configureStore({
    reducer: {
        rooms: roomsReducer,
        auth: authReducer
    }
});