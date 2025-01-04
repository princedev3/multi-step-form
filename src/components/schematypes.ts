import { z } from "zod";

export const formSchema = z.object({
  "first-name": z.string().min(2, {
    message: "first must be at least 2 characters.",
  }),
  "last-name": z.string().min(2, {
    message: "first must be at least 2 characters.",
  }),
  age: z.preprocess(
    (val) => parseInt(val as string, 10),
    z.number().min(18, { message: "You must be at least 18 years old." })
  ),
  email: z.string().email(),
  password: z.string().min(5, {
    message: "Password must be at least 5 characters.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }),
  zip: z.string().min(5, {
    message: "Zip must be at least 5 characters.",
  }),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }),
});
