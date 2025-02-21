import { handler } from '../services/hello';

describe('Helo', () => {
  test('Should return 200', async () => {
    const res = await handler();

    expect(res.statusCode).toBe(200);
  });
});
