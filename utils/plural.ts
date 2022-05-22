import { langvars } from './langvars';

type Paths = keyof typeof langvars.plural;

/**
 * Функция которая склоняет слово в зависимости от числа
 * @param path - строкой путь в объекте перевода
 * @param number - число, используемое для склонения
 * @returns
 */
export function plural(path: Paths, number: number): string {
  const plural = langvars.plural[path];

  const formatted = Math.abs(number);
  const words = Object.values(plural);

  if (Number.isInteger(formatted)) {
    const cases = [2, 0, 1, 1, 1, 2];
    return words[
      formatted % 100 > 4 && formatted % 100 < 20
        ? 2
        : cases[formatted % 10 < 5 ? formatted % 10 : 5]
    ];
  }

  return words[1];
}
