import { createServer } from "http";
import express from "express";
import { execute, subscribe } from "graphql";
import cors from "cors";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { expressMiddleware } from "@apollo/server/express4";
import { trpcMiddleware } from "./trpc";
import { env } from "./utils";
import { restRouter } from "./rest";
import { schema, server } from "./graphql";
(async () => {
  const PORT = +env.PORT || 7870;
  const app = express();
  // create http server
  const httpServer = createServer(app);
  // parse the request body to json
  app.use(express.json());
  // setup cors headers
  app.disable('x-powered-by');
  app.use(express.static('public'));
  app.use(
    cors({
      origin: env.ALLOWED_ORIGINS,
      optionsSuccessStatus: 200,
    })
  );
  // start the server
  await server.start();
  app.use("/v1/trpc", trpcMiddleware);
  app.use("/v1/rest", restRouter);
  app.use(
    "/v1/graphql",
    expressMiddleware(server, {
      context: async () => ({}),
    })
  );
  SubscriptionServer.create(
    { schema, execute, subscribe },
    {
      server: httpServer,
      clientTracking: true,
      host: "localhost",
      path: `/v1/subscription`,
    }
  );

  httpServer.listen(PORT, () => {
    console.log(`🚀  GraphQL endpoint ready at http://localhost:${PORT}/v1/graphql`);
    console.log(`🚦  Subscription  endpoint ready at ws://localhost:${PORT}/v1/graphql`);
    console.log(`🎯  tRPC  endpoint ready at http://localhost:${PORT}/v1/trpc/hello`);
    console.log(`🦕  Rest API ready at http://localhost:${PORT}/v1/rest`);
  });
})();
