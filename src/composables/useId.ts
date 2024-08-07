let id = 0

export const useId = (prefix?: string) => {
  return `${prefix ?? ''}${id++}`
}
