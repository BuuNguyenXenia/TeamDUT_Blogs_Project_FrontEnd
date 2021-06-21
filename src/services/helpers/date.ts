export const formatDate = (date: string) => {
  const options: object = { year: "numeric", month: "long", day: "numeric" }

  return new Date(date).toLocaleDateString([], options)
}
