export const initials =(firstName, lastName) => {
  const a = firstName?.trim()?.[0] || "U";
  const b = lastName?.trim()?.[0] || "P";
  return `${a}${b}`.toUpperCase();
}