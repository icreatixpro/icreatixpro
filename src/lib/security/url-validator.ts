export function validateUrl(input: string) {
  try {
    const url = new URL(input);

    if (!["http:", "https:"].includes(url.protocol)) {
      throw new Error("Invalid protocol");
    }

    return true;
  } catch {
    throw new Error("Invalid URL");
  }
}