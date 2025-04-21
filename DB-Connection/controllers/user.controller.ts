import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";
import * as todoModel from "../models/todo.models.ts";


type createUserBody = {
  firstName: string;
  lastName: string;
};

const createUser = async (c: Context) => {
  try {
    const body = await c.req.json<createUserBody>();
    if (!body.firstName || !body.lastName)
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (await userModel.isDuaplicate(body.firstName, body.lastName)) {
      return c.json({
        success: false,
        data: null,
        msg: "firstName or lastName is duplicated",
      });
    }
    const newUser = await userModel.createUser(body.firstName, body.lastName);
    return c.json({
      success: true,
      data: newUser,
      msg: "Created new User!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const getUser = async (c: Context) => {
  try {
    const allUser = await userModel.getUser();
    return c.json(allUser, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

const getAllTodo = async (c: Context) => {
  try {
    const param = c.req.query("id");
    if (param !== undefined && param !== null) {
      const data = await todoModel.getAllTodo(parseInt(param));
      return c.json(data, 200);
    }
    return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

type UpdateFirstLastName = {
  firstName: string;
  lastName: string;
};

const updateFLName = async (c: Context) => {
  try {
    const id = c.req.query("id");
    const body = await c.req.json<UpdateFirstLastName>();
    if (!id || !body.firstName || !body.lastName) {
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    }
    const data = await userModel.updateFLName(parseInt(id), body.firstName, body.lastName );
    return c.json({
        data
    }, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
export { createUser, getUser, getAllTodo, updateFLName };
