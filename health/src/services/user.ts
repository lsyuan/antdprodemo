import { extend } from 'umi-request';

const request = extend({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': window.sessionStorage.getItem('token') ?? "",
  }, 
});

export async function query() {
  return request<API.CurrentUser[]>('/api/v1/users');
}

export async function queryCurrent() {
  return request<API.CurrentUser>('/api/v1/users/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/v1/users/notices');
}
