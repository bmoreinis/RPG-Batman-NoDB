window.onload = start;

var options=[];
var buttonElement = document.getElementById("button1");
var currentStoryElement = document.getElementById("currentStory");
var dropdown = document.getElementById("choices");
var messages = [];
var classChoices;
var answer;
var hasImage = false;
/* Global Variables */
// attributes = attribute, current value
var attributes = [["Strength",0],["Intelligence",0],["Wisdom",0],["Constitution",0],["Dexterity",0],["Charisma",0]];
// classReq = attributes[index], minimum value to qualify, classes[index]
var classReq = [[0,11,0],[1,11,1],[2,11,2],[3,11,3],[4,11,4],[5,11,5]];
var classes = [["Christian Bale",["Batman Begins","The Dark Night"],"One Punch Knockout"],[]];
var classChoices = [];
var whichAttribute = 0; // Which one are we on?
var maxRolls = 3; // how many rerolls? Default = 3
var rollCount = 0; // which reroll are we on?
var rollButton = document.getElementById("rerolls");
rollButton.innerText = "Reroll 0 of "+maxRolls;

/* Uses Case Statements */

// variables
// var name = "";
var scene1=town;

function checkAnswers(answer) {
  switch(answer) {
    case "Pick a Batman":
      pickAttributes();
      break;
    case "Think some more":
      thinkSomeMore();
      break;
    case "Go into the forest":
      forest();
      break;
    case "Ignore it and go home":
      homeEarly();
      break;
    case "Knock on door":
      houseKnock();
      break;
    case "Buy fruit":
      fruitKnock();
      break;
    case "Enter glade":
      gladeKnock();
      break;
    case "Listen":
      knockKnockGod();
      break;
    }
}

