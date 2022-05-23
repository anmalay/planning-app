import { text } from 'src/utils';

import { IconName } from '../Icon/types';

export interface ICcodesData {
  id: string;
  name: string;
  icon: IconName;
  hint: string;
}

export interface ICountriesData {
  id: string;
  value: string;
  icon: IconName;
}

export const codesData: ICcodesData[] = [
  {
    id: 'ru',
    name: text('codeCountries.ru'),
    icon: 'RuFlag',
    hint: '+7',
  },
  {
    id: 'ua',
    name: text('codeCountries.ua'),
    icon: 'UaFlag',
    hint: '+380',
  },
];

export const countriesData: ICountriesData[] = [
  {
    id: text('countries.ru'),
    value: text('countries.ru'),
    icon: 'RuFlag',
  },
  {
    id: text('countries.ua'),
    value: text('countries.ua'),
    icon: 'UaFlag',
  },
  {
    id: text('countries.eu'),
    value: text('countries.eu'),
    icon: 'EuFlag',
  },
  {
    id: text('countries.us'),
    value: text('countries.us'),
    icon: 'UsFlag',
  },
  {
    id: text('countries.ot'),
    value: text('countries.ot'),
    icon: 'RuFlag',
  },
];
