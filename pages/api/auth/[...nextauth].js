import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectDB from "../../../db/connectDB";
import User from "../../../models/userModel";

export default NextAuth({
    session: {
        jwt: true
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                connectDB();

                const {email, password} = credentials;

                if (!email || !password) throw new Error("Please enter the required fields");

                //find user in the database
                const user = await User.findOne({email}).select("+password");
                if (!user) throw new Error("Invalid email or password");

                const isPasswordValid = await user.comparePassword(password);
                console.log(isPasswordValid)
                if (!isPasswordValid) throw new Error("Invalid password");

                // return {email: user.email}
                return Promise.resolve(user);
            }
        })
    ],
    callbacks: {
        jwt: async (token, user) => {
            //callback is called only when jwt token is created.
            user && (token.user = user);
            return Promise.resolve(token);
        },
        session: async (session, token) => {
            console.log("Session----->", session);
            console.log("token------->", token)
            session.user = token.user
            return Promise.resolve(session)
        }
    }
})