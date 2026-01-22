//isme bas user ke sare routes aayenge

import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import { exchangeGitHubToken } from "../controllers/github.controller.js";


const router = Router()

router.route("/register").post(registerUser)
router.route("/github/exchange-token").post(exchangeGitHubToken)


// Router.route("/login").post(login)  



export default router;