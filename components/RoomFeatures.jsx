import React from 'react';
import {CakeIcon, CodeIcon, UserGroupIcon, VideoCameraIcon, CheckIcon, XIcon} from "@heroicons/react/solid";

const RoomFeatures = ({room}) => {
    const {guestCapacity, internet, breakfast, airConditioned, petsAllowed, roomCleaning} = room;
    return (
        <section>
            <h4 className={"font-semibold text-3xl mb-4 mt-10"}>Features:</h4>

            <section className={"space-y-2"}>
                <div className={"flex items-center space-x-2 text-gray-600"}>
                    <UserGroupIcon className={"h-5"}/>
                    <p>{guestCapacity} Guests</p>
                </div>

                <div className={"flex items-center space-x-2 text-gray-600"}>
                    <VideoCameraIcon className={"h-5"}/>
                    <p>2 beds</p>
                </div>

                <div className={"flex items-center space-x-2 text-gray-600"}>
                    <CodeIcon className={"h-5"}/>
                    <p>2 Baths</p>
                </div>

                {internet ? <div className={"flex items-center space-x-2 text-gray-600"}>
                    <CheckIcon className={"h-5 text-green-600 fill-current"}/>
                    <p>Internet</p>
                </div>: <div className={"flex items-center space-x-2 text-gray-600"}>
                    <XIcon className={"h-5 text-red-600"}/>
                    <p>Internet</p>
                </div>}

                {airConditioned ? <div className={"flex items-center space-x-2 text-gray-600"}>
                    <CheckIcon className={"h-5 text-green-600"}/>
                    <p>Air Condition</p>
                </div>: <div className={"flex items-center space-x-2 text-gray-600"}>
                    <XIcon className={"h-5 text-red-600"}/>
                    <p>Air Condition</p>
                </div>}

                {breakfast ? <div className={"flex items-center space-x-2 text-gray-600"}>
                    <CheckIcon className={"h-5 text-green-600"}/>
                    <p>Breakfast</p>
                </div>: <div className={"flex items-center space-x-2 text-gray-600"}>
                    <XIcon className={"h-5 text-red-600"}/>
                    <p>Breakfast</p>
                </div>}

                {petsAllowed ? <div className={"flex items-center space-x-2 text-gray-600"}>
                    <CheckIcon className={"h-5 text-green-600"}/>
                    <p>Pets Allowed</p>
                </div>: <div className={"flex items-center space-x-2 text-gray-600"}>
                    <XIcon className={"h-5 text-red-600"}/>
                    <p>Pets Allowed</p>
                </div>}

                {roomCleaning ? <div className={"flex items-center space-x-2 text-gray-600"}>
                    <CheckIcon className={"h-5 text-green-600"}/>
                    <p>Room Cleaning</p>
                </div>: <div className={"flex items-center space-x-2 text-gray-600"}>
                    <XIcon className={"h-5 text-red-600"}/>
                    <p>Room Cleaning</p>
                </div>
                }

            </section>
        </section>
    );
};

export default RoomFeatures;