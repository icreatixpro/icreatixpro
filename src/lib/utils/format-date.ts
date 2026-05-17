export function formatDate(date: Date) {
  return date.toISOString().replace("T", " ").slice(0, 19);
}