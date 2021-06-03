const LocalStorageService = {
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify({ value }))
  },
  getItem<T>(key: string): T | null {
    const data: string | null = localStorage.getItem(key)
    if (data !== null) {
      return JSON.parse(data).value
    }
    return null
  }
}
export default LocalStorageService
