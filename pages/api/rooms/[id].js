import nc from "next-connect";
import {getSingleRoom, updateRoom, deleteRoom} from "../../../controllers/roomControllers";
import connectDB from "../../../db/connectDB";

const handler = nc();

connectDB()

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;