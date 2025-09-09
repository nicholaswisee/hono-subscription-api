import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { apiRouter } from "./controller/router";

const app = new OpenAPIHono();

// Main app router
app.route("/api", apiRouter);

// Error handling
app.onError((err, c) => {
  console.log(err);

  return c.json({
    error: true,
    message: err.message || "Internal Server Error",
  }, 500);
});

// OpenAPI Documentation
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    title: "User API",
    version: "1.0.0",
  },
});

// Swagger UI
app.get("/swagger", swaggerUI({ url: "/doc" }));

export default app;