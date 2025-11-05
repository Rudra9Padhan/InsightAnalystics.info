const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Contact = require('../src/models/Contact');

describe('Contact API', () => {
    beforeAll(async () => {
        const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/contact-test';
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await Contact.deleteMany({});
    });

    it('should create a new contact', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({
                name: 'John Doe',
                email: 'john@example.com',
                message: 'Hello, this is a test message.'
            });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Contact created successfully');
    });

    it('should retrieve all contacts', async () => {
        await Contact.create({
            name: 'Jane Doe',
            email: 'jane@example.com',
            message: 'Hello, this is another test message.'
        });

        const response = await request(app).get('/api/contact');

        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
        expect(response.body[0]).toHaveProperty('name', 'Jane Doe');
    });
});