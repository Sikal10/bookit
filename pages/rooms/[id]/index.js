import SingleRoom from "../../../components/SingleRoom";
import {useSelector, useDispatch} from "react-redux";
import {selectSingleRoom, selectErrorMsg} from "../../../slices/roomSlices/roomSlice";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {getSingleRoom} from "../../../slices/roomSlices/roomAPI";
import {useRouter} from "next/router";

const SingleRoomPage = () => {
    const dispatch = useDispatch();
    const room = useSelector(selectSingleRoom);
    const errorMsg = useSelector(selectErrorMsg);

    const router = useRouter();
    const _id = router.query.id;

    useEffect(() => {
        console.log(_id)
        dispatch(getSingleRoom(_id))

        if (errorMsg) {
            toast.error(errorMsg)
        }
    }, [_id, dispatch, errorMsg])
    
    return (
        <div>
            {room?._id && <SingleRoom room={room}/>}
        </div>
    );
};

export default SingleRoomPage;
