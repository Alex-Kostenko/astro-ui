import { UploadPath } from "@interfaces/index";
import contactUsService from "@service/contactUs.service";
import fileService from "@service/file.service";
import vacancyService from "@service/vacancy.service";
import { defineAction } from "astro:actions";
import { z } from "astro:schema";

const MAX_FILE_SIZE = 5242880; // 5mb

export const server = {
  contactUs: defineAction({
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
      file: z
        .custom<File>((v) => v instanceof File)
        .refine((file) => file.size > 0 && file.size < MAX_FILE_SIZE),
    }),
    accept: "form",
    async handler(input) {
      const file = await fileService.upload({
        files: input.file,
        path: UploadPath.document,
      });

      try {
        await contactUsService.create({
          email: input.email,
          message: input.message,
          name: input.name,
          file: file[0].id.toString(),
        });

        return { success: true };
      } catch (err) {
        await fileService.delete(file[0].id.toString());
      }

      return { success: false };
    },
  }),

  vacancyReplay: defineAction({
    input: z.object({
      name: z.string(),
      email: z.string().email(),
      message: z.string(),
      file: z
        .custom<File>((v) => v instanceof File)
        .refine((file) => file.size > 0 && file.size < MAX_FILE_SIZE),
    }),
    accept: "form",
    async handler(input) {
      const file = await fileService.upload({
        files: input.file,
        path: UploadPath.document,
      });

      try {
        await vacancyService.create({
          email: input.email,
          message: input.message,
          name: input.name,
          file: file[0].id.toString(),
        });

        return { success: true };
      } catch (err) {
        await fileService.delete(file[0].id.toString());
      }

      return { success: false };
    },
  }),
};
