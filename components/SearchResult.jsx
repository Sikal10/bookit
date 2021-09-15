import React from 'react';
import RoomItem from "./RoomItem";

const SearchResult = ({rooms}) => {
    return (
        <div>
            {rooms.map((room, index) => <RoomItem key={index} room={room} />)}
        </div>
    );
};

export default SearchResult;