const { add, subtract } = require('./app');

test('Menjumlahkan angka', () => {
    expect(add(2,3)).toBe(5);
});

test('Mengurangi angka', () => {
    expect(subtract(5,2)).toBe(3);
});