import { encoding_for_model } from "tiktoken";

const enc = encoding_for_model("gpt-4o");

export function trimToTokens(text: string, maxTokens: number) {
  const tokens = enc.encode(text);

  return enc.decode(tokens.slice(0, maxTokens));
}

export function countTokens(text: string) {
  return enc.encode(text).length;
}