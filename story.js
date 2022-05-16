/* Uses Case Statements */

// variables
// var name = "";
var scene1 = roller;
var whichAttribute = 0; // Which one are we on?
var roll = -1;
var attribute = "Undefined";
/* Global Variables */
// attributes = attribute, current value
var attributes = [["Strength",0],["Intelligence",0],["Wisdom",0],["Constitution",0],["Dexterity",0],["Charisma",0]];
// classReq = attributes[index], minimum value to qualify, classes[index]
var classReq = [[0,11,0],[1,11,1],[2,11,2],[3,11,3],[4,11,4],[5,11,5]];
var classes = [["Christian Bale",["Batman Begins, The Dark Night"],"One Punch Knockout"],[]];
var classReq = [[0,13,0],[1,14,1],[2,9,2],[3,11,3],[4,10,4],[5,12,5]];
var classes = [["Christian Bale",["Batman Begins", "The Dark Night"],"One Punch Knockout"],["Robert Pattinson",["The Batman 2020"],"Knows All The Answers"],["Michael Keaton",["Batman 1989"],"Predicts Villain Behaviors"],["Will Arnett",["Lego Batman: The Movie"],"No Fall Damage"],["Ben Affleck",["Batman vs. Superman"],"Can Escape Any Room"],["Kevin Conroy",["Batman: The Killing Joke"],"Soul Catching Voice"]];
var choices = [];
var maxRolls = 3; // how many rerolls? Default = 3
var rollCount = 0; // which reroll are we on?

function checkAnswers(answer) {
  switch(answer) {
    case "Keep":
      keep();
      break;
    case "Reroll":
      reroll();
      break;
    /* case "Next Attribute":
      next();
      break;*/
    /* case "Start Over":
      restart();
      break;*/
    }
}

function roller(){
  roll = random();
  attribute = attributes[whichAttribute][0];
  story("You rolled a "+roll+" for "+attribute+".");
  choices = ["Keep", "Reroll"];
  answer = setOptions(choices);
}


/* Function Keep
 * Pulls dice roll value from page to save in array.
 * Then rolls next attribute. 
 * @param none
 * @return random integer 3 to 18
 */
function random(){
  let sum = 0;
  for (let roll = 1; roll <= 3; roll ++){
    let rolled = Math.floor(Math.random()*6)+1;
    sum += rolled;
  }
  return sum;
}


function keep(){
  let add2Story = "Your "+attribute+" is now "+roll+".\n<br>";
  attributes[whichAttribute][1]=roll;
  roll = random();
  whichAttribute++;
  attribute = attributes[whichAttribute][0];
  add2Story+=("You rolled a "+roll+" for "+attribute+".");
  story(add2Story);
  choices = ["Keep", "Reroll"];
  answer = setOptions(choices);
}

function reroll(){
  rollCount++;
  let rollsLeft = maxRolls - rollCount;
  if (rollsLeft<1){
    story("You have no rerolls left.  Select KEEP.");
    choices = ["Keep","No Rerolls Left"];
  }
  else {
    roll = random();
    story("You rolled a "+roll+" for "+attribute+". You have "+rollsLeft+" rerolls left.");
    choices = ["Keep","Reroll"];
  }
  answer = setOptions(choices);
}

function picker(){
  story("");
  choices = classes.slice();
  answer = setOptions(choices);
}

function reStart(){
  story("Sorry, you don't get to keep restarting until you get great rolls!");
  choices = ["Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}
