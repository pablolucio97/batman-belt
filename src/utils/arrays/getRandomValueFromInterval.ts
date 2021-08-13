
//returns a random value from a interval

function getRandomValueFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  console.log(getRandomValueFromInterval(10, 500))