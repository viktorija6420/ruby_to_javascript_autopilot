function getNewCar() {
  return {
    city:'Toronto',
    passengers: 30,
    gas: 100
  }
}

// var cars = [];
function addCar(cars, newCar){
cars.push(newCar);
return 'Adding new car to fleet. Fleet size is now' +cars.length +'.'
return cars
}

// var car = {};
function pickUpPassenger(car){
  car.passengers += 1;
  car.gas -= 10;
  return 'Picked up passenger. Car now has ' +car.passengers + ' passengers.'
}

// var car = {};
function getDestination(car){
  if(car.city === 'Toronto'){
    return 'Mississauga'
} else if (car.city === 'Mississauga'){
    return 'London'
} else if (car.city === 'London'){
    return 'Toronto'
}}

// var car = {};
function fillUpGas(car){
  oldGas = car.gas;
  car.gas = 100;
  return ' Filled up to ' +getGasDisplay(car.gas) + ' on gas from ' + getGasDisplay(oldGas) + '.';
}

function getGasDisplay(gasAmount){
 return 'Gas amount: '+gasAmount + '%';
}

function drive(car, cityDistance){
  if (car.gas < cityDistance){
    return fillUpGas(car)
  }
  car.city = getDestination(car)
  car.gas -= cityDistance
  return 'Drove to ' +car.city + ', remaining gas: ' + getGasDisplay(car.gas) + '.';
}

function dropOffPassengers(car) {
  var previousPassengers = car.passengers;
  car.passengers = 0;
  return 'Dropped off ' +previousPassengers + ' passengers.';
}

function act(car){
  var distanceBetweenCities = 50;
  if (car.gas < 20){
    return fillUpGas(car)
  }
  else if(car.passengers < 3){
    return pickUpPassenger(car)
  }
  else {
    if(car.gas < distanceBetweenCities)
      return fillUpGas(car)
    }
    var droveTo = drive(car, distanceBetweenCities)
    var passengersDropped = dropOffPassengers(car)
    return 'Drove to: ' + droveTo +' ' + 'Passengers Dropped: ' + passengersDropped;
}

function commandFleet(cars){
  for(var i=0; i<cars.length; i++){
    var action = act(cars[i]);
    var result = i+1;
    console.log('Car ' +result + ' ' + action);
  }
    console.log('---')
}



function addOneCarPerDay(cars, numDays){
  for(var i=0; i<numDays; i++){
    var newCar = getNewCar()
    console.log( addCar(cars, newCar))
    commandFleet(cars)
  }
}


// CALLING FUNCTIONS HERE!
var cars = [getNewCar(), getNewCar()];
addOneCarPerDay(cars,3);
// var car = getNewCar();
// drive(car, 100);
// gasAmount = 50;

// commandFleet(cars);
// console.log('The car before dropping off passengers: ', newCar1);
// dropOffPassengers(newCar1);
// console.log('The car after dropping off passengers: ', newCar1);
