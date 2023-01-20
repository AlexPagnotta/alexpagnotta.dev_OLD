export const isEnum = <T extends Record<string, unknown>>(enumObject: T, value: unknown): value is T[keyof T] => {
  return Object.values(enumObject).includes(value);
};

export const debounce = (fn: (...args: never[]) => void, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  const debouncedFunction = function (this: unknown, ...args: []) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };

  debouncedFunction.cancel = () => {
    clearTimeout(timeoutId);
  };

  return debouncedFunction;
};
