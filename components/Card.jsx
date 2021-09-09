import Image from "next/image";
import {StarIcon} from "@heroicons/react/outline";

const Card = ({card}) => {
    const {title, img} = card;

    return (
        <section className="space-y-2 m-6">
            <div className={"relative md:w-64 h-52 w-80"}>
                <Image className={"rounded-xl"} src={img} layout={"fill"} alt={""} objectFit={"cover"}/>
            </div>

            <p className="font-semibold md:w-[200px] md:h-[65px] text-xl">{title}</p>

            <p className={"font-semibold"}>$12 / night</p>

            <div className={"flex items-center h-[40px]"}>
                <StarIcon className={"h-5 text-red-400"} />
                <p className={"text-sm text-gray-600 ml-1"}>(5 Reviews)</p>
            </div>

            <button className={"button"}>View Details</button>

            <div className={"sm:hidden pt-2 border-b w-full"}/>

        </section>
    );
};

export default Card;