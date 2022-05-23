import { personalAccountData } from './constants';

export const getPage = (link: string) => personalAccountData.find((item) => item.link === link);
