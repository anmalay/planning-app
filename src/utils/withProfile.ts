import base64 from 'base-64';
import Cookies from 'cookies';
import { NextApiRequest, NextApiResponse } from 'next';

import { ApiAuthResponseDto } from './wrapPage';

export type WithProfileOptions = {
  onlyWithSession?: boolean;
};

// const LkApi = new Api({
//   baseURL: `http://${process.env.LK_SERVICE_ADDRESS || 'localhost:3001'}`,
// });

const responses = {
  redirectToMainPage: {
    redirect: {
      destination: '/?message=need_login',
      permanent: false,
    },
  },
};

export const getAuthHeaders = (token: string): Record<string, string> => ({
  cookie: `Authentication=${token}; HttpOnly; Path=/; Max-Age=80000`,
});

export function withProfile(
  pageCallback: (profile: ApiAuthResponseDto | null) => Promise<unknown> | unknown,
  options: WithProfileOptions = {},
): unknown {
  // Дефолтные параметры
  const defaultOptions: WithProfileOptions = {
    onlyWithSession: true,
    ...options,
  };

  return async ({ req, res }: { req: NextApiRequest; res: NextApiResponse }): Promise<unknown> => {
    // Да, здесь важно достать куку с сессией (и подставить её в запросе дальше)
    // const cookies = new Cookies(req, res);

    // const authToken = cookies.get('Authentication');

    // if (!authToken && defaultOptions.onlyWithSession) {
    //   return responses.redirectToMainPage;
    // }

    let profile: ApiAuthResponseDto | undefined;

    try {
      // profile = await LkApi.auth
      //   .authControllerWhoami({
      //     // подставляем куку с сессией
      //     headers: getAuthHeaders(authToken || ''),
      //   })
      //   .then((r) => r.data.payload);
    } catch {
      if (defaultOptions.onlyWithSession) {
        // Профиль получить не удалось, отправляем в логин
        return responses.redirectToMainPage;
      }
    }

    if (profile?.profile.status === 'Pending' && defaultOptions.onlyWithSession)
      return responses.redirectToMainPage;

    // отдаем null в случае undefined потому, что nest не может сериализовать undefined в json, лол
    return pageCallback(profile === undefined ? null : profile);
  };
}
