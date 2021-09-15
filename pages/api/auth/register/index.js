import nc from "next-connect";
import {registerUser} from "../../../../controllers/authControllers";
import connectDB from "../../../../db/connectDB";
import onError from "../../../../middlewares/errors";

const handler = nc({onError});

connectDB();

handler.post(registerUser);

export default handler;