function town(){
  // var name = prompt("what is your name?");
  story("One day you are on your way home from school and you hear a whisper coming from a dark forest you never remember seeing before.\
  \n\"Come here Come here!\"\
  \nit says. You can't place the voice, but there is something familiar about it. What do you do?");
  choices = ["Pick a Batman","Think some more", "Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}


/* Function pickAttribute
 * Rolls dice for an attribute and populates page. No save.
 * @param none
 * @return none
 */
function pickAttribute(){
  let rollFor=document.getElementById("rollFor");
  let attribute=document.getElementById("attribute");
  attribute.innerText = attributes[whichAttribute][0];
  let rollBox=document.getElementById("roll");
  rollBox.innerHTML=random();
}

/* Function Keep
 * Pulls dice roll value from page to save in array.
 * Then rolls next attribute.
 * @param none
 * @return none
 */
function keep(){
  if (rollCount > maxRolls){
      rollButton.innerText = "No Rerolls Left";
  }
  let sum = parseInt(document.getElementById("roll").innerText);
  attributes[whichAttribute][1] = sum;
  alert("Your "+ attributes[whichAttribute][0] + " is now "+ attributes[whichAttribute][1]);
  if (whichAttribute == 5) {
    stats();
  }
  else {
    whichAttribute++;
    pickAttribute();
  }
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

/* Function reRoll
 * Re-calls Pick Attribute without advancing attribute
 * Then rolls next attribute.
 * @param none
 * @return random integer 3 to 18
 */
function reRoll(){
  rollCount++;
  if (rollCount < maxRolls){
    rollButton.innerText = "Reroll "+rollCount+" of "+maxRolls;
    pickAttribute();
  }
  else if (rollCount == maxRolls){
    rollButton.innerText = "No Rerolls Left";
    pickAttribute();
  }
  else {
    rollButton.innerText = "No Rerolls Left";
    keep();
  }
}

function allDone(){
  alert("All Done with your stats");
}

function stats(){
  document.body.innerHTML="<h1>Your Character Stats</h1>"
  var statTable = document.createElement("table");
  var labels = statTable.insertRow();
  for (let thead = 0; thead < 6; thead++){
    var th1 = document.createElement("th");
    th1.innerHTML = attributes[thead][0];
    labels.appendChild(th1);
  }
  var values = statTable.insertRow();
  for (let tcell = 0; tcell < 6; tcell++){
    var Cell = values.insertCell();
    Cell.innerHTML = attributes[tcell][1];
  }
  document.body.appendChild(statTable);
}


function allDone(){
  alert("All Done with your stats");
}

function stats() {
  document.body.innerHTML="<h1>Your Character Stats</h1>";
  var statTable = document.createElement("table");
  var labels = statTable.insertRow();
  for (let thead = 0; thead < 6; thead++) {
    var th1 = document.createElement("th");
    th1.innerHTML = attributes[thead][0];
    labels.appendChild(th1);
    }
  var values = statTable.insertRow();
  for (let tcell = 0; tcell < 6; tcell++) {
    var Cell = values.insertCell();
    Cell.innerHTML = attributes[tcell][1];
    }
  document.body.appendChild(statTable);
  classOptions();
}

/* Function Class Options
 * @param none (attributes is global)
 * @return classList array
 * This function references a list of classes
 * And selects those that match the requirements
 * Based on the player's rolled attributes
 * attributes = attribute, current value
 * classReq = attributes[index], minimum value to qualify, classes[index]
 */
function classOptions(){
  let classList = []; //Gives the possible characters(classes) we could be, Christan Bale, Ben Affleck
  let strengthRoll = attributes[0][1];
  let minRoll = 11; //We are saying that minRoll is 11 according to the current airTable database, will be subject to change;
  //for (let att6 = 0; att6 < attributes.length; att6++ ){
  for (let att6 = 0; att6 < 1; att6++ ){
    if (attributes[att6][1] >= classReq[att6][1]){
      classChoices.push(classes[classReq[att6][2]][0]);
    }
  }
  alert("You could be: "+JSON.stringify(classChoices));
}

// Places
function thinkSomeMore() {
  story("You think about it some more and are sure this forest was not here yesterday.  \
  \nWhere did it come from and how does it know your name?\
  \nWhat do you want to do?");
  choices = ["Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}


function forest() {
  addImage("https://www.weprepper.com/wp-content/uploads/2018/07/nature-2569214_960_720-1280x720.jpg");
  story("You enter the forest and soon become hopefully lost.\
  \nWhile you can't find your way out you do see a few places of interest.\
  \nThere is a house made of candy.\
  \nThere is a fruit vender.\
  \nThere is a small opening in the trees with a ring of mushroom in the middle.");
  choices = ["Knock on door","Buy fruit", "Enter glade"];
  answer = setOptions(choices);
}

function homeEarly() {
  var messages = ['You ignore it and walk home.',
    'Nothing exciting happens to you one the way.',
    "That was a very boring story, but you must be a boring person for having chosen to go home.",
    "If it was me there is no way I am passing up the chance to check out a new forest that just happens over night.",
    "To each his own I guess."
  ];
  delayText(messages, 1000);
}

function houseKnock() {
  addImage("https://recipes.net/wp-content/uploads/2020/10/hauntedgingerbreadhouserecipe.jpg");
  knockKnock();
}

function fruitKnock() {
  addImage("https://img.freepik.com/free-photo/waist-up-portrait-bearded-man-wearing-apron-smiling-while-selling-fresh-fruit-vegetable-farmers-market_236854-22932.jpg");
  knockKnock();
}

function gladeKnock() {
  addImage("https://cdn3.vectorstock.com/i/1000x1000/43/42/glade-in-magic-forest-vector-2474342.jpg");
  knockKnock();
}

function knockKnock(){
  story("You hear a loud voice that seems to come from the sky.");
  choices = ["Listen"];
  answer = setOptions(choices);
}

function knockKnockGod(){
  var response = prompt("Knock knock!");
  if (response != "Who's there?") {
    alert("You were supposed to say \"Who\'s there?\"");
    knockKnock();
  }
  else {
    prompt("Nobel");
    alert("No bell. That's why I knocked!");
  }
}
