function foo(a, b = 0) { // Use optional parameter with a default value of 0
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1));    // 1
console.log(foo(undefined,5)); //5
console.log(foo(null,5));//5