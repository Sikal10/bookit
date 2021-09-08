import nc from "next-connect";
import {getAllRooms, createRoom, getSingleRoom} from "../../../controllers/roomControllers";
import connectDB from "../../../db/connectDB";
import onError from "../../../middlewares/errors";

const handler = nc({onError});

connectDB()

handler.get(getAllRooms, getSingleRoom);
handler.post(createRoom);

export default handler;