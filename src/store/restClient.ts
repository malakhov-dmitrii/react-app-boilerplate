import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import Axios from 'axios-observable';
import { AxiosRequestConfig } from 'axios';

interface Token {
  value: string;
  expirationDate: number;
}

export interface Tokens {
  accessToken: Token;
  refreshToken: Token;
}

const dataUser = {
  email: 'test_user@gmail.com',
  password: 'qwerty1',
};

const accountId = 123696;

const getToken = () => {
  // Получаем токен из LocalStorage
  const localToken: Tokens = JSON.parse(localStorage.getItem('token') || 'null');

  // Если токена нет локально, то получаем его
  if (!localToken) {
    return Axios.request({
      data: dataUser,
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      url: `/auth/api/1.0/tokens`,
    }).pipe(
      map(({ data }) => {
        localStorage.setItem('token', JSON.stringify(data));
        return data;
      }),
    );

    // Если Token не истек
  } else if (localToken.accessToken && localToken.accessToken.expirationDate > new Date().getTime()) {
    return of(localToken);

    // Если есть Token истек, воспользуемся refreshToken
  } else {
    return Axios.request({
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
      },
      method: 'POST',
      url: `/auth/api/1.0/tokens`,
      data: { token: localToken.refreshToken },
    }).pipe(
      map(({ data }) => {
        localStorage.setItem('token', JSON.stringify(data));
        return data;
      }),
    );
  }
};

export const restClient = ({ data, headers, params, method, url }: AxiosRequestConfig) => {
  return getToken().pipe(
    switchMap(token =>
      Axios.request({
        data: {
          accountId: accountId,
          ...data,
        },
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token.accessToken.value}`,
          ...headers,
        },
        params,
        method,
        url,
      }),
    ),
  );
};
