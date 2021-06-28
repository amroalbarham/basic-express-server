'use strict';

const server = require('../src/server');
const supertest = require('supertest');
const request = supertest(server.server);

describe('server test error', () => {
  it('bad route', async () => {
    const result = await request.get('/amro');
    expect(result.status).toEqual(404);
  });
  it('bad method', async () => {
    const result = await request.post('/amro');
    expect(result.status).toEqual(404);
  });
  it('No Name', async () => {
    const result = await request.get('/person');
    expect(result.status).toEqual(500);
  });
  it('Correct Name', async () => {
    const result = await request.get('/person?name=amro');
    expect(result.status).toEqual(200);
  });
  it('Correct Name', async () => {
    const result = await request.get('/person?name=amro');
    expect(result.body).toEqual({name:'amro'});
  });
});