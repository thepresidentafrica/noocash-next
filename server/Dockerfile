# build stage
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm install --no-frozen-lockfile --force
RUN pnpm build

# serve stage
FROM gcr.io/distroless/nodejs
WORKDIR /app
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/graphql-schemas ./graphql-schemas

EXPOSE 7870

# Fix the error "Cannot find module '/app/node'"
CMD [ "node", "dist/index.js" ]
