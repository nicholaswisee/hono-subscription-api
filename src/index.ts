import { OpenAPIHono } from "@hono/zod-openapi";
import { userRoute } from "./routes/user.route";
import { swaggerUI } from "@hono/swagger-ui";

const app = new OpenAPIHono();

app.route("/api/users", userRoute);

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