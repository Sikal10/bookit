import Room from "../models/roomModel";

// @desc get all rooms
// @route public... /api/rooms
export const getAllRooms = async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json({success: true, count: rooms.length, rooms});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

// @desc create a new room...POST
// @route private .../api/rooms
export const createRoom = async (req, res) => {
    try {
        const room = await Room.create(req.body);
        res.status(200).json({success: true, room});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

// @desc get a single room
// @route private /api/rooms/:id
export const getSingleRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.query.id);
        if (!room) return res.status(400).json({message: `Room not found with this ID`});
        res.status(200).json({success: true, room});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

// @desc update a single room
// @route private /api/rooms/:id
export const updateRoom = async (req, res) => {
    try {
        let room = await Room.findById(req.query.id);
        if (!room) return res.status(400).json({message: `Room not found with this ID`});

        room = await Room.findByIdAndUpdate(req.query.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: true
        })

        res.status(200).json({success: true, room});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

// @desc Delete room
// @route private /api/rooms/:id
export const deleteRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.query.id);
        if (!room) return res.status(400).json({message: `Room not found with this ID`});

        await room.remove();

        res.status(200).json({message: "Room is deleted successfully."});
    } catch (err) {
        res.status(400).json({success: false, error: err.message});
    }
}

