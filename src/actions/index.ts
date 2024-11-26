import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const MAX_FILE_SIZE = 10000000;

export const server = {
  contactUs: defineAction({
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
      file: z
        .custom<File>((v) => v instanceof File)
        .refine((file) => {
          console.log(file);
          return file.size > 0 && file.size < MAX_FILE_SIZE;
        }),
    }),
    accept: "form",
    handler(input, context) {
      console.log(input);

      return { success: true };
    },
  }),
};
