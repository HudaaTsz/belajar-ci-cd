const {add,subtract,multiply,divide}=require("./math");

test("2+3=5",()=>{
    expect(add(2,3)).toBe(5);
});

test("5-2=3",()=>{
    expect(subtract(5,2)).toBe(3);
});

test("4*5=20",()=>{
    expect(multiply(4,5)).toBe(20);
});

test("10/2=5",()=>{
    expect(divide(10,2)).toBe(5);
});

test("Divide by zero",()=>{
    expect(divide(10,0)).toBe("Cannot divide by zero");
});