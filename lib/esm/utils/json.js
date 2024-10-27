// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function safeDecode(data) {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data;
  }
}
