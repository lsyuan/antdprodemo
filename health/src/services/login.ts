import { request } from 'umi';

export interface LoginParamsType {
  username: string;
  password: string;
  mobile: string;
  captcha: string;
  type: string;
  grant_type: string;
}

export async function accountLogin(params: LoginParamsType) {
  params.grant_type = 'password'
  return request<API.LoginStateType>('/api/v1/users/authenticate', {
    method: 'POST',
    data: params,
  });
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function outLogin() {
  return request('/api/login/outLogin');
}
