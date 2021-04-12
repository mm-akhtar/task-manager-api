const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userone, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)


test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: 'Andrew',
        email: 'andrew@example.com',
        password: 'MyPass777!'
    }).expect(201)

    // Assert that the database was changed
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertion about the response
    expect(response.body).toMatchObject({
        user: {
            name: 'Andrew',
            email: 'andrew@example.com'
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('MyPass777!')
})

test('should login existing user', async () => {
    const response =  await request(app).post('/users/login').send({
        email: userone.email,
        password: userone.password
    }).expect(200)

    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
})

test('should not login nonexistent user ', async () => {
    await request(app).post('/users/login').send({
        email: 'sgdfsh@gnmail.com',
        password: 'r3r8jsdf'
    }).expect(400)
})

test('should get profile for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userone.tokens[0].token}`)
        .send()
        .expect(200)
})

test('should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401) 
})



test('Should delete account for user', async () => {
    await request(app)
        .delete('/users/me')
        .set('Authorization', `Bearer ${userone.tokens[0].token}`)
        .send()
        .expect(200)
    user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should not delete account for unauthorized user', async () => {
    await request(app)
        .delete('/users/me')
        .send()
        .expect(401)   
})

test('should upload avatar image', async () => {
    await request(app)
        .post('/users/me/avatar')
        .set('Authorization', `Bearer ${userone.tokens[0].token}`)
        .attach('avatar', 'tests/fixtures/profile-pic.jpg')
        .expect(200)
    
    const user = await User.findById(userOneId)
    expect(user.avatar).toEqual(expect.any(Buffer))
})

test('Should update valid user field', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userone.tokens[0].token}`)
        .send({
        name: 'Andrew 2'
        })
        .expect(200)
    
    const user = await User.findById(userOneId)
    expect(user.name).toBe('Andrew 2')
})

test('Should not update invalid user field', async () => {
    await request(app)
        .patch('/users/me')
        .set('Authorization', `Bearer ${userone.tokens[0].token}`)
        .send({
        height: 20
        })
        .expect(400)
    
})
 