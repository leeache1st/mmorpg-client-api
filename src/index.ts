import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/", (req: Request, response: Response) => {
  response.send("Typescript and nodeJS works");
});

app.listen(4321, () => {
  console.log("running on port 4321");
});
