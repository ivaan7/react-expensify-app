const add = (a,b)=>a+b;
const generateGreeting = (name)=>  `Hello ${name}`;

test("should add two numbers",()=>{
    const result = add(3,4);

    expect(result).toBe(7);
});

test("should geberate greeting", ()=>{
const greeting = generateGreeting("Mike");
expect(greeting).toBe("Hello Mike");
});