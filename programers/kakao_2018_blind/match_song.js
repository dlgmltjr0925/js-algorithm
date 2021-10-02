function transMusic(m) {
  return m
    .replace(/C#/g, "c")
    .replace(/D#/g, "d")
    .replace(/F#/g, "f")
    .replace(/G#/g, "g")
    .replace(/A#/g, "a");
}

function parseInfo(musicInfo) {
  const [s, e, title, m] = musicInfo.split(",");
  const [sh, sm] = s.split(":").map((s) => parseInt(s));
  const [eh, em] = e.split(":").map((s) => parseInt(s));

  return {
    title,
    duration: (eh - sh) * 60 + em - sm,
    music: transMusic(m),
  };
}

function solution(memory, musicInfos) {
  let answer = "(None)";
  const match = [];

  memory = transMusic(memory);

  for (let i = 0; i < musicInfos.length; i++) {
    const musicInfo = parseInfo(musicInfos[i]);
    const { duration, music } = musicInfo;
    for (let j = 0; j < music.length; j++) {
      if (music[j] === memory[0]) {
        if (check(musicInfo, j)) match.push(musicInfo);
      }
    }
  }

  function check(musicInfo, s) {
    const { duration } = musicInfo;
    const music = musicInfo.music.slice(0, duration);
    let index = s;
    for (let i = 1; i < memory.length; i++) {
      index++;
      if (index === music.length) index = 0;
      if (music[index] !== memory[i]) return false;
    }
    return true;
  }

  match.sort((a, b) => {
    return b.duration - a.duration;
  });

  return match.length === 0 ? "(None)" : match[0].title;
}
