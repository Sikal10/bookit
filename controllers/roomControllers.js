import Room from "../models/roomModel";
import ErrorResponse from "../utils/errorHandler";
import asyncHandler from "../middlewares/asyncHandler";
import APIFeatures from "../utils/apiFeatures";

// @desc get all rooms
// @route public... /api/rooms
export const getAllRooms = asyncHandler(async (req, res) => {
    const apiFeatures = new APIFeatures(Room.find(), req.query);
    apiFeatures.search();

    const rooms = await apiFeatures.query;
    res.status(200).json({success: true, count: rooms.length, rooms});
})

// @desc create a new room...POST
// @route private .../api/rooms
export const createRoom = asyncHandler(async (req, res) => {
    const room = await Room.create(req.body);
    res.status(200).json({success: true, room});
})

// @desc get a single room
// @route private /api/rooms/:id
export const getSingleRoom = asyncHandler(async (req, res, next) => {
    const room = await Room.findById(req.query.id);
    if (!room) return next(new ErrorResponse("Room not found with the ID", 404));
    res.status(200).json({success: true, room});
})

// @desc update a single room
// @route private /api/rooms/:id
export const updateRoom = asyncHandler(async (req, res, next) => {
    let room = await Room.findById(req.query.id);
    if (!room) return next(new ErrorResponse("Room not found with the ID", 404));

    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: true
    })

    res.status(200).json({success: true, room});
})

// @desc Delete room
// @route private /api/rooms/:id
export const deleteRoom = asyncHandler(async (req, res, next) => {
    const room = await Room.findById(req.query.id);
    if (!room) return next(new ErrorResponse("Room not found with the ID", 404));

    await room.remove();

    res.status(200).json({message: "Room is deleted successfully."});
})

