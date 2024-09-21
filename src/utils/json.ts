// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function safeDecode<R = unknown>(data: any): R {
  try {
    return JSON.parse(data);
  } catch (e) {
    return data as R;
  }
}
