export function clearChildren(node: HTMLElement) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

export function randomElementOf<T>(array: T[]): T {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}
