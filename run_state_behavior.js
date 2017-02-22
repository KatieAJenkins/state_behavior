'use strict';

function TrainingPlan(totalMiles, longestRun) {
  const training = this;
  this.totalMiles = totalMiles;
  this.longestRun = longestRun;
  this.fitness = 0;

  return {
    getTotalMiles: function(){
      console.log(training.totalMiles);
      return training.totalMiles;
    },
    getLongRun: function(){
      console.log(training.longestRun);
      return training.longestRun;
    },
    goRun: function(miles){
      training.totalMiles += miles;
      training.fitness += 1;
      if (training.longestRun < miles){
        training.longestRun = miles;
      }
      console.log('fitness: ', training.fitness);
      console.log('totalMiles: ', training.totalMiles);
      return training.totalMiles;
    },
    skipRun: function(){
      console.log('fitness: ', training.fitness);
      training.fitness -= 1;
      console.log('fitness after: ', training.fitness);
    }
  };
}

var jennieTraining = new TrainingPlan(0 , 10)

jennieTraining.goRun(3);
jennieTraining.goRun(7);
jennieTraining.getTotalMiles();
jennieTraining.getLongRun();
jennieTraining.goRun(12);
jennieTraining.getLongRun();
jennieTraining.skipRun();
jennieTraining.skipRun();
