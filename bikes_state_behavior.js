'use strict';

function Bikeshed(name, capacity){
  this.capacity = capacity;
  this.bikesinshed = 0;
  this.name = name;

  //refactor constructor to include methods --> encapulate in constructor
  //then your object can't be accessed outside closure
  //this = object that can be accessed

  this.hangBike = function () {
    this.bikesInShed++;
  }

  this.report = function () {
    return `${this.name}: ${this.capacity - this.bikesinshed} slots left`
  }
}

let small = new Bikeshed ('small', 3);
let large = new Bikeshed ('large' , 10);

small.bikesinshed++ //currently this is carrying state --> use behavior/method
large.bikesinshed++ //refactor to prototype
large.bikesinshed++

//methods - behaviors
Bikeshed.prototype.hangBike = function () {
  this.bikesinShed++;
}

small.hangBike();

Bikeshed.prototype.report = function () {
  return `${this.name}: ${this.capacity - this.bikesinshed} slots left`
}

console.log(Object.keys(small));
console.log('Small: ', small.capacity - small.bikesinshed);
console.log(small.report());

small.capacity = 0;
large.capacity = 1;
