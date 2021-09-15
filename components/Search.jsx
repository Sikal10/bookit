import React, {useState} from 'react';
import {useRouter} from "next/router";
import axios from "axios";
import {NEXT_API} from "../config";
import Room from "./Room";

const Search = () => {
    const router = useRouter();
    const [location, setLocation] = useState("");
    const [filteredRoom, setFilteredRoom] = useState([]);
    const [guestsNumber, setGuestsNumber] = useState("");
    const [category, setCategory] = useState("");

    const searchHandler = async (e) => {
        e.preventDefault();
        setLocation(location);
        await router.push({
            pathname: "/search",
            query: {
                location,
                guestsNumber,
                category
            }
        });

        await searchRes();
        setLocation("")
    }

    let url = `${NEXT_API}/api/rooms?location=${location}`;
    if (guestsNumber) url = url.concat(`&guestCapacity=${guestsNumber}`);
    if (category) url = url.concat(`&category=${category}`);

    const searchRes = async () => {
        const {data} = await axios.get(`${url}`);
        console.log(data);
        setFilteredRoom(data.rooms);
    };

    return (
        <section className={""}>
            <form onSubmit={searchHandler} className={"max-w-6xl mx-auto"}>
                <h5 className={"text-3xl font-semibold"}> Search for a Room</h5>
                <div className={"flex justify-between items-center"}>
                    <input className={"flex-grow outline-none border"} value={location}
                           onChange={e => setLocation(e.target.value)} type="text" placeholder={"New York"}/>
                    <button type={"submit"} className={"button"}>Search</button>
                </div>

                <div>
                    <label htmlFor="guests_field">
                        <span>Number of Guests</span>
                        <select value={guestsNumber} onChange={e => setGuestsNumber(e.target.value)}>{[1,2,3,4,5,6,7,8,9].map((num, index) => <option key={index} value={num}>{num}</option>)}</select>
                    </label>
                </div>

                <div>
                    <label htmlFor="guests_field">
                        <span>Room Type</span>
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                            {["King", "Single", "Twins"].map((category, index) => <option key={index} value={category}>{category}</option>)}
                        </select>
                    </label>
                </div>

            </form>
            {location && filteredRoom.length === 0 && <h3>No Rooms</h3>}
            {filteredRoom && <Room rooms={filteredRoom}/>}

        </section>
    );
};

export default Search;