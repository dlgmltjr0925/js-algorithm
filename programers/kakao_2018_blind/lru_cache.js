function solution(cacheSize, cities) {
  let answer = 0;

  const cache = {};
  let cacheCount = 0;

  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i].toLowerCase();
    if (cache[city] === undefined) {
      answer += 5;
      cache[city] = i;
      cacheCount++;
      if (cacheCount > cacheSize) {
        let lastIndex = i;
        let key = "";
        Object.entries(cache).forEach(([city, i]) => {
          if (i < lastIndex) {
            lastIndex = i;
            key = city;
          }
        });
        delete cache[key];
        cacheCount--;
      }
    } else {
      answer++;
      cache[city] = i;
    }
  }

  return answer;
}
