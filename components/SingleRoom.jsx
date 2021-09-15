import {StarIcon} from "@heroicons/react/outline";
import Image from "next/image";
import studio from "../public/images/studio.jpg";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RoomFeatures from "./RoomFeatures";

const SingleRoom = ({room}) => {
    const {name, pricePerNight, description, address} = room;


    const imageUrl = room && room.images?.map((img, i) => {
        return img?.url
    });

    const firstImage = imageUrl[0];
    const secondImage = imageUrl[1];


    return (
        <main className={"lg:max-w-[1100px] mx-auto mt-10 sm:max-w-xl md:max-w-2xl"}>
            <h2 className={"text-3xl font-semibold mb-5"}>{name}</h2>
            <p>{address}</p>

            <div className={"flex items-center mb-5"}>
                <StarIcon className={"h-4 text-red-500"}/>
                <p className={"text-sm text-gray-600 ml-1"}>(5 Reviews)</p>
            </div>

            <div className={"relative"}>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showStatus={false}
                    showIndicators={false}
                    showThumbs={false}
                    interval={5000}>

                    <div className={"relative md:h-[500px] w-full"}>
                        <Image layout={"fill"} src={firstImage} objectFit={"cover"} alt=""/>
                    </div>

                    {secondImage && <div className={"relative md:h-[500px] w-full"}>
                        <Image layout={"fill"} src={secondImage} objectFit={"cover"} alt=""/>
                    </div>}


                </Carousel>
            </div>


            <section className={"mt-10"}>
                <h3 className={"font-semibold text-3xl mb-2"}>Description</h3>
                <p className={"text-gray-600 mb-4"}>{description}</p>
            </section>

            <RoomFeatures room={room} />

            <section className={"mt-10"}>
                <h3 className={"font-semibold text-3xl mb-4 "}>Reviews:</h3>
                <hr className={"w-[700px]"}/>

                <div>
                    <div>
                        <StarIcon className={"h-5 text-red-600 mt-5"}/>
                        <p className={"text-gray-600 text-sm"}>by John</p>
                    </div>

                    <h3 className={"my-4 text-gray-700"}>Good Quality</h3>

                    <hr className={"w-[700px]"}/>
                </div>

                <div>
                    <div>
                        <StarIcon className={"h-5 text-red-600 mt-5"}/>
                        <p className={"text-gray-600 text-sm"}>by John</p>
                    </div>

                    <h3 className={"my-4 text-gray-700"}>Good Quality</h3>

                    <hr className={"w-[700px]"}/>
                </div>
            </section>


        </main>
    );
};

export default SingleRoom;