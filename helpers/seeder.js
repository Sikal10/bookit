const Room = require("../models/roomModel");
const mongoose = require("mongoose");
const colors = require("colors");
const rooms = require("../data/rooms.json");

mongoose.connect("mongodb+srv://Sikal:sikal777@bookit.resjs.mongodb.net/bookit?retryWrites=true&w=majority")

//import data into the database
const importData = async () => {
    try {
        await Room.create(rooms);
        console.log("Data imported".green.bold)
    } catch (err) {
        console.error(err)
    }
}

//Delete data from the database
const destroyData = async () => {
    try {
        await Room.deleteMany();
        console.log("Data destroyed".red.inverse);
        process.exit();
    } catch (err) {
        console.error(err)
    }
}

if (process.argv[2] === "-i") {
    importData();
} else if (process.argv[2] === "-d") {
    destroyData()
}