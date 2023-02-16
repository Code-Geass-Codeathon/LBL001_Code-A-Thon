import express from "express";
import { login, getAllUsers ,setAvatar ,logOut} from "../controllers/auth.js";


const router = express.Router();

router.post("/login", login);




//Get users in user-chat-section


router.get("/allusers/:id", getAllUsers);
router.post("/setavatar/:id", setAvatar);
router.get("/logout/:id", logOut);


export default router;
