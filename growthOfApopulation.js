function nbYear(p0, percent, aug, p) {
    // p0 = population at the beginning of the year
    // percent = annual growth percentage
    // aug = number of new inhabitants per year
    // p = End population number
  
    // return the number of years needed for p0 to be >= p based on the other parameters
      let annualPopulation = 0;
      let counter = 0;
      
      while (p > annualPopulation) {
      annualPopulation = Math.floor(p0 + (p0 * (percent / 100)) + aug);
      p0 = annualPopulation
      console.log(annualPopulation)
      counter++;
      }
  
      return counter;
      
}