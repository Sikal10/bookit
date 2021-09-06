import nc from "next-connect";
import {getAllRooms} from "../../../controllers/roomControllers";
import connectDB from "../../../db/connectDB";

const handler = nc();

connectDB()
handler.get(getAllRooms);

export default handler;