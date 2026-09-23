export default function (content, format = 'full') {
  if (!content || typeof content !== "object") {
    return content;
  }

  if (format === 'full') {
    return `${content.toISOString().split('T')[0]}`;
  }

  if (format === 'year') {
    return content.getFullYear();
  }
}