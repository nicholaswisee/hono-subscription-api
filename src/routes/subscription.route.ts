import { createRoute, OpenAPIHono, z } from "@hono/zod-openapi";
import { subscriptionSchema } from "../schema/subscription.schema";
import { errorSchema } from "../schema/error.schema";

export const subscriptionRoute = new OpenAPIHono();

// GET /subscription
const getSubscriptions = createRoute({
  operationId: 'getSubscriptions',
  tags: ['subscription'],
  method: "get",
  summary: "Get all subscriptions",
  description: "Get all subscriptions listed",
  path: "/",
  responses: {
    200: {
      description: "Get all subscriptions",
      content: {
        'application/json': {
          schema: subscriptionSchema.array(),
        }
      }
    },
    404: {
      description: "No Subscriptions found",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    },
    500: {
      description: "Internal server error",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    }
  }
});

// GET /subscription/:id
const getSubscriptionById = createRoute({
  operationId: 'getSubscriptionsById',
  tags: ['subscription'],
  method: "get",
  summary: "Get a subscription by ID",
  description: "Get a subscription by ID",
  path: "/{id}",
  request: {
    params: z.object({
      id: z.string().openapi({
        example: "1, 12, 123",
        param: {in: "path", required: true},
      })
    }),
  },
  responses: {
    200: {
      description: "Get a subscription by ID",
      content: {
        'application/json': {
          schema: subscriptionSchema,
        }
      }
    },
    404: {
      description: "Subscription not found",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    },
    500: {
      description: "Internal server error",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    }
  }
});

// POST /subscription
const createSubscription = createRoute({
  operationId: 'createSubscription',
  tags: ['subscription'],
  method: "post",
  summary: "Get a subscription by ID",
  description: "Get a subscription by ID",
  path: "/{id}",
  request: {
    params: z.object({
      id: z.string().openapi({
        example: "1, 12, 123",
        param: {in: "path", required: true},
      })
    }),
  },
  responses: {
    201: {
      description: "Created a new subscription",
      content: {
        'application/json': {
          schema: subscriptionSchema,
        }
      }
    },
    400: {
      description: "Invalid request",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    },
    500: {
      description: "Internal server error",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    }
  }
});

// GET /subscription/user/:id
const getUserSubscriptions = createRoute({
  operationId: 'getUserSubscriptions',
  tags: ['subscription'],
  method: "get",
  summary: "Get all subscriptions for a user",
  description: "Get all subscriptions for a user",
  path: "/user/{id}",
  request: {
    params: z.object({
      id: z.string().openapi({
        example: "67",
        description: "User ID",
        param: {in: "path", required: true}
      })
    })
  },
  responses: {
    200: {
      description: "Get all subscriptions for a user",
      content: {
        'application/json': {
          schema: subscriptionSchema.array(),
        }
      }
    },
    404: {
      description: "User not found or no subscriptions",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    },
    500: {
      description: "Internal server error",
      content: {
        'application/json': {
          schema: errorSchema,
        }
      }
    }
  }
});