 const fib = function (n) {
    const fib = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));
  
    return fib(n - 1) + fib(n - 2);
  };
  
 