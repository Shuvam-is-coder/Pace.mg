import app from "./src/app.js";
import dns from "dns";
import env from "./src/config/env.js";
import { connectToDatabase } from "./src/db/database.js";

dns.setServers(["8.8.8.8", "8.8.4.4"]);
connectToDatabase();

const port = Number(env.port ?? 5000);

app.listen(port, () => {
  console.log(`Server has started on http://127.0.0.1:${port}`);
});
