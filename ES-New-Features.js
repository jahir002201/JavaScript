// ES-New-Features.js

// ECMAScript 2016
// JavaScript Exponentiation (**)
console.log(2 ** 3);

// JavaScript Exponentiation assignment (**=)
let num = 2;
num **= 3;
console.log(num);

// JavaScript Array includes()
console.log([1, 2, 3].includes(2));

// ECMAScript 2017
// JavaScript String padding
console.log('5'.padStart(3, '0'));
console.log('5'.padEnd(3, '0'));

// JavaScript Object entries()
console.log(Object.entries({ a: 1, b: 2 }));

// JavaScript Object values()
console.log(Object.values({ a: 1, b: 2 }));

// JavaScript async and await
async function fetchData() {
  return await new Promise((resolve) => setTimeout(() => resolve('Data fetched'), 1000));
}
fetchData().then(console.log);

// Trailing Commas in Functions
function sum(a, b,) {
  return a + b;
}
console.log(sum(1, 2));

// JavaScript Object.getOwnPropertyDescriptors
const obj = { a: 1, b: 2 };
console.log(Object.getOwnPropertyDescriptors(obj));

// ECMAScript 2018
// Asynchronous Iteration
async function* asyncGenerator() {
  yield 1;
  yield 2;
}
(async () => {
  for await (let num of asyncGenerator()) {
    console.log(num);
  }
})();

// Promise Finally
new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done'), 1000);
}).finally(() => console.log('Promise finished'));

// Object Rest Properties
const { a, ...rest } = { a: 1, b: 2, c: 3 };
console.log(rest);

// New RegExp Features
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = re.exec('2020-01-01');
console.log(match.groups);

// JavaScript Shared Memory
// (Advanced feature, usage requires proper setup)

// ECMAScript 2019
// String.trimStart() and String.trimEnd()
console.log('   Hello World   '.trimStart());
console.log('   Hello World   '.trimEnd());

// Object.fromEntries
console.log(Object.fromEntries([['a', 1], ['b', 2]]));

// Optional catch binding
try {
  throw new Error('Oops');
} catch {
  console.log('Error caught');
}

// Array.flat() and Array.flatMap()
console.log([1, [2, 3], [4, 5]].flat());
console.log([1, 2, 3].flatMap(x => [x, x * 2]));

// Revised Array.sort()
// (Sorting is stable from ES2019 onward)

// Revised JSON.stringify()
// (Improvements in serializing non-enumerable properties)

// Separator symbols allowed in string literals
console.log(JSON.stringify({ "key": "value" }, null, 2));

// Revised Function.toString()
// (Function string representation improvements)

// ECMAScript 2020
// BigInt
console.log(123n + 456n);

// String.matchAll()
const regex = /t(e)(st(\d?))/g;
const str = 'test1test2';
console.log([...str.matchAll(regex)]);

// The Nullish Coalescing Operator (??)
let foo = null ?? 'default string';
console.log(foo);

// The Optional Chaining Operator (?.)
let obj2 = { a: { b: { c: 3 } } };
console.log(obj2?.a?.b?.c);

// Logical AND Assignment Operator (&&=)
let a1 = true;
let b = false;
a1 &&= b;
console.log(a1);

// Logical OR Assignment (||=)
let c = null;
let d = 1;
c ||= d;
console.log(c);

// Nullish Coalescing Assignment (??=)
let e = null;
e ??= 'default';
console.log(e);

// Promise.allSettled()
Promise.allSettled([Promise.resolve(1), Promise.reject('error')])
  .then(console.log);

// Dynamic Import
// import('./module.js').then(module => module.default());

// ECMAScript 2021
// Promise.any()
Promise.any([Promise.reject('error'), Promise.resolve(2)])
  .then(console.log);

// String replaceAll()
console.log('foo bar foo'.replaceAll('foo', 'baz'));

// Numeric Separators (_)
let largeNumber = 1_000_000;
console.log(largeNumber);

// ECMAScript 2022
// Array at()
console.log([1, 2, 3].at(-1));

// String at()
console.log('abc'.at(1));

// RegExp /d
console.log(/\d/.exec('123'));

// Object.hasOwn()
console.log(Object.hasOwn({ a: 1 }, 'a'));

// error.cause
try {
  throw new Error('Failed', { cause: 'Something went wrong' });
} catch (err) {
  console.log(err.cause);
}

// await import
// (Dynamic import usage already covered)

// Class field declarations
class MyClass {
  field = 'field value';
}

// Private methods and fields
class PrivateClass {
  #privateField = 'private';
  #privateMethod() {
    return this.#privateField;
  }
  publicMethod() {
    return this.#privateMethod();
  }
}
const pc = new PrivateClass();
console.log(pc.publicMethod());

// ECMAScript 2023
// Array findLast() and findLastIndex()
console.log([1, 2, 3, 4].findLast(n => n % 2 === 0));
console.log([1, 2, 3, 4].findLastIndex(n => n % 2 === 0));

// Array toReversed()
//console.log([1, 2, 3].toReversed());

// Array toSorted()
//console.log([3, 1, 2].toSorted());

// Array toSpliced()
//console.log([1, 2, 3, 4].toSpliced(1, 2, 5, 6));

// Array with()
//console.log([1, 2, 3].with(1, 4));

// #! (Shebang)
// (Not executable in browser, but allows specifying interpreter)

// ECMAScript 2024
// Object.groupBy() and Map.groupBy()
const groupBy = (array, fn) => array.reduce((acc, val) => {
  const key = fn(val);
  (acc[key] = acc[key] || []).push(val);
  return acc;
}, {});
console.log(groupBy([1, 2, 3, 4], x => x % 2));

// Map.groupBy()
// (Same as Object.groupBy, but with Maps)

// Temporal API (Date and time handling)
// const { PlainDate, PlainTime, PlainMonthDay, PlainYearMonth } = Temporal;
// console.log(PlainDate.from('2024-07-30'));
// console.log(PlainTime.from('12:34:56'));
// console.log(PlainMonthDay.from('07-30'));
// console.log(PlainYearMonth.from('2024-07'));
