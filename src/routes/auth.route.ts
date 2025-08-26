import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { userSchema } from "../schema/user.schema";


export const authRoute = new OpenAPIHono();

const signUp = createRoute({
  method: "post",
  path: "/auth/sign-up",
  request: {
    body: {
      content: {
        'application/json': {
          schema: userSchema.omit({ id: true })
        }
      }
    }
  },
  responses: {
    201: {
      description: "User created successfully",
      content: {
        'application/json': {
          schema: userSchema
        }
      }
    },
    400: {
      description: "Invalid request",
      content: {
        'application/json': {
          schema: z.object({
            message: z.string()
          })
        }
      }
    }
  }
});

