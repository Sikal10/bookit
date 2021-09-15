import Image from "next/image";
import {StarIcon} from "@heroicons/react/outline";
import Link from "next/link";
import {getSingleRoom} from "../slices/roomSlices/roomAPI";
import {useDispatch} from "react-redux";

const RoomItem = ({room}) => {
    const {name, _id, pricePerNight, numOfReviews} = room;
    const img = room.images[0].url;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(getSingleRoom(_id))
    }


    return (
        <section className="space-y-2 m-6">
            <div className={"relative md:w-64 h-52 w-80 cursor-pointer hover:opacity-80"}>
                <Image className={"rounded-xl"} src={img} layout={"fill"} alt={""} objectFit={"cover"}/>
            </div>

            <Link href={`/rooms/${_id}`} >
                <p className="cursor-pointer font-semibold md:w-[270px] md:h-[65px] text-xl">{name}</p>
            </Link>

            <p className={"font-semibold"}>${pricePerNight} / night</p>

            <div className={"flex items-center h-[40px]"}>
                <StarIcon className={"h-5 text-red-400"} />
                <p className={"text-sm text-gray-600 ml-1"}>({numOfReviews} Reviews)</p>
            </div>

            <button onClick={handleClick} className={"button"}>
                <Link href={`/rooms/${_id}`}>View Details</Link>
            </button>

            <div className={"sm:hidden pt-2 border-b w-full"}/>

        </section>
    );
};

export default RoomItem;