function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // const objToArray = Array.from(arguments)

  return Array.from(arguments).reduce((total, goal) => {
    return total + goal;
  });
}
