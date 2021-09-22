function solution(expression) {
  const expressions = [];
  
  let num = '';
  for (const c of expression) {
      if (/\D/.test(c)) {
          expressions.push(parseInt(num));
          num = '';
          expressions.push(c);
      } else {
          num += c;
      }
  }
  expressions.push(parseInt(num));
  
  let answer = 0;
  const operations = ['*', '+', '-'];
  
  function calculate(order) {
      let exps = [...expressions];
      
      for (let i = 0; i < 3; i++) {
          const exp = order[i];
          const stack = [];
          
          while (exps.length) {
              const e = exps.shift();
              if (!isNaN(e) || e !== exp) {
                  stack.push(e);
              } else {
                  const prev = stack.pop();
                  const next = exps.shift();
                  stack.push(eval(`${prev}${e}${next}`));
              }
          }
          exps = stack;
      }
      
      return Math.abs(exps[0]);
  }
  
  function dfsOrder(order) {
      if (order.length === 3) {
          answer = Math.max(answer, calculate(order));
      } else {
          for (const operation of operations) {
              if (order.includes(operation)) continue;
              dfsOrder([...order, operation]);
          }
      }
  }
  
  dfsOrder([]);
  
  return answer;
}