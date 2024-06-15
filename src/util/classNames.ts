export function classNames(...classNames: string[]) {
  return classNames.filter(Boolean).join(' ');
}
