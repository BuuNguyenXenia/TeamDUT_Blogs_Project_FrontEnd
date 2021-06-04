export const handleShowContent = (content: string, sub: number) => {
  let processedContent: string = content
  if (content.length > 50) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    processedContent = content.substring(0, sub) + "..."
  }
  return processedContent
}
