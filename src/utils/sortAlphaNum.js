export const sortAlphaNum = (a, b) =>
  a.name.localeCompare(b.name, "en", { numeric: true });
