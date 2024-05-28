import { z } from "zod";
import { procedure, router, } from "../config";

export const helloRouter = router({
  hello: procedure.input(z.object({ name: z.string() })).query(({ input }) => {
    console.log({input});
    return `Hello ${input.name}`;
  }),
});
