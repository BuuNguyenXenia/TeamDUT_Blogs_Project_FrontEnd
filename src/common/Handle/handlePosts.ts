import { covertToSlug } from "src/services/helpers/string"

export const urlPostItem = (title: string) => {
  const urlPost = covertToSlug(title)
  return "/" + urlPost
}
