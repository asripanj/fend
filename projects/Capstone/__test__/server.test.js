const app = require('../src/server/index.js');
const supertest = require('supertest');
const request = supertest(app);

it('testing server endpoint', async done => {
    const res = await request.get('/test')
    expect(res.status).toBe(200);
    done()
})