function extractFns(text: string): string[] {
  if (!text) return [];
  const ids: string[] = [];
  const re = /\bM\d{2}(?:\.F\d{2}(?:\.I\d{2})?)?\b/g;
  let m;
  while ((m = re.exec(text)) !== null) if (!ids.includes(m[0])) ids.push(m[0]);
  return ids;
}