import sanitizeHtml from "sanitize-html";

export function sanitizeContent(html: string) {
  return sanitizeHtml(html, {
    allowedTags: sanitizeHtml.defaults.allowedTags,
    allowedAttributes: {
      a: ["href"],
      img: ["src", "alt"],
    },
    disallowedTagsMode: "discard",
  });
}