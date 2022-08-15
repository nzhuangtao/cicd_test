const {sum,isSting} = require('../lib/index');
beforeEach(() => {
    initializeCityDatabase();
});
test('1+2 = 3',()=>{
    expect(sum(1,2)).toBe(3);
});
test('123 is not string',()=>{
    expect(isSting(123)).not.toBeTruthy();
});
test('\'123\' is string',()=>{
    expect(isSting('123')).toBeTruthy();
});