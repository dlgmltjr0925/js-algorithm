function solution(records) {
  const nickname = {};
  
  const answer = [];
  
  records.forEach(record => {
      const [action, id, name] = record.split(' ');
      
      if (action !== 'Leave') {
          nickname[id] = name;
      }
      if (action !== 'Change') {
          answer.push([id, action]);
      }
  })
  
  return answer.map(([id, action]) => {
      return `${nickname[id]}님이 ${action === 'Enter' ? '들어왔' : '나갔'}습니다.`
  })
}