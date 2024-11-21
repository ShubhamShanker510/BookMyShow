import { Ticket } from "../models/TicketSchema.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const setBooking=asyncHandler(async(req,res)=>{
    const {movie,slot,seats}=req.body;

    if(!movie || !slot || !seats){
        throw new ApiError(400,"Nothing to Book")
    }

    const myData=new Ticket({movie,slot,seats})

    const saved=await myData.save();

    if(!saved){
        throw new ApiError(402, "Something went wrong while booking tickets")
    }

    return res.status(200).json(
        new ApiResponse(200,
            myData, "Booking Done Successfully"
        )
    )
})

const getBooking = asyncHandler(async (req, res) => {
    const myData = await Ticket.findOne().sort({ _id: -1 });

    if (!myData) {
        throw new ApiError(303, "No Previous Booking Found");
    }

    return res.status(200).json(new ApiResponse(200, myData));
});


export {setBooking, getBooking}