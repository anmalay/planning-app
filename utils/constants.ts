import { format } from 'date-fns';
import { IconName } from 'src/components/Icon/types';
import { text } from 'src/utils/text';

export const DEFAULT_DATE_FORMAT_WITH_TIME = (date: Date) => format(date, 'dd.MM.yyyy hh:mm');
export const DEFAULT_DATE_FORMAT = (date: Date) => format(date, 'dd.MM.yyyy');
export const NO_IMAGE_URL = '/images/system32/no_image.jpg';
export const APP_LINKS = ['AppStore', 'GooglePlay', 'Galaxy', 'HuaweiStore'];
export const SOCIALS: IconName[] = ['Instagram', 'Youtube', 'Facebook', 'Vkontakte'];
export const BLUE_SOCIALS: IconName[] = ['BlueInst', 'BlueYt', 'BlueFb', 'BlueVk'];

export type PersonalAccountDataType = {
  id: string;
  icon: IconName;
  name: string;
  link: string;
};

export type CurrenciesType = {
  id: string;
  value: string;
  icon: IconName;
};

export const personalAccountData: PersonalAccountDataType[] = [
  {
    id: '1',
    icon: 'Wallet',
    link: '/lk/wallet',
    name: text('lk.pages.wallet'),
  },
  {
    id: '2',
    icon: 'History',
    name: text('lk.pages.history'),
    link: '',
  },
  {
    id: '3',
    icon: 'Withdrawal',
    name: text('lk.pages.withdrawal'),
    link: '/lk/withdrawal',
  },
  {
    id: '4',
    icon: 'FavoriteStore',
    name: text('lk.pages.favoriteStores'),
    link: '',
  },
  {
    id: '5',
    icon: 'Settings',
    name: text('lk.pages.settings'),
    link: '',
  },
  {
    id: '6',
    icon: 'Support',
    name: text('lk.pages.support'),
    link: '',
  },
  {
    id: '7',
    icon: 'Exit',
    name: text('lk.pages.exit'),
    link: 'exit',
  },
];

export const currencies: CurrenciesType[] = [
  {
    id: text('currencies.usd'),
    value: text('currencies.usd'),
    icon: 'UsFlag',
  },
  {
    id: text('currencies.rub'),
    value: text('currencies.rub'),
    icon: 'RuFlag',
  },
  {
    id: text('currencies.eur'),
    value: text('currencies.eur'),
    icon: 'EuFlag',
  },
];

export const paymentSystems = [
  {
    id: text('paymentSystems.visa'),
    value: text('paymentSystems.visa'),
  },
  {
    id: text('paymentSystems.mc'),
    value: text('paymentSystems.mc'),
  },
  {
    id: text('paymentSystems.mir'),
    value: text('paymentSystems.mir'),
  },
];
