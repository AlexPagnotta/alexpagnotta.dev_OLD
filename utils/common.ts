export const isEnum = <T extends Record<string, unknown>>(enumObject: T, value: unknown): value is T[keyof T] => {
  return Object.values(enumObject).includes(value);
};
