import { request } from 'umi';
 
export async function query() {
  return request<API.CurrentUser[]>('/api/v1/users');
}

export async function queryCurrent() {
  return request<API.CurrentUser>('/api/v1/users/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request<{ data: API.NoticeIconData[] }>('/api/v1/users/notices');
}
