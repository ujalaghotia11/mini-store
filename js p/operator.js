// # Airthmatic operators (+,-,*,/,%,++,--)
// # Assignment operators (=,+=,-=,*=,/=,%=)
// # Comparison operators (==,===,!=,!==,>,<)
// #Logical operators (&&,||,!)
// # Bitwise operators (&,|,^,~,<<,>>)
// # Unary operators (++/--/+/-/!)
// # Ternary operators (?:)
// # Relational operators (in, instanceof)
// # BigInt operators (**)
// # String operators (+ concatenates strings.
// += appends to an existing string.)


// ==========================================
// 1. VARIABLE DECLARATIONS
// ==========================================
const a = 10;
let b = 20; // Used 'let' so 'b' can be incremented/modified

// ==========================================
// 2. ARITHMETIC OPERATORS
// ==========================================
console.log("--- Arithmetic Operators ---");
const c = a + b;            // Addition (30)
console.log("Addition (a + b):", c);
console.log("Subtraction (b - a):", b - a); // 10
console.log("Multiplication (a * b):", a * b); // 200
console.log("Division (b / a):", b / a); // 2
console.log("Modulus/Remainder (b % a):", b % a); // 0
console.log("Exponentiation (a ** 2):", a ** 2); // 100

// Increment & Decrement
const d = b++; // Post-increment: returns b (20), then sets b to 21
console.log("Post-increment result (d):", d); // 20
console.log("Value of b after b++:", b); // 21

let e = ++b; // Pre-increment: increments b to 22, then returns b
console.log("Pre-increment result (e):", e); // 22

// ==========================================
// 3. COMPARISON OPERATORS
// ==========================================
console.log("\n--- Comparison Operators ---");
console.log("Greater than (b > a):", b > a); // true
console.log("Less than (a < b):", a < b); // true
console.log("Greater than or equal (a >= 10):", a >= 10); // true
console.log("Less than or equal (b <= 20):", b <= 20); // false (b is 22)

console.log("Loose Equality (10 == '10'):", 10 == '10'); // true (type coercion)
console.log("Strict Equality (10 === '10'):", 10 === '10'); // false (checks type & value)
console.log("Loose Inequality (10 != '10'):", 10 != '10'); // false
console.log("Strict Inequality (10 !== '10'):", 10 !== '10'); // true

// ==========================================
// 4. LOGICAL OPERATORS
// ==========================================
console.log("\n--- Logical Operators ---");
// Logical AND (&&): Returns first falsy value, or last truthy value
console.log("Logical AND (a && b):", a && b); // 22

// Logical OR (||): Returns first truthy value
console.log("Logical OR (a || b):", a || b); // 10

// Logical NOT (!): Inverts truthiness
console.log("Logical NOT (!a):", !a); // false
console.log("Double Logical NOT (!!a):", !!a); // true (converts to boolean)

// Nullish Coalescing (??): Returns right side ONLY if left side is null or undefined
const x = null ?? "default value";
console.log("Nullish Coalescing (null ?? 'default'):", x); // "default value"

// ==========================================
// 5. ASSIGNMENT OPERATORS
// ==========================================
console.log("\n--- Assignment Operators ---");
let num = 5;
num += 10; // num = num + 10
console.log("Addition Assignment (num += 10):", num); // 15
num *= 2;  // num = num * 2
console.log("Multiplication Assignment (num *= 2):", num); // 30

// ==========================================
// 6. BITWISE OPERATORS (Work on 32-bit binary)
// ==========================================
console.log("\n--- Bitwise Operators ---");
console.log("Bitwise AND (5 & 1):", 5 & 1); // 1 (0101 & 0001 = 0001)
console.log("Bitwise OR (5 | 1):", 5 | 1);   // 5 (0101 | 0001 = 0101)
console.log("Bitwise XOR (5 ^ 1):", 5 ^ 1);  // 4 (0101 ^ 0001 = 0100)
console.log("Bitwise NOT (~5):", ~5);        // -6
console.log("Left Shift (5 << 1):", 5 << 1);  // 10 (0101 shifted left = 1010)

// ==========================================
// 7. TERNARY (CONDITIONAL) OPERATOR
// ==========================================
console.log("\n--- Ternary Operator ---");
const result = b > a ? "b is larger" : "a is larger";
console.log("Ternary output:", result); // "b is larger"

// ==========================================
// 8. TYPE OPERATORS
// ==========================================
console.log("\n--- Type Operators ---");
console.log("typeof a:", typeof a); // "number"
console.log("typeof 'hello':", typeof "hello"); // "string"
console.log("instanceof check:", [] instanceof Array); // true

