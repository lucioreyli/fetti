export const formatForm = <T>(data: FormData) =>
  Object.fromEntries(data.entries()) as unknown as T;
