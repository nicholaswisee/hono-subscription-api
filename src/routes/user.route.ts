import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { userSchema } from "../schema/user.schema";

export const userRouter = new OpenAPIHono();

// GET /users
const getUsers = createRoute({
  operationId: 'getUsers',
  tags: ['users'],
  method: "get",
  summary: "Get all users",
  description: "Get all users listed",
  path: "/",
  responses: {
    200: {
      description: "Get all users",
      content: {
        'application/json': {
          schema: userSchema.array(),
        }
      }
    },
  }
});

// GET /user/:id
const getUserById = createRoute({
  operationId: 'getUserById',
  tags: ['users'],
  method: "get",
  summary: "Get a user by ID",
  description: "Get a user by ID",
  path: "/{id}",
  request: {
    params: z.object({
      id: z.string().openapi({
        example: "1, 12, 123",
        param: {in: "path", required: true},
      })
    })
  },
  responses: {
    200: {
      description: "Get user by ID",
      content: {
        'application/json': {
          schema: userSchema.omit({ password: true }),
        }
      }
    },
  }
});