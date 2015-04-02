var lives = 3;
function livecheck() {
  if (lives===0){
   alert("You ran out of lives! Game Over");
   throw new error ("You ran out of lives! Game Over");
  }
}
confirm("Game Start!"); //choose to start game
var name= prompt("What is your Name?");//enter name

alert("Quick, " +name + "! You have 3 minutes to solve all of the riddles. To start, you have 3 lives. For every incorrect answer, one life will be taken away from you. When you are left with no lives, or if time runs out, the game will end. Good Luck!"); //instructions (what we were aiming)


var choice= prompt("Choose a Level: 1, 2, or 3");//choose level

switch (choice){
  case '1': //if choose level 1
  var first = prompt("What is as big as you are and yet does not weigh anything?");
    if (first=== 'shadow'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: shadow.");
    } 
    var second= prompt(" What goes up and doesn’t come back down?");
    if (second=== 'age'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: age.");
    }
     var third= prompt("What belongs to you but is used more by others?");
    if (third=== 'name'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is:name. ");
    } 
    var fourth= prompt("I have all the knowledge you have. But I am small as your fist that your hands can hold me. Who am I?"); 
    if (fourth=== 'brain'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: brain!");
    }
    var fifth= prompt("What is the word that is spelled incorrectly in all dictionaries?");
    if (fifth==='incorrectly'){
      alert("Correct!");
    }
    else{
      lives--;
      livecheck();
      alert("WRONG! The right answer is:incorrectly");
    }
    var sixth= prompt ("Everyone in the world break me when they speak every time. Who am I?");
    if (sixth==='silence'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is:silence.");
    }
    var seventh= prompt ("There is a kind of fish that can never swim. What is that?");
    if(seventh=== 'dead fish'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: dead fish");
    }
    var eighth= prompt("I will always come, never arrive today. What am I?");
    if(eighth==='tomorrow'){
      alert("Correct!");
    }
    else{
      lives--;
      livecheck();
      alert("WRONG! The right answer is: tomorrow");
    }
    var ninth= prompt("I’m full of keys, but I can’t open any door. What am I? ");
    if (ninth==='piano'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: piano");
    }
    var tenth = prompt("I don’t speak, can’t hear or speak anything, but I will always tell the truth. What am I?");
    
    if (tenth==='mirror'){
      alert("Correct!");
    }
    else{
      lives--;
      livecheck();
      alert("WRONG! The right answer is: mirror");
    }
    break;
     
  case '2': //if choose level 2
    var first2= prompt("What gets broken without being held?");
    if (first2=== 'promise'){
     alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG!  The right answer is: promise!");
    }
    var second2= prompt("What can't be used until it's broken? ");
    if (second2=== 'egg'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: egg!");
    }
      var third2= prompt("What two things can you never eat for breakfast?");
    if (third2=== 'lunch and dinner'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: lunch and dinner!");
    }
     var fourth2= prompt("What starts with a P and ends with an E and has a million letters in it?");
    if (fourth2=== 'post office'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: post office!");
    }
    var fifth2= prompt("The more of them you take, the more you leave behind. What are they?");
    if (fifth2=== 'footsteps'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: footsteps!");
    }
    var sixth2= prompt("What has a tongue, cannot walk, but gets around a lot?");
    if (sixth2=== 'shoe'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: shoe");
    }
    var seventh2= prompt("Everyone in the world needs it. They generously give it. But never take it. Then what is it? ");
    if (seventh2=== 'advice'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: advice!");
    }
    var eighth2= prompt("What is Black and white and read (red) all over? ");
    if (eighth2=== 'newspaper'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: newspaper!");
    }
    var ninth2= prompt("When the water comes down, I go up. What am I? ");
    if (ninth2=== 'umbrella'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: umbrella!");
    }
    var tenth2= prompt("The man who invented it doesn't want it. The man who bought it doesn't need it. The man who needs it doesn't know it. What is it?");
    if (tenth2=== 'coffin'){
      alert("Correct!");
    }
    else {
      alert("WRONG! The right answer is: coffin!");
    }
    var eleventh2= prompt("What building has the most stories?");
    if (eleventh2=== 'library'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: library!");
    }
    var twelve2= prompt("I am very easy to get into,but it is hard to get out of me.What am I?");
    if (twelve2=== 'trouble'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: trouble!");
    }
    var thirteen2= prompt("What do you call a fish without an eye?");
    if (thirteen2=== 'fsh'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: fsh!");
    } 
    var fourteen2= prompt("There is something who can catch but cant throw ?");
    if (fourteen2=== 'cold'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: cold!");
    }
    var fifteen2= prompt("If I drink, I die. If i eat, I am fine. What am I?");
    if (fifteen2=== 'fire'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: fire!");
    }
    var sixteen2= prompt("What word becomes shorter when you add two letters to it?");
    if (sixteen2=== 'short'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: short!");
    }
    var seventeen2= prompt("What has a neck but no head?");
    if (seventeen2=== 'bottle'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: bottle!");
    }
    var eighteen2= prompt("Can you name the two days starting with T besides Tuesday and Thursday?");
    if (eighteen2=== 'today and tomorrow'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: today and tomorrow!");
    }
    var nineteen2= prompt("What has four eyes but cannot see?");
    if (nineteen2=== 'mississippi'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: mississippi!");
    }
    var twenty2= prompt("Take off my skin -- I won't cry, but you will! What am I?");
    if (twenty2=== 'onion'){
      alert("Correct!");
    }
    else {
      lives--;
      livecheck();
      alert("WRONG! The right answer is: onion!");
    }
    break;
    
  case '3': //if choose level 3
   var first3= prompt("Which letter is not me?");
    if (first3=== 'u'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: u.");
   } 
    var second3= prompt("What do you call a witch at the beach?");
   if (second3=== 'sandwich'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: sandwich.");
   }
    var third3= prompt("What do you get if you cross a pig with a karate fighter?");
   if (third3=== 'pork chop'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! You lose one life! The right answer is: pork chop.");
   }
     var fourth3= prompt("What has four wheels and flies?");
   if (fourth3=== 'garbage truck'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: garbage truck.");
   }
     var fifth3= prompt("What has teeth but can't bite?");
   if (fifth3=== 'comb'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: comb.");
   }
     var sixth3= prompt("What flowers have two lips?");
   if (sixth3=== 'tulips'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG!  The right answer is: tulips.");
   }
     var seventh3= prompt("In what state does it cost the most to live in?");
   if (seventh3=== 'Expennsylvania'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: Expennsylvania.");
   }
    var eighth3= prompt("Anyone can take it as long as it's on someone.");
   if (eighth3=== 'pity'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: pity.");
   }
    var ninth3= prompt("What is the center of gravity?");
   if (ninth3=== 'v'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: v, center of the word graVity.");
   }
    var tenth3= prompt("Sometimes I’m a sphere,Sometimes I’m a banana,And sometimes I’m not there at all.What am I?");
   if (tenth3=== 'moon'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: moon.");
   }
    var eleventh3= prompt("This on this.That on that.Growing tall,but never fat.What am I?");
   if (eleventh3=== 'a stack'){
     alert("Correct!");
   }
   else {
     lives--;
     livecheck();
     alert("WRONG! The right answer is: a stack.");
   }
    var twelfth3= prompt("Which 'BUS' could cross the ocean?");
    if (twelfth3=== 'columbus'){
      alert("Correct!");
    }
    else {
     lives--;
     livecheck();
      alert("WRONG! The right answer is: columbus.");
    }
    var thirteenth3= prompt("It is hate and has hate in it, but it isn’t hate.");
    if (thirteenth3=== 'hatred'){
      alert("Correct!");
    }
    else {
     lives--;
     livecheck();
      alert("WRONG!  The right answer is: hatred.");
    }
    var fourteenth3= prompt("When pronounced, it sounds nothing like the word.");
    if (fourteenth3=== 'a sentence'){
      alert("Correct!");
    }
    else {
     lives--;
     livecheck();
      alert("WRONG! The right answer is: a sentence.");
    }
    var fifteenth3= prompt("What runs around the yard without moving?");
    if (fifteenth3=== 'fence'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: fence.");
    }
    var sixteenth3= prompt("What can split itself before splitting something else?");
    if (sixteenth3=== 'lightning'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: lightning.");
    }
    var seventeenth3= prompt("Whoever makes me can hear me, but to all the others I'm silent. What am I?");
    if (seventeenth3=== 'a thought'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG!  The right answer is: a thought.");
    }
    var eighteenth3= prompt("I have an eye but cannot see. I am faster than any man alive and have no limbs. ");
    if (eighteenth3=== 'hurricane'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: hurricane.");
    }
    var nineteenth3= prompt("What is black when it's clean and white when it's dirty?");
    if (nineteenth3=== 'chalkboard'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: chalkboard.");
    }
    var twenty3= prompt("I cover what is real and hide what is true,But sometimes I bring out the courage in you.What am I?");
    if (twenty3=== 'mask'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: mask.");
    }
    var twentyone3= prompt("I am a king but also a common device of measure. What am I?");
    if (twentyone3=== 'ruler'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG!  The right answer is: ruler.");
    }
    var twentytwo3= prompt("What has roots as nobody sees,Is taller than trees,Up, up it goes, And yet never grows?");
    if (twentytwo3=== 'mountain'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: mountain.");
    }
    var twentythree3= prompt("Voiceless it cries,Wingless flutters,Toothless bites,Mouthless mutters.");
    if (twentythree3=== 'wind'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: wind.");
    }
    var twentyfour3= prompt("It cannot be seen, cannot be felt,Cannot be heard, cannot be smelt.It lies behind stars and under hills,And empty holes it fills.It comes out first and follows after,Ends life, kills laughter.");
    if (twentyfour3=== 'dark'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: dark.");
    }
    var twentyfive3= prompt("Alive without breath, As cold as death; Never thirsty, ever drinking, All in mail never clinking.");
    if (twentyfive3=== 'fish'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG!  The right answer is: fish.");
    }
    var twentysix3= prompt("This thing all things devours; Birds, beasts, trees, flowers; Gnaws iron, bites steel; Grinds hard stones to meal; Slays king, ruins town, And beats mountain down. ");
    if (twentysix3=== 'time'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: time.");
    }
    var twentyseven3= prompt("Thirty white horses on a red hill, First they champ, Then they stamp, Then they stand still.");
    if (twentyseven3=== 'teeth'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: teeth");
    }
    var twentyeight3= prompt("A box without hinges, key, or lid, Yet golden treasure inside is hid.");
    if (twentyeight3=== 'egg'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: egg (eggses!)");
    }
    var twentynine3= prompt("An eye in a blue face, Saw an eye in a green face. That eye is like to this eye, said the first eye, But in low place,Not in high place.");
    if (twentynine3=== 'sun'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG! The right answer is: sun.");
    }
    var thirty3= prompt("What walks on four feet in the morning, two in the afternoon and three at night?");
    if (thirty3=== 'man'){
      alert("Correct!");
    }
    else {
      lives--;
     livecheck();
      alert("WRONG!  The right answer is: man.");
    }
    
}


