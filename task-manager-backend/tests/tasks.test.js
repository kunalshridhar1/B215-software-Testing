const request = require('supertest');
const app = require('../server');

describe('Tasks API', () => {
  let token;
  let taskId;

  beforeAll(async () => {
    // Register a new user
    const email = `taskuser${Date.now()}@example.com`;
    const password = 'password123';
    await request(app)
      .post('/api/auth/register')
      .send({ username: 'TaskUser', email, password });

    // Login to get JWT token
    const login = await request(app)
      .post('/api/auth/login')
      .send({ email, password });

    token = login.body.token;
  });

  test('Create a task', async () => {
    const res = await request(app)
      .post('/api/tasks')
      .set('Authorization', token)
      .send({ title: 'Test Task', description: 'Test Description' });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    taskId = res.body.id;
  });

  test('Get all tasks', async () => {
    const res = await request(app)
      .get('/api/tasks')
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('Update a task', async () => {
    const res = await request(app)
      .put(`/api/tasks/${taskId}`)
      .set('Authorization', token)
      .send({ title: 'Updated Task', description: 'Updated Description' });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task updated');
  });

  test('Mark task as completed', async () => {
    const res = await request(app)
      .patch(`/api/tasks/${taskId}/complete`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task marked completed');
  });

  test('Delete a task', async () => {
    const res = await request(app)
      .delete(`/api/tasks/${taskId}`)
      .set('Authorization', token);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('message', 'Task deleted');
  });
});
