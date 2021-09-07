import nc from "next-connect";
import {getAllRooms, createRoom, getSingleRoom} from "../../../controllers/roomControllers";
import connectDB from "../../../db/connectDB";

const handler = nc();

connectDB()
handler.get(getAllRooms, getSingleRoom);
handler.post(createRoom);

export default handler;