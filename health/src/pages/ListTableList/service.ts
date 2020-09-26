import { request } from 'umi';
import { TableListParams, TableListItem } from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('/api/v1/users', {
    params,
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/v1/users', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/v1/users', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/v1/users', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
