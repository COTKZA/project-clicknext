import jwt from "jsonwebtoken";

const data = [
  {
    email: "admin@gmail.com",
    password: "admin",
  },
];

const JWT_SECRET =
  "6e8f7a8d2a1d730c8ef8954a2130efcef32a24f72891052f5cc265a9fc6792f1";

export default defineEventHandler(async (event) => {
  const { email, password } = await readBody(event);

  // find the users
  const user = await data.find((item) => item.email === email);

  if (!user) {
    return {
      statusCode: 401,
      body: { success: false, message: "Invalid email or password" },
    };
  }

  // check password  is correct
  const validPassword = password === user.password;

  if (!validPassword) {
    return {
      statusCode: 401,
      body: { success: false, message: "Invalid email or password" },
    };
  }

  // create a jwt token
  const token = jwt.sign({ email: user.email }, JWT_SECRET, {
    expiresIn: "12h",
  });

  return {
    statusCode: 200,
    body: {
      success: true,
      message: "Login successful",
      token: token,
    },
  };
});
