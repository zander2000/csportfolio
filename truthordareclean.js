// These ae the variables being manipulated
var truthButton = document.getElementById("truthButton")
var dareButton = document.getElementById("dareButton")
var challenge = document.getElementById("challenge")

//these are the possible uotcomes for the manipulated variables
var dares = ["Eat three spoonfuls of mustard", "be someone's slave for 2 minutes", "Apply peanut butter to one side of your face and jelly to the other.", "Burp as loudly as you can", "Yell at the top of your lungs", "act like a dog and be petted by everyone", "Lick the floor.", "Put ice cubes in your underwear", "Draw a face around your belly button", "Let someone write a word on your forehead in non-permanent marker.", "Imitate a monkey as best you can.", "Talk in a strange accent for the rest of the night.", "For a guy, put on makeup. For a girl, wash off your make up.", "Give someone your phone and let them send one text to anyone in your contacts", "Sniff the armpits of everyone in the room", "Do the worm.", "Try to juggle 2 or 3 items of the group's choosing.", "Lick the wall", "Wear your pants backward for the rest of the game", "Give someone in the group a piggyback ride around the room"]
var truths = ["If you could go on a date with anyone in the room who would it be?", "If you could kiss a celebrity without it impacting your current relationship, who would it be?", "What would you do on the perfect first date?", "How long have you gone without showering?", "What's your scariest nightmare?", "What kind of pajamas do you wear to bed?", "What's the dumbest thing you've ever done on a dare?", "Where is the strangest place you've used the bathroom?", "What is your biggest fear?", "What happened on the worst day of your life?", "What's your biggest pet peeve?", "What would you do with a million dollars if you ever won the lottery?", "Who is your best looking teacher that you have ever had?", "Who is your crush at school?", "What is the most expensive thing you own?", "What is the funniest youtube video you have ever seen?", "What he craziest thing that you have ever done without your parents knowing?", " What question are you most afraid of being asked and why?", "Who is your celeb crush?", "What's your scariest nightmare?"]
//these are the buttons that carry out the described function. 
truthButton.addEventListener("click", function(){
    var item = truths[Math.floor(Math.random()*truths.length)];
    
    challenge.innerHTML = item
});

dareButton.addEventListener("click", function(){
    var item = dares[Math.floor(Math.random()*dares.length)];
    
    challenge.innerHTML = item
});