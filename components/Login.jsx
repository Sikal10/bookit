import {useState} from 'react';
import {signIn} from "next-auth/client";
import {toast} from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("clicked")
        const result = await signIn("credentials", {
            redirect: false,
            email,
            password
        });

        if (result.error) {
            toast.error(result.error)
        } else {
            window.location.href = "/"
        }
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"email"}>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder={"Email"}/>
                </div>
                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" required placeholder={"Password"}/>
                </div>

                <button type={"submit"} className={"button"}>Login</button>
            </form>
        </section>
    );
};

export default Login;