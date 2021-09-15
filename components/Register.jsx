import {useEffect, useState} from 'react';
import {selectUser} from "../slices/authSlices/authSlice";
import {useSelector, useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {registerUser} from "../slices/authSlices/authAPI";
import {toast} from "react-toastify";

// const Register = () => {
//
//     const dispatch = useDispatch()
//     const router = useRouter();
//
//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         password: ''
//     })
//
//     const { name, email, password } = user
//
//     const [avatar, setAvatar] = useState('');
//     const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');
//
//     const { success, error, loading } = useSelector(selectUser);
//
//     useEffect(() => {
//
//         if (success) {
//             router.push('/login')
//         }
//
//         if (error) {
//             toast.error(error);
//         }
//
//     }, [dispatch, success, error, router])
//
//
//     const submitHandler = (e) => {
//         e.preventDefault();
//
//         const userData = {
//             name, email, password, avatar
//         }
//
//         dispatch(registerUser(userData))
//
//     }
//
//     const onChange = (e) => {
//
//         if (e.target.name === 'avatar') {
//
//             const reader = new FileReader();
//
//             reader.onload = () => {
//                 if (reader.readyState === 2) {
//                     setAvatar(reader.result);
//                     setAvatarPreview(reader.result);
//                 }
//             }
//
//             reader.readAsDataURL(e.target.files[0])
//
//         } else {
//             setUser({ ...user, [e.target.name]: e.target.value })
//         }
//
//     }
//
//
//     return (
//         <div className="container">
//             <div>
//                 <div>
//                     <form onSubmit={submitHandler}>
//                         <h1> Us</h1>
//
//                         <div>
//                             <label htmlFor="name_field">Full Name</label>
//                             <input
//                                 type="text"
//                                 id="name_field"
//                                 name='name'
//                                 value={name}
//                                 onChange={onChange}
//                             />
//                         </div>
//
//                         <div >
//                             <label htmlFor="email_field">Email</label>
//                             <input
//                                 type="email"
//                                 id="email_field"
//                                 name='email'
//                                 value={email}
//                                 onChange={onChange}
//                             />
//                         </div>
//
//                         <div>
//                             <label htmlFor="password_field">Password</label>
//                             <input
//                                 type="password"
//                                 id="password_field"
//                                 name='password'
//                                 value={password}
//                                 onChange={onChange}
//                             />
//                         </div>
//
//                         <div className='form-group'>
//                             <label htmlFor='avatar_upload'>Avatar</label>
//                             <div>
//                                 <div>
//                                     <figure>
//                                         <img
//                                             src={avatarPreview}
//                                             alt='image'
//                                         />
//                                     </figure>
//                                 </div>
//                                 <div >
//                                     <input
//                                         type='file'
//                                         name='avatar'
//                                         id='customFile'
//                                         accept='images/*'
//                                         onChange={onChange}
//                                     />
//                                     <label  htmlFor='customFile'>
//                                         Choose Avatar
//                                     </label>
//                                 </div>
//                             </div>
//                         </div>
//
//
//                         <button
//                             id="login_button"
//                             type="submit"
//                         >
//                            Register
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default Register;

const Register = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [avatar, setAvatar] = useState("");
    const [avatarPreview, setAvatarPreview] = useState("/images/default_avatar.png");

    const {loading, user, errorMsg, serverMsg, success} = useSelector(selectUser);

    useEffect(() => {
        if (success) {
            router.push("/login")
        }
        if (errorMsg) {
            toast.error(errorMsg)
        }

    }, [errorMsg, router, success])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser({name, email, password, avatar}));
    }

    const onChangeAvatar = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                setAvatar(reader.result);
                setAvatarPreview(reader.result);
            }
        }
        reader.readAsDataURL(e.target.files[0]);
    }


    return (
        <section>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor={"name"}>Name</label>
                    <input value={name} onChange={e => setName(e.target.value)} type="name" required placeholder={"Name"}/>
                </div>
                <div>
                    <label htmlFor={"email"}>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" required placeholder={"Email"}/>
                </div>
                <div>
                    <label htmlFor={"password"}>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" required placeholder={"Password"}/>
                </div>
                <div>
                    <label htmlFor={"confirmPassword"}>Confirm Password</label>
                    <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password" required placeholder={"Confirm Password"}/>
                </div>
                <div>
                    <label htmlFor="avatar upload">Avatar</label>
                    <main>
                        <div>
                            <figure><img src={avatarPreview} alt=""/></figure>
                        </div>
                        <div><input type="file" name="avatar" accept={"images/*"} onChange={e => onChangeAvatar(e)}/><label>Choose Avatar</label></div>
                    </main>

                </div>


                <button type={"submit"} className={"button"}>Register</button>
            </form>
        </section>
    );
};

export default Register;