import express from "express";
import { signupUserPost,GetLogin } from "../Controllers/UserAuth.controllers.js";
import { protect,getUserProfile } from "../Middleware/UserAuth.Middlewars.js";
const router = express.Router();


router.post("/signup", signupUserPost);
router.post("/login", GetLogin);

router.get("/user/:id", protect, getUserProfile);

export default router;
