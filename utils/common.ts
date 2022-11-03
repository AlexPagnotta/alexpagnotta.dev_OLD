export const isEnum = <T>(enumObject: T, value: unknown): value is T[keyof T] => {
  return Object.values(enumObject).includes(value);
};
