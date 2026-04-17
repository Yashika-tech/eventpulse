const request = require('supertest');
const app = require('../src/index');

describe('EventPulse API', () => {
  test('GET /health returns healthy', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('healthy');
  });

  test('POST /events creates an event', async () => {
    const res = await request(app)
      .post('/events')
      .send({ type: 'order.placed', payload: { orderId: '123' } });
    expect(res.statusCode).toBe(201);
    expect(res.body.event.type).toBe('order.placed');
    expect(res.body.event.processed).toBe(true);
  });

  test('POST /events without type returns 400', async () => {
    const res = await request(app).post('/events').send({});
    expect(res.statusCode).toBe(400);
  });

  test('GET /events lists events', async () => {
    const res = await request(app).get('/events');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body.events)).toBe(true);
  });
});
