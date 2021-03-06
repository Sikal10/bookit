import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter room name"],
        trim: true,
        maxlength: [100, "Room cannot exceed 100 characters"]
    },
    pricePerNight: {
        type: Number,
        required: [true, "Please enter room price"],
        maxlength: [4, "Room name cannot exceed 4 characters"],
        default: 0.0
    },
    description: {
        type: String,
        required: [true, "Please enter room description"],
    },
    address: {
        type: String,
        required: [true, "Please enter room address"],
    },
    guestCapacity: {
        type: Number,
        required: [true, "Please enter room capacity"],
    },
    numberOfBeds: {
        type: Number,
        required: [true, "Please enter number of beds"]
    },
    internet: {
        type: Boolean,
        default: false
    },
    breakfast: {
        type: Boolean,
        default: false
    },
    airConditioned: {
        type: Boolean,
        default: false
    },
    petsAllowed: {
        type: Boolean,
        default: false
    },
    roomCleaning: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, "Please enter room category"],
        enum: {
            values: ["King", "Single", "Twins"],
            message: "Please select correct category for room"
        }
    },
    reviews: [
        {
            user: {type: mongoose.Schema.ObjectId, ref: "User", required: true},
            name: {type: String, required: true},
            rating: {type: Number, required: true},
            comment: {type: String, required: true}
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        required: false,
        ref: "User"
    }
}, {timestamps: true});

const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;