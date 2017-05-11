/*
 用 ES5 实现 ES6 generator
 */
function generator(sequencer) {
  return {next: sequencer.apply(null, [].slice.call(arguments, 1))};
}

function fibonacciSeq() {
  var last = 0, now = 1, next = 1;
  return function () {
    last = now;
    now = next;
    next = last + now;
    return last;
  }
}

var fib = generator(fibonacciSeq);

for (var i = 0; i < 10; i++) {
  console.log(fib.next());
}
// 1,1,2,3,5,8,13,21,34,55
