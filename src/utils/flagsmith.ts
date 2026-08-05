import { Flagsmith } from "flagsmith-nodejs";

const flagsmith = new Flagsmith({
  environmentKey: process.env.FLAGSMITH_KEY!,
  requestTimeoutSeconds: 60,
});

export default flagsmith;
