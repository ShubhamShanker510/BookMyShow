import express from "express";
import { Ticket } from "../models/TicketSchema.model.js";
import cors from 'cors'
import { getBooking, setBooking } from "../controllers/booking.controller.js";

const router=express.Router();

router.use(express.json())
router.use(cors())

router.route("/booking").post(setBooking).get(getBooking)


export default router;