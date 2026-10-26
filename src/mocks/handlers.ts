import { http, HttpResponse } from 'msw';
import { baseUrl } from '../config/api';

export const handlers = [
  http.get(`${baseUrl}api/books`, () => {
    return HttpResponse.json([
        {
          id: 1,
          title: 'JavaScript—The Comprehensive Guide',
          author: 'Philip Ackermann',
          isbn: '978-3836286299',
          rating: 5,
        },
        {
          id: 2,
          title: 'Clean Code',
          author: 'Robert Martin',
          isbn: '978-0132350884',
          rating: 2,
        },
        {
          id: 3,
          title: 'Design Patterns',
          author: 'Erich Gamma',
          isbn: '978-0201633610',
          rating: 5,
        }
    ]);
  }),

  http.get(`${baseUrl}api/users`, () => {
    return HttpResponse.json([
      {
          id: 1,
          name: 'John Smith',
          age: 28,
          address: '12 Main Street, Boston, MA',
          tel: '+1 617 555 0142',
        },
        {
          id: 2,
          name: 'Emma Johnson',
          age: 34,
          address: '45 Oak Avenue, Chicago, IL',
          tel: '+1 312 555 0187',
        },
        {
          id: 3,
          name: 'Michael Brown',
          age: 41,
          address: '78 Park Road, Seattle, WA',
          tel: '+1 206 555 0234',
        },
    ]);
  }),
];
