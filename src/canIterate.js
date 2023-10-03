export default function canIterate(value) {
  return !!(value && Symbol.iterator in Object.getPrototypeOf(value));
}
