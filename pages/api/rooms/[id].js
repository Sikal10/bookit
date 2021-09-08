import nc from "next-connect";
import {getSingleRoom, updateRoom, deleteRoom} from "../../../controllers/roomControllers";
import connectDB from "../../../db/connectDB";
import onError from "../../../middlewares/errors";

const handler = nc({onError});

connectDB()

handler.get(getSingleRoom);
handler.put(updateRoom);
handler.delete(deleteRoom);

export default handler;