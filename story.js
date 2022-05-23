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
var classReq = [[0,13,0],[1,14,1],[2,9,2],[3,11,3],[4,10,4],[5,12,5]];
var classes = [["Christian Bale",["Batman Begins", "The Dark Night"],"One Punch Knockout"],["Robert Pattinson",["The Batman 2020"],"Knows All The Answers"],["Michael Keaton",["Batman 1989"],"Predicts Villain Behaviors"],["Will Arnett",["Lego Batman: The Movie"],"No Fall Damage"],["Ben Affleck",["Batman vs. Superman"],"Can Escape Any Room"],["Kevin Conroy",["Batman: The Killing Joke"],"Soul Catching Voice"]];
var classList = []; // which classes can we pick?
var choices = []; // what are our scene choices?
var maxRolls = 3; // how many rerolls? Default = 3
var rollCount = 0; // which reroll are we on?
var button2;
var currentStoryElement = document.getElementById("currentStory");
var sKModalArray = ["sKAbout(0)","sKAbout(1)","sKAbout(2)","sKAbout(3)","sKAbout(4)","sKAbout(5)","sKAbout(6)","sKAbout(7)","sKAbout(8)","sKAbout(9)","sKAbout(10)","sKAbout(11)",];
var sKBio = ["Jason was a troubled street orphan who was caught by Batman trying to steal the Batmobile's tires. Batman figured that Jason could channel his rage by using it against criminals, otherwise he may become a criminal himself. Jason earns the Robin mantle by taking down a gang of thieves and the villain Two-Face. Batman has a new sidekick: the enthusiastic, brash and impulsive 2nd Robin.","Government official Amanda Waller gained respect for Batman, but realized he would not always be around. She secretly injected Warren McGinnis with a nanotech solution, leading to his son Terry being born as a genetic copy of Bruce Wayne. A series of events, including Terry confronting a gang, him being assisted by an old Bruce Wayne, and the death of Warren, leads to Terry taking the Batsuit. Terry gains Bruce's trust by using the suit to take down the villain responsible for Warren's death, Derek Powers. Terry takes the Batman mantle for the coming years in the show Batman Beyond.","In the care of her uncle James Gordon, Barbara was interested in justice and obsessed with Batman. With approval from James, she learned self-defense and jujitsu. She was rejected enrollment into the police academy by James, and also rejected by the FBI. She decided to create a feminine Batman costume to spite James. During her first appearance, she was faced with Killer Moth and his goons. Although bested by Killer moth, Barbara persevered, and helped Batman and Robin (Richard Grayson) take down the rest of the criminals who escaped. Batgirl is now a trusted member of the Bat-family.","Stephanie, the daughter of the third-rate villain Cluemaster, was annoyed with her fathers antics. Creating a suit and taking the name Spoiler, she left clues of Cluemaster's plans for the police and assisted Batman and Robin (Tim Drake) in his capture. She helped again when Cluemaster escaped prison and teamed up with the Gully Carson gang. When she next ran into Robin, who was taking down a street gang, she didn't want to miss out on the fun, and decided to invest time in crimefighting.","Tim followed the action of Batman and Robin (Richard Grayson), and witnessed Robin do a quadruple summersault, which only a Grayson could do. This revealed their identities to him. Tim observed Batman developing psychotic behavior due to the death of the 2nd Robin (Jason Todd), and followed Nightwing (Richard Grayson) to convince him to help Batman. The two heroes were captured by Two-Face, and Tim, with assistance from Alfred, took the Robin costume and rescued them. After convincing from Tim, Alfred and Nightwing, Batman trains Tim to be the next Robin. While lacking in agility and strength like his predecessors, the 3rd Robin excels as a master detective.","Assassin David Cain trained his daughter Cassandra to be the ultimate weapon. She can read her opponents and predict their next move. When killing the target of her first hit, she saw what she was doing was wrong and ran away. Eventually landing in Gotham, Cassandra saved Commissioner Gordon's life from David Cain. Batman and Barbara Gordon allowed her to take the Batgirl costume. The new hero fights with unmatched tactics.","Ace the dog was separated from his owner, John Wilker, during a gang attack, and was rescued by Batman and Robin (Richard Grayson). The duo went to rescue Wilker, and Ace followed, leading to him assisting the heroes in finding and taking down the gang, and even saving them from capture. Wilker, finding a new job and unable to take care of Ace, left him with Bruce Wayne. The dependable \"Bat-Hound\" continued to assist Batman and Robin in crime fighting.","Kate was drawn to law enforcement, as her parents both served in the military. The events of her early life were devastating, including the loss of her mother and sister to terrorists, and her unfair expulsion from the West Point academy. In being attacked by a mugger and taking him down, Kate found her purpose in crime fighting. Jacob Kane, her father, became aware of her initial vigilante work, and decided to train her. After overcoming 3 years of the fiercest regimen, Kate was ready to become Batwoman.","Richard Grayson was a young circus acrobat in the family act \"The Flying Graysons.\"  His parents were killed in a sabotaged act, and Bruce Wayne adopted him in empathy. When Richard discovered that Bruce was Batman, Bruce saw their same desire to get justice, and offered him the chance to be his partner. Richard chose the alias Robin, his mothers nickname for him. The first Robin, the Boy Wonder, used Batman's combat and detective skills, as well as his own acrobatic skills, to help fight crime in Gotham City.","Batman and Assassin Talia al Ghul fell in love during Batman's clash with the League of Assassins, and had a child, Damian, whom Batman was unaware of. It was Talia who raised Damian, and The League of Assassins trained him. Even at an early age Damian was a respected Assassin. Eventually, Talia let Damien meet his father. Damian decided he wanted to be Batman's next sidekick. Even through Damian's cold-hearted upbringing, he and Batman managed to bond. Batman agreed to accept his son as his sidekick, and Damian became the fourth to hold the title of Robin.","Alfred worked as the butler for the Wayne family. When Thomas and Martha Wayne were killed, Alfred took up the responsibility of being Bruce Wayne's guardian. Since learning that Bruce became Batman, Alfred has provided tech and medical support to him, as well as the ever growing Bat-family. Alfred may be Batman's most trusted ally.","Betty Kane discovered that her aunt Kathy Kane was the Batwoman. Betty convinced her aunt to let her become her sidekick. Kathy hoped that Betty would lose interest during training. However, Betty constantly proved her value and dedication. In her own Batgirl costume, she helped Batman, Robin (Richard Grayson) and Batwoman take down the Cobra Gang, earning the respect of the heroes. The new Batgirl became a constant and reliable ally."]
var imgClass = [["Jason","RedHood","Wingman"],["Terry"],["Barbara","Oracle"],["Spoiler","StephR","StephB"],["Tim","RedRobin"],["Cassandra","BlackBat"],["Ace"],["Kathy"],["Richard","Nightwing"],["Damien","Redbird"],["Alfred"],["Betty"]];
//var modalText = "Houston, we have a problem defining modalText";
var modalText = "Houston, we have a problem defining modalText";
let classText = [];

