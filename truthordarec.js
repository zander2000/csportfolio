// These ae the variables.
var truthButton = document.getElementById("truthButton")
var dareButton = document.getElementById("dareButton")
var challenge = document.getElementById("challenge")


var dares = ["Take off one item of clothing besides socks or shoes", "Kiss a friend passionately", "Tie a cherry stem with your tongue", "Unwrap a piece of candy in your mouth", "Give a back rub the person to your right", "Pinch every guy's and girl's butt in this room", "Smooch a guy/girl for 1 minute", "(if girl) twerk on for thirty seconds or (if guy) grind on the ground of a stuffed animal for 30 seconds", "", "", "", "", "", "", "", "", "", "", "", ""]
var truths = ["are you still a virgin?", "Would you ever do a 3-some?", "How do you feel about sex in groups?", "How many partners have you had at one time?", "Do you prefer to be on top or bottom?", "What is your favourite position?", "Have you ever thought about being a stripper?", "Does size matter?", "What is the wildest thing you have ever done in your life?", "What is the sexiest pick-up line you have ever heard?", "What is the sexiest pick-up line you have ever used?", "What's the worst thing about being a guy/a girl?", "What is the most crazy thing you have ever done in public?", "", "", "", "", "", "", ""]

truthButton.addEventListener("click", function(){
    var item = truths[Math.floor(Math.random()*truths.length)];
    
    challenge.innerHTML = item
 
});

dareButton.addEventListener("click", function(){
    var item = dares[Math.floor(Math.random()*dares.length)];
    
    challenge.innerHTML = item
});