import { withProfile, WithProfileOptions } from './withProfile';

export interface ApiAuthResponseDto {
  profile: ApiLkProfileResponseDto;
  auth: ApiCsfrTokenResponseDto;
}

export interface ApiLkProfileResponseDto {
  id: number;
  firstname: string;
  surname: string;
  lastname: string;

  birthday: string;
  phone: string;
  email: string;
  password: string;
  status: 'Pending' | 'Verified' | 'Banned';

  profile_id: string;
}

export interface ApiCsfrTokenResponseDto {
  /** Токен, полученый */
  token: string;

  /** Оставшееся время жизни токена */
  ttl: number;
}

export type WrappedPageProps<T = unknown> = {
  profile?: ApiAuthResponseDto;
  isDev: boolean;
  baseUrl: string;
} & T;

export type WrapPageParamsOptions = {
  // Особый случай для страниц уровня 404, которые требуют отсутствия модификаторов
  disableGetServerSideProps?: boolean;
};

export type WrapPageParams = {
  page: (props: WrappedPageProps) => JSX.Element;
  options?: WithProfileOptions;
  wrapperOptions?: WrapPageParamsOptions;
};

export const wrapPage = (params: WrapPageParams) => {
  let getServerSideProps = withProfile(
    (profile) => ({
      props: {
        profile,
        isDev: process.env.IS_DEV === 'true',
        baseUrl: process.env.FRONTEND_ADDRESS || '',
      },
    }),
    params.options,
  );

  if (params.wrapperOptions?.disableGetServerSideProps) {
    getServerSideProps = undefined;
  }

  //   let getServerSideProps:
  // | undefined
  // | ((context: GetServerSidePropsContext) => { props: WrapPageParams }) = (context) => {

  //   return {
  //     props: {
  //       isDev: process.env.IS_DEV === 'true',
  //       isAuthorized,
  //     },
  //   };
  // };

  // if (options.disableGetServerSideProps) {
  //   getServerSideProps = undefined;
  // }

  return {
    default: params.page,
    getServerSideProps,
  };
};
