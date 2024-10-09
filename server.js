import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";
import { profileArray } from "./src/controllers/profile.controller.js";
const PORT = process.env.PORT;

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log("====================================");
console.log(__filename);
console.log(__dirname);
console.log("====================================");

const server = http.createServer(async (req, res) => {
  try {
    let filePath;
    if (req.method === "GET") {
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
        /*  res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(profileArray)); */
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
        console.log(filePath);

        /* res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>"); */
      } else {
        throw new Error("Page not found");
        /*  res.writeHead(500, { "Content-Type": "text/html" }); */
        /* res.end("<p>Page Not found</p>"); */
      }
    } else {
      throw new Error("Method Not Allowed");
    }

    const data = await fs.readFile(filePath);
    res.setHeader("Content-Type", "text/html");
    res.write(data);
    res.end();
  } catch (error) {
    console.log(error);

    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("<h1>Internal Server Error</h1>");
  }
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
