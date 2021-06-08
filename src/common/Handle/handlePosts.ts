import { covertToSlug } from "src/helpers/string"
import { PATH } from "../../constants/path"
export const urlPostItem = (title: string) => {
  const urlPost = covertToSlug(title)

  return PATH.ITEM_POST + "/" + urlPost
}
