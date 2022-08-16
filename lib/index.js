function sum(a,b){
    return a+b;
};
function isSting(e){
    return typeof e === 'string';
};
function isNumber(e){
    return typeof e === 'number'
}
module.exports = {
    sum,
    isSting,
    isNumber,
}
