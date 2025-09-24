const request = require('supertest');
const app = require('../server');

describe('Auth API', () => {
  const testUser = {
    username: 'AuthTestUser',
    email: `authtest${Date.now()}@example.com`,
    password: 'password123'
  };

  test('Register a new user', async () => {
    const res = await request(app).post('/api/auth/register').send(testUser);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('message', 'User registered successfully');
  });

  test('Login with valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ email: testUser.email, password: testUser.password });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
