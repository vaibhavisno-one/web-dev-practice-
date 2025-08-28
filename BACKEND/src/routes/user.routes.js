//isme bas user ke sare routes aayenge

import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";


const router =Router()

Router.route("/register").post(registerUser)


// Router.route("/login").post(login)  



export default router;