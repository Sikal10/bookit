import {createSlice} from "@reduxjs/toolkit";
import {getAllRooms, getSingleRoom} from "./roomAPI";

const initialState = {
    items: [],
    filteredRooms: null,
    resPerPage: null,
    roomsCount: null,
    loading: "idle",
    errorMsg: "",
    room: {}
};

export const roomSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllRooms.pending]: (state) => {
            state.loading = "loading"
        },
        [getAllRooms.fulfilled]: (state, action) => {
            state.loading = "loaded"
            state.items = action.payload.rooms
            state.filteredRooms = action.payload.filteredRooms
            state.roomsCount = action.payload.roomsCount
            state.resPerPage = action.payload.resultsPerPage
        },
        [getAllRooms.rejected]: (state, action) => {
            state.loading = "error"
            state.errorMsg = action.payload
        },
        [getSingleRoom.pending]: (state) => {
            state.loading = "loading"
        },
        [getSingleRoom.fulfilled]: (state, action) => {
            state.loading = "loaded"
            state.room = action.payload.room
        },
        [getSingleRoom.rejected]: (state, action) => {
            state.loading = "error"
            state.errorMsg = action.payload.error.message
        },
    }
});

//selectors
export const selectSingleRoom = state => state.rooms.room;
export const selectErrorMsg = state => state.rooms.errorMsg;


export default roomSlice.reducer;