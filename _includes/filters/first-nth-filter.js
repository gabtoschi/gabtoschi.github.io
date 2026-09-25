export default function (content, amount) {
  if (!content || !amount || !Array.isArray(content)) {
    return content;
  }

  return content.slice(0, amount);
}