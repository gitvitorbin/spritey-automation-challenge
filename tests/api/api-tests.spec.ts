import { test, expect, request } from '@playwright/test';

const BASE_URL = 'https://reqres.in/api';

let apiContext;

test.beforeAll(async ({ playwright }) => {
  apiContext = await playwright.request.newContext({
    baseURL: BASE_URL,
  });
});

test.afterAll(async () => {
  await apiContext.dispose();
});

test.describe('@api', () => {
  // 1. Retrieve a list of users
  test('Retrieve a list of users', async ({ request }) => {
      const response = await request.get(`${BASE_URL}/users?page=2`);
    
      expect(response.ok()).toBeTruthy();
      const data = await response.json();
      expect(data.data).toBeInstanceOf(Array);
      expect(data.page).toBe(2);
    });

  // 2. Perform a successful login
  test('Perform a successful login', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/login`, {
      data: {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka',
      },
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.token).toBeDefined();
  });

  // 3. Perform an update
  test('Perform an update', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/users/2`, {
      data: {
        name: 'morpheus',
        job: 'zion resident',
      },
    });
    expect(response.status()).toBe(200);
    const data = await response.json();
    expect(data.name).toBe('morpheus');
    expect(data.job).toBe('zion resident');
  });

  // 4. Perform a deletion
  test('Perform a deletion', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/2`);
    expect(response.status()).toBe(204);
  });

  // 5. Execute negative scenarios
  test('Negative: Login with incorrect credentials', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/login`, {
      data: {
        email: 'wrong@example.com',
        password: 'wrongpassword',
      },
    });
    expect(response.status()).toBe(400);
    const data = await response.json();
    expect(data.error).toBeDefined();
  });

  test('Negative: Retrieve a non-existing user', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/999`);
    expect(response.status()).toBe(404);
  });

  // 6. Execute a parameterized delayed request
  test('Execute a delayed request and evaluate response time', async ({ request }) => {
    const start = Date.now();
    const response = await request.get(`${BASE_URL}/users?delay=3`);
    const duration = Date.now() - start;
    expect(response.ok()).toBeTruthy();
    expect(duration).toBeGreaterThanOrEqual(3000);
    expect(duration).toBeLessThan(4000);
  });
});