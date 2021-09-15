import Head from "next/head";
import Home from "../components/Home";

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Welcome to {"Sikal's"} villa</title>
            </Head>

            <Home />

        </>
    );
}
export default HomePage;