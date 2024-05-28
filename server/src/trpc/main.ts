import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { helloRouter } from "./routers/hello";
import { router } from "./config";
const appRouter = router({
  main: helloRouter,
});
export type AppRouter = typeof appRouter;

export const trpcMiddleware = createExpressMiddleware({
  router: appRouter,
  createContext: () => ({}),
});
