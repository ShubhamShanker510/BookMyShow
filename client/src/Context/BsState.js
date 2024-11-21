import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState = (props) => {
    const [time, setTime] = useState("");
    const [movie, setMovie] = useState("");
    const [noOfSeat, setNoOfSeat] = useState({
        A1: 0,
        A2: 0,
        A3: 0,
        A4: 0,
        D1: 0,
        D2: 0,
    });

    const [lastBookingDetails, setLastBookingDetails] = useState(null);
    const [error, setError] = useState(null); // For error handling
    const [success, setSuccess] = useState(false); // For success feedback

    const handlePostBooking = async () => {
        try {
            setError(null); // Clear previous errors
            setSuccess(false); // Reset success state

            const response = await fetch(`http://localhost:4000/api/booking`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    movie: movie,
                    slot: time,
                    seats: noOfSeat,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Failed to book tickets");
            }

            // Clear form and localStorage on success
            setTime("");
            setMovie("");
            setNoOfSeat({
                A1: 0,
                A2: 0,
                A3: 0,
                A4: 0,
                D1: 0,
                D2: 0,
            });
            setLastBookingDetails(data.data);
            setSuccess(true);
            localStorage.removeItem("seats"); // Only remove relevant data
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGetBooking=async()=>{
        const response=await fetch(`http://localhost:4000/api/booking`,{
            method:"GET"
        })

        const data=await response.json()

        setLastBookingDetails(data.data)
    }

    useEffect(()=>{
        const movie=window.localStorage.getItem("movie")
        const slot=window.localStorage.getItem("slot")
        const seats=JSON.parse(window.localStorage.getItem("seats"))

        if(movie){
            setMovie(movie)
        }
        if(slot){
            setTime(slot)
        }

        if(seats){
            setNoOfSeat(seats)
        }
    },[])


    return (
        <BsContext.Provider
            value={{
                movie,
                setMovie,
                time,
                setTime,
                noOfSeat,
                setNoOfSeat,
                lastBookingDetails,
                handlePostBooking,
                error,
                success,
                handleGetBooking
            }}
        >
            {props.children}
        </BsContext.Provider>
    );
};

export default BsState;
