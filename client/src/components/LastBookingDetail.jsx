import React, { useContext, useEffect } from "react";
import { seats } from "../data";
import "../styles/LastBookingDetails.css";
import BsContext from "../Context/BsContext";

const LastBookingDetail = () => {
  const context = useContext(BsContext);
  const { handleGetBooking, lastBookingDetails } = context; // Corrected destructuring

  useEffect(() => {
    handleGetBooking(); // Fetch last booking details on component mount
  }, []);

  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_header">Last Booking:</h2>
      {lastBookingDetails ? (
        <>
          <div className="seats_container">
            <p className="seats_header">Seats</p>
            <ul className="seats">
              {Object.keys(lastBookingDetails.seats).map((seat, index) => (
                <li className="seat_value" key={index}>
                  {seat}: {lastBookingDetails.seats[seat] || 0}
                </li>
              ))}
            </ul>
          </div>
          <p className="slot" style={{ textAlign: "left" }}>
            Slot: {lastBookingDetails.slot || "Not available"}{" "}
          </p>
          <p className="movie">
            Movie: <span>{lastBookingDetails.movie || "Not available"}</span>
          </p>
        </>
      ) : (
        <p className="no_booking_message">No booking found.</p> // Fallback message
      )}
    </div>
  );
};

export default LastBookingDetail;
