import nc from "next-connect";
import {getSingleRoom, updateRoom} from "../../../controllers/roomControllers";
import connectDB from "../../../db/connectDB";

const handler = nc();

connectDB()

handler.get(getSingleRoom);
handler.put(updateRoom);

export default handler;