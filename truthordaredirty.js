// These ae the variables.
var truthButton = document.getElementById("truthButton")
var dareButton = document.getElementById("dareButton")
var challenge = document.getElementById("challenge")

//these are the possible uotcomes for the manipulated variables
var dares = ["Take off your shirt or your pants for one round", "Kiss a friend passionately", "Tie a cherry stem with your tongue", "Unwrap a piece of candy in your mouth", "Give a back rub the person to your right", "Pinch every guy's and girl's butt in this room", "Smooch a guy/girl for 1 minute", "(if girl) twerk on someone in the room  for thirty seconds, (if guy) grind on the ground or a stuffed animal for 30 seconds", "Suck on someone belly button", "Take and ice cube and run it up and down your body until it is melted", "Bite/kiss a booty of someone of the opposite sex", "give anyone there a lapdance"]
var truths = ["Are you still a virgin?", "Would you ever do a 3-some?", "How do you feel about sex in groups?", "How many partners have you had at one time?", "Do you prefer to be on top or bottom?", "What is your favourite position?", "Have you ever thought about being a stripper?", "Does size matter?", "What is the wildest thing you have ever done in your life?", "What is the sexiest pick-up line you have ever heard?", "What is the sexiest pick-up line you have ever used?", "What's the worst thing about being a guy/a girl?", "What is the most crazy thing you have ever done in public?"]
//these are the buttons that carry out the described function. 
truthButton.addEventListener("click", function(){
    var item = truths[Math.floor(Math.random()*truths.length)];
    
    challenge.innerHTML = item
 
});

dareButton.addEventListener("click", function(){
    var item = dares[Math.floor(Math.random()*dares.length)];
    
    challenge.innerHTML = item
});