import {createSlice} from "@reduxjs/toolkit";
import {registerUser} from "./authAPI";

const initialState = {
    loading: "idle",
    user: null,
    errorMsg: "",
    serverMsg: "",
    success: false
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.loading = "loading"
        },
        [registerUser.fulfilled]: (state, action) => {
            state.loading = "loaded"
            state.success = true
            state.serverMsg = action.payload.message
            state.user = action.payload.user
        },
        [registerUser.rejected]: (state, action) => {
            state.loading = "error"
            console.log(action.payload);
            state.errorMsg = action.payload.error.message
        }
    }
});

//selectors
export const selectUser = state => state.auth;

export default authSlice.reducer;