import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  postUser,
  updateUser,
} from "../controller/users";

const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", postUser);
router.put("/:id", updateUser);
router.delete("/", deleteUser);

export default router;
