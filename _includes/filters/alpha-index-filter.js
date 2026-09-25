export default function (content) {
  if (!content || !Array.isArray(content)) {
    return content;
  }

  const sorted = content.sort((a, b) => a.data.title.localeCompare(b.data.title));
  const dict = new Map();

  for (let item of sorted) {
    const start = item.data.title.slice(0, 1).toUpperCase();
    dict.set(start, [...(dict.get(start) || []), item]);
  }

  return Object.fromEntries(dict);
}