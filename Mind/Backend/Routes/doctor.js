import express from "express";
import {
updateDoctor,

deleteDoctor,

getAllDoctor,

getSingleDoctor,
getDoctorProfile,
}
from"../Controllers/doctorController.js";
const router=express.Router();
router.use("/:doctorId/reviews",reviewRouter)

import reviewRouter from './review.js'
import { authenticate, restrict } from "../auth/verifyToken.js";


router.get("/:id", getSingleDoctor);

router.get("/", getAllDoctor);
router.put("/:id",authenticate,restrict(['doctor']), updateDoctor);
router.delete("/:id",authenticate,restrict(['doctor']), deleteDoctor);
router.get("/profile/me",authenticate,restrict(['doctor']), getDoctorProfile);



export default router;