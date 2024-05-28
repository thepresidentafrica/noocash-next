import express from "express";

const route = express.Router();

route.get("/", (_, res) => {
    res.send({ hello: "🦕" });
});

export const restRouter = route