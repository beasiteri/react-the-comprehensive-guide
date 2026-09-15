import { http, HttpResponse } from 'msw';
import { baseUrl } from '../config/api';

export const handlers = [
  http.get(`${baseUrl}api/example`, () => {
    return HttpResponse.json([]);
  }),
];