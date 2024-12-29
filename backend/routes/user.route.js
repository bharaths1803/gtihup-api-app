import express from "express";
<<<<<<< HEAD
import {
  getLikes,
  getUserProfileAndRepos,
  likeProfile,
} from "../controllers/user.controller.js";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated.js";

const router = express.Router();

router.get("/profile/:username", getUserProfileAndRepos);
router.post("/like/:username", ensureAuthenticated, likeProfile);
router.get("/likes", ensureAuthenticated, getLikes);
=======

const router = express.Router();

router.get("/profile", (req, res) => {
  res.send("User profile route");
});
>>>>>>> parent of 0eebd33 (Added backend controller for getting user profiles and repos)

export default router;
