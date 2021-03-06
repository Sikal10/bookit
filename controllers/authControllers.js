import User from "../models/userModel";
import asyncHandler from "../middlewares/asyncHandler";
import cloudinary from "cloudinary";

//setting up cloudinary config
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
})

// @desc Register a user
// @route public... /api/auth/register
export const registerUser = asyncHandler(async (req, res) => {

    const result = await cloudinary.v2.uploader.upload(req.body.avatar, {
        folder: 'bookit/avatars',
        width: '150',
        crop: 'scale'
    })

    const { name, email, password } = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: result.public_id,
            url: result.secure_url
        }
    });

    console.log(user);

    res.status(200).json({
        success: true,
        message: 'Account Registered successfully',
        user
    })
});



