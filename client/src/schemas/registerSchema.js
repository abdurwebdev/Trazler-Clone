import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(3, "Username must be atleast 3 characters long."),
  email: z.string().email("Invalid email."),
  password: z.string().min(8, "Password must be atleast 8 characters long."),
  imageUrl: z.string().url("Invalid image url"),
});
