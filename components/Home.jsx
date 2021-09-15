import Link from "next/link";

const Home = () => {

    return (
        <main className={""}>
            <div>
                <Link href={"/rooms"}>
                    <button className={"button"}>All Rooms</button>
                </Link>
            </div>
        </main>
    );
};

export default Home;

