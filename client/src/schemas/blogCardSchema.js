// schemas/blogCardSchema.js (Frontend Zod Schema)
import { z } from "zod";

export const blogCardSchema = z.object({
  title: z.string().min(10, "Title must be at least 10 characters").max(50),
  description: z.string().min(10, "Description must be at least 10 characters").max(200),
  content: z.string().min(20, "Content must be at least 20 characters long"),  // This will hold Quill's HTML
  category: z.enum(["Africa", "Asia", "Europe", "Oceania", "North America", "South America"]),
  imageUrl: z.string().url("Enter valid Image Url"),
  read: z.number({ invalid_type_error: "It must be a number" }),
  scheduledAt: z.string().optional(), // datetime-local input as string
});