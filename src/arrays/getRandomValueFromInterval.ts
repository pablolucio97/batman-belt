//returns a random value from a interval

export function getRandomValueFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
