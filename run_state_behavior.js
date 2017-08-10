'use strict';

function TrainingPlan(totalMiles, longestRun) {
  const training = this;
  this.totalMiles = totalMiles;
  this.longestRun = longestRun;
  this.fitness = 0;

  return {
    getTotalMiles: function(){
      return training.totalMiles;
    },
    getLongRun: function(){
      return training.longestRun;
    },
    goRun: function(miles){
      training.totalMiles += miles;
      training.fitness += 1;
      if (training.longestRun < miles){
        training.longestRun = miles;
      }
      return training.totalMiles;
    },
    skipRun: function(){
      training.fitness -= 1;
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
