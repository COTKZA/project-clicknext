const http = require("http");
const jwt = require("jsonwebtoken");

const PORT = 3001;

const data = [
  {
    email: "test@gmail.com",
    password: "test",
  },
  {
    email: "test1@gmail.com",
    password: "test1",
  },
];

const JWT_SECRET = "d8c1ab5ad8c81eb4a1cdb233681fee1b";

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // cors
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.url === "/api/auth/login" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      try {
        const { email, password } = JSON.parse(body);

        // find user
        const user = data.find((item) => item.email === email);

        if (!user) {
          res.writeHead(404, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ message: "Invalid email or password" }),
          );
        }

        // check password is coreect
        const validPassword = user.password === password;

        if (!validPassword) {
          res.writeHead(401, { "Content-Type": "application/json" });
          return res.end(
            JSON.stringify({ message: "Invalid email or password" }),
          );
        }

        // create a jwt token
        const token = jwt.sign({ email: user.email }, JWT_SECRET, {
          expiresIn: "12h",
        });

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(
          JSON.stringify({
            success: true,
            message: "Login successful",
            data: {
              token: token,
            },
          }),
        );
      } catch (error) {
        res.writeHead(500, { "content-type": "text/plane" });
        return res.end("server Error");
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
