import type { IImage } from "@interfaces/index";

const imgUrl = import.meta.env.PUBLIC_IMG_URL;

export function executeImg(
  image: IImage,
  format: "small" | "thumbnail" = "small",
): string {
  return imgUrl + image.formats?.[format]?.url || image.url;
}
