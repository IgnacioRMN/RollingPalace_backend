import express from "express";
import { getUsers, updateUser, deleteUser } from "../controllers/usuario.js";
import { proteger, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(proteger, isAdmin, getUsers);

router
  .route("/:id")
  .put(proteger, isAdmin, updateUser)
  .delete(proteger, isAdmin, deleteUser);

export default router;
