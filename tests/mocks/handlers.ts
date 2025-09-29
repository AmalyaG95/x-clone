import { http, HttpResponse } from 'msw';

const handlers = [
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    return HttpResponse.json(
      [
        {
          name: 'Amalya Ghazaryan',
        },
        {
          name: 'Aghasi Ghazaryan',
        },
        {
          name: 'Vahan Ghazaryan',
        },
      ],
      {
        headers: {
          'content-type': 'application/hal+json',
        },
      },
    );
  }),
];

export default handlers;
