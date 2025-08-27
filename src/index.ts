import { OpenAPIHono } from "@hono/zod-openapi";
import { userRoute } from "./routes/user.route";
import { swaggerUI } from "@hono/swagger-ui";
import { subscriptionRoute } from "./routes/subscription.route";
import { authRoute } from "./routes/auth.route";

const app = new OpenAPIHono();

// Routing
app.route("/api/users", userRoute);
app.route("/api/auth", authRoute);
app.route("/api/subscription", subscriptionRoute);

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