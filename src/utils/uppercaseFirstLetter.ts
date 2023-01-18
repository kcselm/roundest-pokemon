export const uppercaseFirstLetter: (word: string) => string = word => {
  return word?.charAt(0).toUpperCase() + word?.slice(1)
}
