//Ruby into JS

var apples = 14
console.log(apples)

console.log('I have ' +apples + ' apples.')

var materials = ['wood', 'metal', 'stone']
var words = {
  elephant: 'The world\'s largest land mammal.',
  school: 'A place of learning.',
  iceCream: 'A delicious milk-based dessert.',
}

console.log(materials)
console.log(words)

var num = 9;
if(num > 10) {
  console.log(+num + ' is greater than 10.');
} else if(num === 10) {
  console.log(+num + ' is exactly 10.');
} else
  console.log(+num + ' must be less than 10.')

  // 10.times do
  //   puts "Doing the same thing over and over."
  // end
var times = 10;
for(var i=0; i<times; i++){
  console.log('Doing the same thing over and over.')
}

// base = 5
// 20.times do |num|
//   puts num + base
// end
var base = 5;
var times = 20;
for(var i=0; i<times.length; i++){
  console.log(times[i]+base)
}

// total = 0
// 100.times do |num|
//   total += num
// end
// puts total
var total = 0;
var times = 100;
for(var i=0; i<times.length; i++){
   total += times[i]
}
console.log(total);

// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end
var range = [3,4,5,6,7,8,9,10,11,12,13,14,15];
for(var i=0; i<range.length; i++){
  if (range[i] > 9) {
  console.log('You can get on the rollercoaster!');
}  else {
    console.log('You are too short to ride this rollercoaster.')
}}

// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end
var containers = ['purse', 'wallet', 'backback']
for(var i=0; i<containers.length; i++){
  console.log(containers[i])
}

// def hello_world
//   puts "Hello world!"
// end
//
// hello_world
var helloWorld = function(){
 console.log('Hello world!')
 };

helloWorld()

// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount
function add(firstNum, secondNum){
    return firstNum + secondNum
  }
  amount = add(5,7);
console.log(amount)
