//alert('Hello Clearance welcome to my side')

function AgeInDays ()
{
    var i = prompt('What is your year of birth....');
    var l = prompt('Which month were you born at?');
    var s = prompt('Which day were you born at?');
    var j = (2020 - i) * 365;
    var k = 2020 - i;
    var n = (12 - l) * 365;
    var p = (((s * 24) * 1993) - 2020) * 365;
    

    var h1 = document.createElement('h1');
    var b = document.createTextNode('You are ' + j + ' days old, and you are ' + k + ' years of age, however you are also ' + n + ' in months old, however you have lived ' + p + ' hours already and counting.');
    h1.setAttribute('id', 'j', 'k', 'n', 'p');
    h1.appendChild(b);
    document.getElementById('flex-box-results').appendChild(h1);
}

function Reset () 
{
    document.getElementById('flex-box-results').remove();
}

function GenerateCat () 
{
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "Images/cats.gif";
    div.appendChild(image);
}

//challange 3: Rock, Papaer, Scissor
function rpsGame(yourChoice) 
{
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
   
    botChoice = numberToChoice(randToRpsInt());
    console.log('computer choice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot won
    console.log(results);
   
    message = finalMessage(results); //{'message': 'You won', 'color': 'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id, botChoice, message) 
}

function randToRpsInt() 
{
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number)
{
    return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice)
{
    var rpsDatabase = {
        'rock': {'scissor': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'paper': 1, 'scissor': 0.5, 'rock': 0}
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore =rpsDatabase[computerChoice][yourChoice];

    return [yourScore , computerScore];
}

function finalMessage([yourScore, computerScore])
{
    if (yourScore === 0) 
    {
        return {'message': 'You lost', 'color': 'red'};
    }
    else if(yourScore === 0.5)
    {
        return {'message': 'You tied', 'color': 'yellow'}
    }
    else 
    {
        return {'message': 'You Won!', 'color': 'green'}
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage)
{
    var imagesDatabase = 
    {
       'rock': document.getElementById('rock').src,
       'paper': document.getElementById('paper').src,
       'scissor': document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 1px 10px 50px rgba(37, 50, 233, 1);' >"
   messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1"
    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 1px 10px 50px rgba(243, 38, 24, 1);'>"
  
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}

//Challange 4: change the color of the button
var all_buttons = document.getElementsByTagName('button');
//console.log(all_buttons);

var copyAllButtons = [];
for (let a = 0; a < all_buttons.length; a++)
{
    copyAllButtons.push(all_buttons[a]);
}
//console.log(copyAllButtons);
function buttonColorChange(buttonThingy)
{
    if (buttonThingy.value === 'red')
    {
        buttonsRed();
    }
    else if(buttonThingy.value === 'green')
    {
        buttonsGreen();
    }
    else if(buttonThingy === 'reset')
    {
        buttonsColorReset();
    }
    else if(buttonThingy === 'random')
    {
        randomColor();
    }
}

function buttonsRed() 
{
    for (let f = 0; f < all_buttons.length; f++)
    {
        all_buttons[f].classList.remove(all_buttons[f].classList[1]);
        all_buttons[f].classList.add('btn-danger');
    }
}

function buttonsGreen() 
{
    for(let f = 0; f <all_buttons.length; f++)
    {
        all_buttons[f].classList.remove(all_buttons[f].classList[1]);
        all_buttons[f].classList.add('btn-success');
    }
}

function buttonsColorReset()
{
    for (let f = 0; f < all_buttons.length; f++)
    {
        all_buttons[f].classList.remove(all_buttons[f].classList[1]);
        all_buttons[f].classList.add(copyAllButtons[f]);
    }
}
