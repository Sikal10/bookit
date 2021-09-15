import RoomItem from "./RoomItem";
import {ArrowLeftIcon} from "@heroicons/react/outline";
import {useRouter} from "next/router";

const Room = ({rooms}) => {
    const router = useRouter();
    const handleRoute = () => router.push("/search");

    return (
            <section className={"max-w-7xl mx-auto p-7"}>
                <h3 className={"mt-10 text-4xl font-bold mb-5 ml-5"}>Stays in Lagos</h3>

                <p onClick={handleRoute} className={"ml-5 cursor-pointer flex items-center text-red-500 text-2xl font-bold"}><ArrowLeftIcon className={"h-4 mr-1"} /> Back to search</p>

               <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
                   {rooms.map((room) => <RoomItem key={room._id} room={room}/>)}
               </div>

            </section>
    );
};

export default Room;