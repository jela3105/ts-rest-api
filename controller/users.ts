import { Request, Response } from "express";
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json({ users });
};

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  user
    ? res.json({ user })
    : res.status(404).json({ msg: `The user with id ${id} not exists` });
};

export const postUser = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    msg: "postUsers",
    body,
  });
};

export const updateUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "updateUsers",
    id,
    body,
  });
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteUsers",
    id,
  });
};
