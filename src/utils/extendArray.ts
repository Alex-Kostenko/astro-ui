export function extendArray<T = unknown>(
  data: T[],
  neededLength?: number,
): T[] {
  const len = neededLength || 10;

  if (data.length >= len || data.length === 0) return data;

  const dataCopy = [...data];

  while (dataCopy.length < len) {
    dataCopy.push(...data);
  }

  return dataCopy;
}
