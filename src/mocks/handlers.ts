import { http, HttpResponse } from 'msw';
import { baseUrl } from '../config/api';

export const handlers = [
  http.get(`${baseUrl}api/products`, () => {
    return HttpResponse.json([
      {
        "id": 1,
        "productName": "Lirio Maxi Dress",
        "color": "blue",
        "refNumber": "09458762",
        "price": 79.99,
        "imageUrl": `${baseUrl}images/blue-dress.avif`
      },
      {
        "id": 2,
        "productName": "Amara Maxi Dress",
        "color": "purple",
        "refNumber": "18472635",
        "price": 99.99,
        "imageUrl": `${baseUrl}images/purple-dress.avif`
      },
      {
        "id": 3,
        "productName": "Sienna Maxi Dress",
        "color": "red",
        "refNumber": "52739184",
        "price": 64.99,
        "imageUrl": `${baseUrl}images/red-dress.avif`
      },
      {
        "id": 4,
        "productName": "Elara Maxi Dress",
        "color": "green",
        "refNumber": "73621849",
        "price": 74.99,
        "imageUrl": `${baseUrl}images/green-dress.avif`
      },
      {
        "id": 5,
        "productName": "Mila Maxi Dress",
        "color": "yellow",
        "refNumber": "36194725",
        "price": 84.99,
        "imageUrl": `${baseUrl}images/yellow-dress.avif`
      },
      {
        "id": 6,
        "productName": "Ayla Satin Maxi Dress",
        "color": "white",
        "refNumber": "81546392",
        "price": 119.99,
        "imageUrl": `${baseUrl}images/white-dress.avif`
      }
    ]);
  }),
];
