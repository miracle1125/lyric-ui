export function addOrDelete<Value>(arr: Value[], value: Value): Value[] {
  if (arr.includes(value)) {
    return arr.filter((item) => item !== value);
  }

  return arr.concat([value]);
}
