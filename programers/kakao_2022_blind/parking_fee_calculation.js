const LAST_TIME = 23 * 60 + 59;

function solution(fees, records) {
  const [defaultTime, defaultPrice, unit, unitPrice] = fees;

  const cars = {};

  for (const record of records) {
    const [time, id, status] = record.split(' ');
    const [h, m] = time.split(':').map((n) => parseInt(n));

    if (!cars[id]) cars[id] = { total: 0, in: -1 };
    if (status === 'IN') {
      cars[id].in = h * 60 + m;
    } else {
      cars[id].total += h * 60 + m - cars[id].in;
      cars[id].in = -1;
    }
  }

  return Object.keys(cars)
    .sort((a, b) => a - b)
    .map((id) => {
      const car = cars[id];
      if (car.in !== -1) car.total += LAST_TIME - car.in;
      const time = Math.ceil(Math.max(car.total - defaultTime, 0) / unit);
      return defaultPrice + time * unitPrice;
    });
}
