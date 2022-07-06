function createTeam(size) {
  const team = [];

  for (let currentNo = 0; currentNo < size; currentNo++) {
    const player = () => console.log(`${currentNo} is playing`);

    team.push(player);
  }

  return team;
}

const myTeam = createTeam(3);

const player0 = myTeam[0];
const player2 = myTeam[2];

player0(); // 0 is playing
player2(); // 2 is playing
