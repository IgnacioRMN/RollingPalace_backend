import express from "express";
import { getUsers, updateUser, deleteUser } from "../controllers/usuario.js";
import { proteger, admin } from "../middlewares/auth.js";

const router = express.Router();

router.route("/").get(proteger, admin, getUsers);

router
  .route("/:id")
  .put(proteger, admin, updateUser)
  .delete(proteger, admin, deleteUser);

export default router;
