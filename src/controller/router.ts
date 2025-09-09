import { OpenAPIHono } from '@hono/zod-openapi';
import { authRouter } from '../routes/auth.route';
import { subscriptionRouter } from '../routes/subscription.route';
import { userRouter } from '../routes/user.route';

const unprotectedApiRouter = new OpenAPIHono();
unprotectedApiRouter.route('/auth', authRouter);

const protectedApiRouter = new OpenAPIHono();
protectedApiRouter.route('/subscription', subscriptionRouter);
protectedApiRouter.route('/users', userRouter);

export const apiRouter = new OpenAPIHono();
apiRouter.route('/', unprotectedApiRouter);
apiRouter.route('/', protectedApiRouter);