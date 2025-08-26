const { z } = require("zod");

const loginValidator = z.object({
  email: z.string().email("Email is required"),
  password: z.string().min(8, "Password must be atleast 8 characters long."),
});

module.exports = { loginValidator };
