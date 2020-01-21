function generateHashtag(str) {
  const stringWithCamelCase = str
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  if (stringWithCamelCase.length === 0 || stringWithCamelCase.length >= 140)
    return false;
  //return (str.length)

  const stringWithHashtag = `#${stringWithCamelCase.trim()}`;

  //return stringWithHashtag.length > 140 ? false : stringWithHashtag
  return stringWithHashtag;
}
