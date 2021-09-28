function parseInfo(s) {
  const match = s.match(/\d+/);
  const [number] = match;
  return {
    head: s.slice(0, match.index).toLowerCase(),
    number: parseInt(number),
    tail: s.slice(match.index + number.length).toLowerCase(),
  };
}

function solution(files) {
  files.sort((fileA, fileB) => {
    const a = parseInfo(fileA);
    const b = parseInfo(fileB);

    return a.head !== b.head ? (a.head > b.head ? 1 : -1) : a.number - b.number;
  });

  return files;
}
