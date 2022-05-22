import { DeepKeys, DeepKeysFiltered } from 'src/types';
import { langvars } from 'src/utils/langvars';
import { traverse } from 'src/utils/traverse';

type Paths = DeepKeysFiltered<DeepKeys<typeof langvars>, typeof langvars, string | string[]>;

const stringFormat = (str: string, args: Array<string | number>) =>
  str.replace(/{(\d+)}/g, (match, index) => args[index as number].toString() || '');

export function text(path: Paths, valuesToInterpolate?: Array<string | number>): string {
  const value = traverse(path);

  if (valuesToInterpolate) {
    return stringFormat(value, valuesToInterpolate);
  }

  return value;
}
