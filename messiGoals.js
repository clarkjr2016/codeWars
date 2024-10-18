function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

  return Array.from(arguments).reduce((total, goal) => {
    return total + goal;
  });
}
