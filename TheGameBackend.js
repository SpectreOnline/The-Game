//Tido Koldenhof
//Applicatie en media ontwikkelaar LPIAO19A2

//Variables
var Abusedbyofficer = 0;

//start game
console.log("First chapter first scene");
alert("You wake up as per usual and perform your morning routine");
FirstScene();
function FirstScene() {
    var Chapter1Choice1 = prompt("As you exit your home and lock the door, you hear some yelling from your right into a back alley \n \n Are you going to investigate?").toLowerCase();
    if (Chapter1Choice1 == "yes" || Chapter1Choice1 != "no") {
        var Chapter1Option1Choice1 = prompt("as you went to investigate, you turn the corner of the street to see someone violently getting beaten up by police \n One of the officers approaches you \n Officer: You didn't see anything here, understood?").toLowerCase();
        if (Chapter1Option1Choice1 == "understood") {
            alert("You walked away past your house and onto the main path")
            Scene2();
        } else {
            var Youbettersayit = prompt("The officer swings and hits you right in the face, it hurts alot and your vision becomes blurry \n Officer: I want to hear it loud and clear! Now say understood.").toLowerCase();
            var Abusedbyofficer = 1; //Now the player is officially abused by a cop, congratulations.
            if (Youbettersayit == "understood") {
                alert("Officer: Now get the hell out of here \n \n You stumble out of the alley past your house and onto the main path");
                Scene2();
            } else {
                alert("The officer swings again and bullseye, your death was painless as your were knocked out instantly \n \n <GAME OVER>");
            }
        }
        //This is where the timeline splits
    } else if (!Chapter1Choice1 !== "no") {
        console.log("First chapter first scene");
        alert("You decided to ignore it and move on")
        Scene2();
    } else {
        alert("Answer not recognized you may answer 'yes' or 'no' ");
        FirstScene();
    }
}
function Scene2() {
    console.log("First Chapter second scene")
    if (Abusedbyofficer === 1) {
        console.log("and yes you are still injured")
        alert("You feel the side of your head it hurts like hell and when you look at your hand there luckily is no blood");
    }
    alert("You arrive on the walkway. You were recently fired because they automated your position and your internet is out so you're just looking for work the old fashioned way");
    var Chapter1Choice2 = prompt("The jobcenter is quite far away. You see a busstop and an metro station which will you take?").toLowerCase();
    if (Chapter1Choice2 == "yes") {
        alert("Excuse me what?")
        alert("Right... let me ask the question again")
        var Chapter1Choice2S1 = prompt("You see a busstop and a metro station which will you take?").toLowerCase();
        if (Chapter1Choice2S1 == "yes") {
            var Chapter1Choice2S2 = prompt("Are you alright?").toLowerCase();
            if (Chapter1Choice2S2 == "yes") {
                alert("... Right I'll just press this and... It's broken.")
                alert("Welp guess that's it's gameover for you \n \n<GAME OVER>")
            } else if (Chapter1Choice2S2 == "bus") {
                alert("... Right I'll just press this and... It's broken.")
                alert("Welp guess that's it's gameover for you \n \n<GAME OVER>")
            } else {
                alert("Right let me restart the game whilst you restart yourself")
                alert("Well great you broke it guess You'll have to reset it. \n <GAME OVER>")
            }
        }
    } else if (Chapter1Choice2 == "bus") {
        alert("You decided to take the bus");
        alert("As you take the bus you drive through the slumps, a somber sight for a city advertised as the brightest future one can have");
        alert("You get off the bus and walk over to the job center");
        Scene3();
    } else if (Chapter1Choice2 == "metro") {
        alert("You decided to take the metro");
        alert("As you wait on the station for the metro to arrive an odd figure in a hoodie and with a mask on approaches you hands you a business card of sorts and walks off");
        var ResistanceCard = 1;
        MetroScene();

    }
    function MetroScene() {

        var Chapter1Choice2S3 = prompt("You now posses this business card What will you do?").toLowerCase();
        if (Chapter1Choice2S3 == "inspect card") {
            alert("The card has a symbol of a fist on it, the backside reads:'You have been chosen we expect you at Grossumstreet 34, tell no-one.'");
        } else if (Chapter1Choice2S3 == "wait") {
            alert("You decided to wait for the metro");
            alert("The metro arrives and you get in");
            alert("Once you arrive at the platform close to the job center, you can't help but shake the feeling of being watched");
            alert("Two police men stand beside the entrance");
            MetroScene2();

        } else if (Chapter1Choice2S3 == "look around") {
            alert("You look around, one of the lights are flickering and honestly the entire station could use some extra funding, cracks in some walls, there's a significant lack of safety measures and the posters aren't digital so there are just posters left there about movies that came out about 3+ months ago.");
        } else {
            alert("available actions are 'inspect card' 'wait' 'look around'");
            MetroScene();
        }
    }
}
function MetroScene2() {
    if (Abusedbyofficer >= 1 && Abusedbyofficer <= 2 && Abusedbyofficer > 0 && Abusedbyofficer < 2) {
        var Chapter1Choice2S4 = prompt("One of the officers halt you \n \nOfficer: Are you alright?");
        if (Chapter1Choice2S4 == "yes") {
            alert("Well be careful out there, these resistance scumbags are quite the violent buggers");
            alert("Yeah right they sure are some bad guys, you sarcastically thought to yourself");
        } else {
            alert("Okay then just be careful out there");
        }
    }
    alert("You head up and out of the metrostation");
    Scene3();
}

function Scene3() {
    alert("As you arrive right at the jobcenter the announcement jingle plays and the boards spring to live");
    alert("'Because of recently transpired events, citizens are now required to show thier IDs to police on sight and may or may not be called in for questioning'");
    alert("'Please note that this is for your safety' You walk inside the job center");
    alert("You grab a ticket and take a seat");
    Chapter1Choice3();
}
function Chapter1Choice3() {
    var Chapter1Choice3S1 = prompt("The job center looks beige and somber, the only thing breaking the silence is the whirring of the AC and the receptionist working on the computer \n \nWhat will you do?").toLowerCase();
    if (Chapter1Choice3S1 == "Wait") {
        Chapter1Choice4();
    } else if (Chapter1Choice3S1 == "look around") {
        alert("Despite this somber look they tried to brighten up the place by hanging a poster on a wall that reads 'Don't worry everything's going to be okay'");
        alert("It really doesn't help");
        Chapter1Choice3();
    }
}