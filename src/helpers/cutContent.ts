export const CutContent = (content: string) => {
  let processedContent: string = content
  if (content.length > 200) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    processedContent = content.substring(0, 20) + "..."
  }
  return processedContent
}
