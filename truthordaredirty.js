// These ae the variables.
var truthButton = document.getElementById("truthButton")
var dareButton = document.getElementById("dareButton")
var challenge = document.getElementById("challenge")

//these are the possible uotcomes for the manipulated variables
var dares = ["Take off your shirt or your pants for one round and give someone of the opposite sex a hug", "Kiss a friend passionately on the lips", "put whipped cream on someone's body and lick it off", "Unwrap a piece of candy in your mouth", "Give a back rub the closest person of the opposite sex or the person to your right", "Pinch every guy's and girl's butt in this room", "Smooch a guy/girl with tongue for 1 minute", "(if girl) twerk on a guy in the room  for thirty seconds, (if guy) grind on a girl in the room or a stuffed animal for 30 seconds", "Suck on someone's belly button", "Take an ice cube and run it up and down your body until it is melted", "Bite/kiss a booty of the closest person of the opposite sex or the person to your left", "give anyone there a lapdance", "give someone of the opposite sex a hickey", "slap someones booty of your choosing or let someone of your choosing slap your booty"]
var truths = ["Are you still a virgin?", "Would you ever do a 3-some?", "How do you feel about sex in groups?", "How many partners have you had at one time?", "Do you prefer to be on top or bottom?", "What is your favorite sex position?", "Have you ever thought about being a stripper?", "Does size matter?", "What is the wildest/sexiest thing you have ever done in your life?", "What is the sexiest pick-up line you have ever heard?", "What is the sexiest pick-up line you have ever used?", "What's the worst thing about being a guy/a girl?", "What is the most crazy/sexy thing you have ever done in public?", "Who would you prefer to have kids with out of anyone in the room?", "what is the dirtiesst thing you've ever done to a partner?"]
//these are the buttons that carry out the described function. 
truthButton.addEventListener("click", function(){
    var item = truths[Math.floor(Math.random()*truths.length)];
    
    challenge.innerHTML = item
 
});

dareButton.addEventListener("click", function(){
    var item = dares[Math.floor(Math.random()*dares.length)];
    
    challenge.innerHTML = item
});