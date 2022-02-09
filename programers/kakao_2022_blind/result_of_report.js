function solution(ids, report, k) {
  const history = {};
  const reporters = {};
  const targets = {};

  ids.forEach((id) => {
    reporters[id] = 0;
  });

  report.forEach((data) => {
    if (!history[data]) {
      history[data] = true;
      const [reporter, target] = data.split(' ');
      if (!targets[target]) targets[target] = { count: 0, reporters: [] };
      targets[target].count++;
      targets[target].reporters.push(reporter);
    }
  });

  for (const target in targets) {
    if (targets[target].count >= k) {
      targets[target].reporters.forEach((reporter) => {
        reporters[reporter]++;
      });
    }
  }

  return ids.map((id) => reporters[id]);
}
