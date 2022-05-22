import { DeepKeys } from 'src/types';
import { langvars } from 'src/utils/langvars';

type Paths = DeepKeys<typeof langvars>;
export function traverse(path: Paths): string {
  const siblings = path.split('.');
  const lastIndex = siblings.length - 1;

  let result;

  siblings.reduce((chunk: unknown, nextChunkKey, currentChunkIndex) => {
    if (currentChunkIndex === lastIndex) {
      if (chunk !== undefined) {
        result = (chunk as Record<string, unknown>)[nextChunkKey];
      }
    }

    return chunk === undefined ? '' : (chunk as Record<string, unknown>)[nextChunkKey];
  }, langvars);

  return result || '';
}
