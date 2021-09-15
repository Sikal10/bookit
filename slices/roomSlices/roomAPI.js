import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {NEXT_API} from "../../config";

export const getAllRooms = createAsyncThunk("rooms/getAllRooms", async (_, thunkAPI) => {
    try {
        const response = await axios.get(`${NEXT_API}/api/rooms`);
        return await response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue({error: err.response.data});
    }
});

export const getSingleRoom = createAsyncThunk("rooms/getSingleRoom", async (id, thunkAPI) => {
    try {
        const response = await axios.get(`${NEXT_API}/api/rooms/${id}`);
        return response.data;
    } catch (err) {
        return thunkAPI.rejectWithValue({error: err.response.data});
    }
});

