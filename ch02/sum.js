function sum(a, b) {
    return a + b;
}
sum(1, 2);
// sum(1, 'text')
// ch02 / sum.ts: 5: 8 - error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
// 5 sum(1, 'text')
// ~~~~~~
//   Found 1 error.
