console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1


var makeMiddleEarth = function () 
 {
  // create a section tag with an id of middle-earth
  var middleearth = document.createElement("section");
  //middleearth.id = middle-earth;
  for (i=0;i<lands.length;i++)
  {
   // add each land as an article tag 
    var land = document.createElement("article");
   // inside each article tag include an h1 with the name of the land
    land.innerHTML = '<h1>' + lands[i] + '</h1>';
    middleearth.appendChild(land);
  }  
  // append middle-earth to your document body
  body.appendChild(middleearth);
}
makeMiddleEarth();

// Part 2
var theShire = body.querySelectorAll('article')[0];
var makeHobbits = function() 
{
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  var hobbitList = document.createElement("ul");
  for(i=0;i<hobbits.length;i++)
  {
     var hobbit = document.createElement("li");
     //give each hobbit a class of hobbit
     hobbit.className = 'hobbit';
     hobbit.innerText = hobbits[i];
     hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
}
makeHobbits();

// Part 3
var Frodo = body.querySelectorAll('article')[0];
var keepItSecretKeepItSafe = function() {
  // create a div with an id of 'the-ring'
  var theRing = document.createElement("div");
  //theRing.id = the-theRing;
  // give the div a class of 'magic-imbued-jewelry'
  theRing.className = "magic-imbued-jewelry"
  // add the ring as a child of Frodo
  Frodo.appendChild(theRing);
  // Bonus: add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
}
keepItSecretKeepItSafe();

// Part 4

var rivendell = body.querySelectorAll('article')[1];
var makeBuddies = function ()
 {
  // create an aside tag
  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  // attach an unordered list of the 'buddies' in the aside
  for(var i = 0, len = buddies.length; i < len; i++)
  {
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  // insert your aside as a child element of rivendell
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();

// Part 5
var strider = rivendell.querySelectorAll('li')[3];
var beautifulStranger = function () 
{
  // change the 'Strider' textnode to 'Aragorn'
  strider.textContent = "Aragorn";
}
beautifulStranger();

// Part 6
var hobbits = theShire.querySelector('ul');
var leaveTheShire = function() 
{
  // assemble the hobbits and move them to Rivendell
  rivendell.appendChild(hobbits);
}
leaveTheShire();

// Part 7


var forgeTheFellowShip = function forgeTheFellowShip() 
{
  // create a new div called 'the-fellowship' within rivendell
  var thefellowship = document.createElement("div");
  rivendell.appendChild(thefellowship);
  // add each hobbit and buddy one at a time to 'the-fellowship'
  
  // after each character is added make an alert that they have joined your party
}


// Part 8


function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}


// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}

