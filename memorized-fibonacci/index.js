// 常规斐波那契包含很多次重复的计算，优化它也很简单，我们只需要加个缓存
var fibonacci = (function() {
  // 这里我用了 Map，用普通对象也是可以的
  var cache = new Map();
  return function(n){
    if(n == 0 || n == 1){
      cache.set(n,n);
      return n;
    }
    var v1 = cache.get(n-1) ? cache.get(n-1):fibonacci(n-1);
    var v2 = cache.get(n-2) ? cache.get(n-2):fibonacci(n-2);
    var nVal = v1 + v2;
    cache.set(n, nVal);
    return nVal;
  }
})()