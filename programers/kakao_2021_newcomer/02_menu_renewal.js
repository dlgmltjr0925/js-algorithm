function solution(orders, course) {
  const courseObj = {};

  const combination = (order, start, prev) => {
    for (let i = start; i < order.length; i++) {
      const menu = prev + order[i];
      if (course.includes(menu.length)) {
        if (!courseObj[menu]) courseObj[menu] = 0;
        courseObj[menu]++;
      }
      combination(order, i + 1, menu);
    }
  };

  orders.forEach((order) => {
    combination(order.split('').sort().join(''), 0, '');
  });

  let answer = [];

  course.forEach((c) => {
    let arr = [];
    let max = 2;
    Object.entries(courseObj).forEach(([key, value]) => {
      if (key.length === c) {
        if (value > max) {
          arr = [key];
          max = value;
        } else if (value === max) {
          arr.push(key);
        }
      }
    });

    answer = answer.concat(arr);
  });

  return answer.sort();
}
