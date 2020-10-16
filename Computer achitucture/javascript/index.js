console.log('Hello this is Clearance');
//alert('Hey this is my site');

document.getElementById('sometext').innerHTML = 'Hello Clearance Morumudi, welcome back!';
/*var age = prompt('What is your age? ');
document.getElementById('sometext').innerHTML = age;
var age = prompt('How old are you?')
console.log(age);

var b = prompt ('Enter your number');
console.log(b);

var a = prompt ('Enter your operator');
console.log(a);

var c = prompt('Enter another number');
console.log(c);

if (a == '+')
{
    var results = b + c;
    console.log(results);
}
else if (a == '/')
{
    console.log(b / c);
}
else if (a == '-')
{
    console.log(b - c);
}
else if (a == '*')
{
    console.log(b * c);
}
else 
{
    console.log('Syntax error');
}

function greetings ()
{
    var name = prompt('Hello what is your name?');
    var results = ('Oh! okay what a nice name you have there ' + name);
    console.log(results);
}
greetings();

var num = 1;

while(num <= 100)
{
    console.log(num);
    num++;
}

for (var num = 0; num <= 50; num++)
{
    console.log(num);
}

let week1 = [1, 2, 3, 4, 5];
let week2 = [6 , 7, 8, 9, 10, 11, 12];
let week3 = [13, 14, 15, 16, 17, 18, 19];
let week4 = [20, 21, 22, 23, 24, 24, 26];
let week5 = [27, 28, 29, 30]

console.log('===========September============');
console.log('S  M  T  W  T  F  S');
console.log('    ');
console.log()*/

var left = prompt('Please enter your string')
console.log(left.split(""));
//console.log(left.join('_'));

let fruits = ['Apple', 'Banana', 'Orange', 'Pineapple', 'Lemon', 'Guava', 'Avocado'];
console.log(fruits);
console.log(fruits.push('strowberry'));
console.log(fruits);
//console.log(fruits.split(','));
console.log(fruits.length);

var vergitables = ['Cabbage', 'Brocoli', 'Carots', 'Kiwi', 'Tomato', 'Onion']
console.log(vergitables);

let groceries = fruits.concat(vergitables);
console.log(fruits.concat.vergitables);
console.log(fruits + vergitables);
console.log(groceries);
console.log(groceries.reverse());
vergitables[vergitables.length] = 'Butter';
console.log(vergitables);
console.log(groceries.sort());

let numbers = [2, 50, 88, 0, 3, 234, 765, 99, 91, 898, 10000, 5, 8, 90, 22];
console.log(numbers.sort(function(a, b) {return a-b}));// sorting number in ascending order
console.log(numbers.sort(function(a, b) {return b-a}));//sorting number is descending order

let newArray = [];
for (let num = 0; num <= 150; num = num + 2)
{
    newArray.push(num);
}
console.log(newArray);
console.log(newArray.sort(function (a, b) {return a-b}));
console.log(newArray.sort(function (a, b) {return b-a}));

let student = {first: '[CLearance , Thango, Kyle, Abraham]', last: ' [Morumudi, Mushi, Smith, Adams]'};
console.log(student.first, student.last);
console.log(student.first.split(""))
console.log(student.last.split(''));

var hungry = prompt('Good morning, are hungry?');
if (hungry == 'yes')
{
    status = 'Make some food and eat!';
    console.log(status);
}
else if (hungry == 'a little')
{
    status = 'grab some snacks!';
    console.log(status);
}
else if (hungry == 'no')
{
    status = 'Go and play';
    console.log(status);
}
else 
{
    status = 'Please restart the program and start again, however this time please enter the valid answer in \"YES/NO/A LITTLE\"';
    console.log(status)
}

var Temperature = prompt('What is your temparature?')
if (Temperature <= 29 || Temperature >= 45)
{
    status = 'You need medical attention, in the mean time please wait in the sick bay!';
    console.log(status);
}
else if (Temperature >= 30 && Temperature <= 37)
{
    status = 'You are healthy, therefore you may enter the premise';
    console.log(status);
}
else if (Temperature >= 38 && Temperature <= 44)
{
    status = 'You are too hot, May you please wait and cool of first before you enter the premise';
    console.log(status);
}
else 
{
    status = 'Please enter the valid number based on your temparature';
    console.log(status);
}

var gender = prompt('Please enter your gender');
//console.log(gender)
var age = prompt('please Enter your age');
if (gender == 'male')
{
    console.log(gender);
}
else if (gender == 'female')
{
    console.log(gender);
}
else 
{
    console.log('Wrong gender format');
}
if (age <= 17)
{
    status = 'You are under age, Therefore according to the country law, you are not allowed to enter the premises';
    console.log(status);
}
else if (age >= 36)
{
    status = ('You do not fall under the range of the youth, the program is only for the youth. Thank you!');
    console.log(status);
}
else if (age >= 18 && age <= 35)
{
    status = 'You are welcome, we are happy that you have joined up.';
    console.log(status);
}
else 
{
    console.log('Please enter the valid age number');
}
var check = prompt('Enter the days number to check if the day number betweeen \"0 - 6\" is a weekend-day or a week-day');
/*switch (check)
{
    case 0:
        text = '\"Sunday\"------> Weekend';
        break;
 
    case 5:
        text = '\"Friday\"------> Weekend';
        break;

    case 6:
        text = '\"Saturday--------> Weekend';
        break;

    default:
        text = 'Weekdays';
        break;
}
console.log(text);*/
if (check == 0 || check >= 5 && check <= 6)
{
    status = 'Weekend';
    console.log(status)
}
else if (check >= 1 && check <= 4)
{
    status = 'Weekdays';
    console.log(status);
}
else 
{
    status = 'Wrong day format';
}

if (check == 0)
{
    status = 'Sunday';
    console.log(status);
}
else if(check == 1)
{
    status = 'Monday';
    console.log(status);
}
else if (check == 2)
{
    status = 'Tuesday';
    console.log(status);
}
else if (check == 3)
{
    status = 'Wednesday';
    console.log(status);
}
else if (check == 4)
{
    status = 'Thursday';
    console.log(status);
}
else if(check == 5)
{
    status = 'Friday';
    console.log(status);
}
else if (check == 6)
{
    status = 'Saturday';
    console.log(status);
}
