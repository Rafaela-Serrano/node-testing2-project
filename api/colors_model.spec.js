const db = require('../data/db-config');
const model = require('./colors_model');

beforeAll(async()=>{
    await db.migrate.rollback();
    await db.migrate.latest();
    await db.seed.run();
});

afterAll(async()=>{
    await db('colors').truncate();
});

describe('colors model db access functions',()=>{
    describe('getAll()',()=>{
        it('can get a list with all colors in db',async()=>{
            let colors = await model.getAll();
            expect(colors).toHaveLength(4);
        })
    })
    describe('getById',()=>{
        it('can get a color with a given Id',async()=>{
            const yellow = await model.getById(1);
            const red = await model.getById(2);
            const green = await model.getById(3);
            const blue = await model.getById(4);

            expect(yellow).toMatchObject({id:1,color:'yellow'});
            expect(red).toMatchObject({id:2,color:'red'});
            expect(green).toMatchObject({id:3,color:'green'});
            expect(blue).toMatchObject({id:4,color:'blue'});
        })
    })
})

