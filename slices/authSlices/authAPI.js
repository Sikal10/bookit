import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {NEXT_API} from "../../config";

export const registerUser = createAsyncThunk("auth/registerUser", async (signupCredentials, thunkAPI) => {
    console.log(signupCredentials);
    try {
        const response = await axios.post(`${NEXT_API}/api/auth/register`, signupCredentials);
        console.log(response)
        return response.data
    } catch (err) {
        return thunkAPI.rejectWithValue({error: err.response.data})
    }

})