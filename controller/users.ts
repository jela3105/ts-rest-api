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

export const postUser = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const emailExists = await User.findOne({
      where: {
        email: body.email,
      },
    });
    if (emailExists) {
      return res.status(400).json({ msg: "The user already exists" });
    }
    const user = User.build(body);
    await user.save();
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Somenting in the server wend wrong " });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res
        .status(404)
        .json({ msg: `The user with id ${id} does not exists` });
    }
    await user.update(body);
    res.json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Somenting in the server wend wrong " });
  }
};

export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    msg: "deleteUsers",
    id,
  });
};