function checkAnswers(answer) {
  switch(answer) {
    case "Keep":
      keep();
      break;
    case "Reroll":
      reroll();
      break;
    case "See Stats":
      stats();
      break;
    case "Start Over":
      restart();
      break;
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

/* Function Keep
 * Pulls dice roll value from page to save in array.
 * Then rolls next attribute. 
 * @param none
 * @return none
 */
function keep(){
  let add2Story = "Your "+attribute+" is now "+roll+".\n<br>";
  attributes[whichAttribute][1]=roll;
  roll = random();
  if (whichAttribute < 5) {
    whichAttribute++;
    attribute = attributes[whichAttribute][0];
    add2Story+=("You rolled a "+roll+" for "+attribute+".");
    story(add2Story);
    choices = ["Keep", "Reroll"];
    answer = setOptions(choices);
  }
  else {
    story("Your character rolls are complete.  Let's see what they were.");
    choices = ["See Stats", "Start Over"];
    answer = setOptions(choices);
  }
}

function reroll(){
  rollCount++;
  let rollsLeft = maxRolls - rollCount;
  if (rollsLeft<1){
    roll = random();
    story("You rolled a "+ roll+". That was your last reroll.  Select KEEP.");
    choices = ["Keep","No Rerolls Left"];
  }
  else if (rollsLeft<0){
    story("Sorry, you're stuck with your"+ roll+". You have no rerolls left.");
    choices = ["Keep"];
  }
  else {
    roll = random();
    story("You rolled a "+roll+" for "+attribute+". You have "+rollsLeft+" rerolls left.");
    choices = ["Keep","Reroll"];
  }
  answer = setOptions(choices);
}

function reStart(){
  story("Sorry, you don't get to keep restarting until you get great rolls!");
  choices = ["Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}

function stats(){
  story("Here are your stats.");
  let statsBox = document.getElementById("modalBox");
  let statsText = document.getElementById("modalText");
  statsText.innerHTML="<h1>Your Character Stats</h1>"
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
  statsText.appendChild(statTable);
  statsBox.style.display = "block";
  picker();
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
  classList = []; 
  for (let att6 = 0; att6 < attributes.length; att6++ ){
    if (attributes[att6][1] >= classReq[att6][1]){
      /* classList.push(classes[classReq[att6][2]][0]); */
      classList.push(att6);
    }
  }
  return classList;
}

function picker(){
  classList = classOptions();
  let classData = getClassData(classList);
  let addStory="Which Batman shall you be?  Here are your options based on your rolls:<br><ul style=\"text-align:left;\">";
  for (let choice=0; choice < classData.length; choice++){
    modalText = classDescription(classList[choice]);
    classText.push(modalText);
    addStory+="<li> "+classes[classList[choice]][0]+ ": <button onclick=\"showModal(classText["+choice+"]);\">About</button>";
  }
  addStory+="</ul>";
  story(addStory);
  choices = getClassData(classList,0);
  answer = setOptions(choices);
}

function classDescription(classID){
  let classDesc = "Name: " + classes[parseInt(classID)][0]+" <br>";
  classDesc += "Batman Movies: " + classes[parseInt(classID)][1].toString() +" <br>";
  return classDesc;
}

function getClassData(array1,field){
  let classData = [];
  if (typeof field === "undefined") {
    for (let option = 0; option < array1.length; option++){
    classData.push(classes[array1[option]]);
    }
  }
  else {
    for (let option = 0; option < array1.length; option++){
     classData.push(classes[array1[option]][field]);
    }
  }
  return classData;
}


function hideModal() {
  let statsBox = document.getElementById("modalBox");
  statsBox.removeChild(statsBox.lastChild);
  statsBox.style.display = "none";
}

function reStart(){
  story("Sorry, you don't get to keep restarting until you get great rolls!");
  choices = ["Go into the forest", "Ignore it and go home"];
  answer = setOptions(choices);
}

function sKSetup(){
  document.getElementById("sKSwitch").remove();
  classes = [["Jason Todd",["Robin","Red Hood","Wingman"],"undefined"],["Terry McGinnis",["Batman Beyond"],"undefined"],["Barbara Gordon",["Batgirl","Oracle"],"undefined"],["Stephanie Brown",["Spoiler","Robin","Batgirl"],"undefined"],["Tim Drake",["Robin","Red Robin"],"undefined"],["Cassandra Cain",["Batgirl","Black Bat"],null],["Ace",["Bat-Hound"],null],["Katherine Kane",["Batwoman"],null],["Richard Grayson",["Robin","Nightwing"],null],["Damian Wayne",["Robin","Redbird"],null],["Alfred Pennyworth",["Penny-one"],null],["Elizabeth Kane",["Batgirl"],null]];
  classReq = [[0,14,0],[0,12,0],[1,13,0],[1,11,0],[2,11,0],[2,14,0],[3,13,0],[3,10,0],[4,13,0],[4,12,0],[5,15,0],[5,11,0]];
  //classReq = [[0,1,0],[0,1,0],[1,1,0],[1,1,0],[2,1,0],[2,1,0],[3,1,0],[3,1,0],[4,1,0],[4,1,0],[5,1,0],[5,1,0]];
  whichAttribute = -1;
  rollCount = 0;
  story("");
  document.getElementById("button1").remove();
  button2 = document.createElement("button");
  button2.id = "button2";
  button2.innerText = "What will you do?"
  button2.setAttribute("onclick","sKCheckAnswers(dropdown.value)");
  document.getElementById("border").appendChild(button2);
  sKRoller();
}

function sKRoller(){
  let add2Story = "";
  if (whichAttribute > -1) {
    add2Story = "Your "+attribute+" is now "+roll+".\n<br>";
    attributes[whichAttribute][1]=roll;
  }
  roll = random();
  if (whichAttribute < 5) {
    whichAttribute++;
    attribute = attributes[whichAttribute][0];
    add2Story+=("You rolled a "+roll+" for "+attribute+".");
    story(add2Story);
    choices = ["Keep", "Reroll"];
    answer = setOptions(choices);
  }
  else {
    story("Your character rolls are complete.  Let's see what they were.");
    choices = ["See Stats", "Start Over"];
    answer = setOptions(choices);
  }
}


function sKCheckAnswers(answer) {
  switch(answer) {
    case "Keep":
      sKRoller();
      break;
    case "Reroll":
      sKReroll();
      break;
    case "See Stats":
      sKStats();
      break;
    case "Start Over":
      restart();
      break;
    }
}

function sKNextAtt(){

}

function sKReroll(){
  rollCount++;
  let rollsLeft = maxRolls - rollCount;
  if (rollsLeft<1){
    roll = random();
    story("You rolled a "+ roll+". That was your last reroll.  Select KEEP.");
    choices = ["Keep","No Rerolls Left"];
  }
  else if (rollsLeft<0){
    story("Sorry, you're stuck with your"+ roll+". You have no rerolls left.");
    choices = ["Keep"];
  }
  else {
    roll = random();
    story("You rolled a "+roll+" for "+attribute+". You have "+rollsLeft+" rerolls left.");
    choices = ["Keep","Reroll"];
  }
  answer = setOptions(choices);
}

function sKStats(){
  story("Here are your stats.");
  let statsBox = document.getElementById("modalBox");
  let statsText = document.getElementById("modalText");
  statsText.innerHTML="<h1>Your Character Stats</h1>"
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
  statsText.appendChild(statTable);
  statsBox.style.display = "block";
  sKPicker();
}

function sKPicker(){
  classList = sKClassOptions();
  let classData = getClassData(classList);
  let addStory="Who will be your sidekick?  Here are your options based on your rolls:<br><ul style=\"text-align:left;\">";
  story(addStory);
  for (let choice=0; choice < classData.length; choice++){
    addStory+="<li> "+classData[choice][0];
    let about = document.createElement("button");
    about.innerText = "about";
    about.setAttribute("onclick",sKModalArray[classList[choice]]);
    let listLine = document.createElement("div");
    listLine.setAttribute("class","line");
    listLine.innerHTML ="<li>"+ classData[choice][0];
    listLine.appendChild(about);
    currentStoryElement.appendChild(listLine);
  }
  addStory+="</ul>";
  //story(addStory);
  choices = getClassData(classList,0);
  answer = setOptions(choices);
}

function sKClassOptions(){
  classList = []; 
  for (let att6 = 0; att6 < attributes.length; att6++ ){
    if (attributes[att6][1] >= classReq[0+2*(att6+1)-2][1]){
      /* classList.push(classes[classReq[att6][2]][0]); */
      classList.push(0+2*(att6+1)-2);
    }
    if (attributes[att6][1] >= classReq[0+2*(att6+1)-1][1]){
      /* classList.push(classes[classReq[att6][2]][0]); */
      classList.push(0+2*(att6+1)-1);
    }
  }
  return classList;
}

function sKAbout(id){
  let statsBox = document.getElementById("modalBox");
  let statsText = document.getElementById("modalText");
  statsBox.style.width = "800px";
  statsBox.style.height = "500px";
  statsBox.innerHTML = "";
  statsText.innerHTML="<h1>"+classes[id][0]+"</h1>"+"<span>Alias(s): "+classes[id][1].join(" / ")+"</span><br><br>"+sKBio[id];
  statsBox.appendChild(statsText);
  let imageBox = document.createElement("div");
  imageBox.id = "imageBox"
  statsBox.appendChild(imageBox);
  for (var i = 0; i < imgClass[id].length; i++){
    let image = document.createElement("div");
    image.setAttribute("class","image");
    image.id = imgClass[id][i];
    imageBox.appendChild(image);
  }
  let close = document.createElement("button");
  close.setAttribute("onClick","hideModal()");
  close.innerHTML="Close";
  statsBox.appendChild(close);
  statsBox.style.display = "block";
}