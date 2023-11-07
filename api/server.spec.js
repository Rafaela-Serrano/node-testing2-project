const request=require('supertest');
const db=require('../data/db-config');
const server=require('./server');

beforeAll(async()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
});

afterAll(async()=>{
    await db('colors').truncate();
});

describe('server.js',()=>{
    it('should set testing enviroment',()=>{
        expect(process.env.NODE_ENV).toBe('testing')
    })
})

describe('[GET]/colors',()=>{
    it('should return 200 OK',()=>{
        return request(server)
        .get('/colors')
        .then(res=>{
            expect(res.status).toBe(200)
            expect(res.body.length).toBe(4)
            
        })
    });
describe('[GET]/colors/:id',()=>{
    it('should return a color with a given id',async()=>{
        let color = await request(server).get('/colors/1')
        expect(color.body.color).toBe("yellow")
        expect(color.body.id).toBe(1)
    })
})
})