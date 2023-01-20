// Remove readonly from properties on a type
export type Writeable<T> = { -readonly [P in keyof T]: T[P] };
