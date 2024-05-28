import { initTRPC } from "@trpc/server";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
const t = initTRPC.create();
const appRouter = t.router({
  hello: t.procedure.query(() => "hello"),
});
export type AppRouter = typeof appRouter;
export const trpcMiddleware = createExpressMiddleware({
  router: appRouter,
  createContext: () => ({}),
});
