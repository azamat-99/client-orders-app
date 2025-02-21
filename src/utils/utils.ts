export function resetObject<T extends object>(obj: T) {
  Object.keys(obj).forEach((key) => {
    const value = obj[key as keyof T];
    if (typeof value === "string") {
      obj[key as keyof T] = "" as T[keyof T];
    } else if (typeof value === "number") {
      obj[key as keyof T] = null as T[keyof T];
    } else if (Array.isArray(value)) {
      obj[key as keyof T] = [] as T[keyof T];
    } else if (typeof value === "boolean") {
      obj[key as keyof T] = true as T[keyof T];
    } else {
      obj[key as keyof T] = null as T[keyof T];
    }
  });
}