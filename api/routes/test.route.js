
import express from "express";
import { shouldBeAdmin, shouldBeLoggedIn } from "../controllers/test.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/should-be-logged-in",verifyToken,shouldBeLoggedIn, (req, res) => {
    console.log("Router works!");
    res.json({ message: "Test route is working" });
});

router.get("/should-be-admin", shouldBeAdmin,(req,res)=>{
    console.log("Router works!");
    res.json({ message: "Test route is working" });
})

export default router;