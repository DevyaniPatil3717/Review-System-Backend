import { createAdmin} from "../controllers/userController.js";
import { createStudent} from "../controllers/userController.js";
import { createAlumni} from "../controllers/userController.js";
import {getAllUsers} from "../controllers/userController.js";
import { createCompany, getCompany } from "../controllers/companyController.js";
import { createReview, getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likesController.js";
import express from "express";
import {isAdmin} from "../middleware/Middleware.js";

const router=express.Router()

router.post("/admin/create",createAdmin);
router.post("/student/create",createStudent);
router.post("/alumni/create",createAlumni);
router.get("/user/get",getAllUsers);
router.post("/company/create",isAdmin,createCompany);
router.get("/company/get",getCompany);
router.post("/review/create",createReview);
router.get("/review/get",getAllReviews);
router.post("/like/create",likeReviews);

export default router;