import http from "http";
import { profileArray } from "./src/controllers/profile.controller.js";
const PORT = process.env.PORT;
import { logger } from "./src/middleware/logger.js";

/* ==== Handler for getting all users ==== */
const getAllUsersHandler = (req, res) => {
  res.write(JSON.stringify(profileArray));
  res.end();
};

/* ==== Handler for getting user by Id ==== */
const getUserByIdHandler = (req, res) => {
  let id = req.url.split("/")[3];
  let user = profileArray.find((user) => user.id === parseInt(id));
  if (user) {
    res.statusCode = 201;
    res.write(JSON.stringify(user));
    res.end();
  } else {
    notFoundHandler(req, res);
  }
};

/* ====User not found handler ==== */
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.end("User Not found");
};

/* ==== Post handler for new user ==== */
const createUserHandler = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    profileArray.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  logger(req, res, () => {
    /* ===== URL for getting all users ===== */
    if (req.url === "/api/users" && req.method === "GET") {
      getAllUsersHandler(req, res);
    } else if (
      req.url.match(/\/api\/users\/([0-9]+)/) &&
      req.method === "GET"
    ) {
      /* ===== URL for getting one user ===== */
      getUserByIdHandler(req, res);
    } else if (req.url === "/api/users" && req.method === "POST") {
      createUserHandler(req, res);
    } else {
      res.statusCode = 404;
      res.end("Route Not found  ❌");
    }
  });
});

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
