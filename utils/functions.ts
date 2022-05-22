import { personalAccountData } from 'src/utils/constants';

export const getPage = (link: string) => personalAccountData.find((item) => item.link === link);
