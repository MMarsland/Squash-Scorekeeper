var match;
var Testhistory = "Test";

function startApp()
{
    match = new Match();
}

class Match
{
    constructor ()
    {
        this.score = [0,0];
        this.currentGame = new Game();
        this.player1 = new Player("player1");
        this.player2 = new Player("player2");
        this.clock = new Clock("matchTime");
    }
}

class Game
{
    constructor ()
    {
        this.score = [0,0];
        this.clock = new Clock("gameTime");
    }
}

class Player 
{
    constructor(id)
    {
        this.id = id; 
        this.name = (id == "Player1") ? "Player 1" : "Player 2";
        this.score = 0;
        this.games = 0;
    }

    increaseScore()
    {
        this.score++;
        Testhistory += ":Player1IncreaseScore";
        this.updateUI();
    }
    decreaseScore()
    {
        this.score--;
        Testhistory += ":Player1DecreaseScore";
        this.updateUI();
    }
    increaseGames()
    {
        this.games++;
        Testhistory += ":Player1IncreaseGames";
        this.updateUI();
    }
    decreaseGames()
    {
        this.games--;
        Testhistory += ":Player1DecreaseGames";
        this.updateUI();
    }
    setScore(score)
    {
        Testhistory += ":Player1SetScore"+this.score+"->"+score;
        this.score = score;
        this.updateUI();
    }
    setGames(games)
    {
        Testhistory += ":Player1SetGames"+this.games+"->"+games;
        this.games = games;
        this.updateUI();
    }


    updateUI()
    {
        this.updateScoreUI();
        this.updateGamesUI();
    }

    updateScoreUI()
    {
        document.getElementById(this.id+"Side").children[1].innerText = this.score;
    }

    updateGamesUI()
    {
        if (id == "Player1")
        {

        }
        document.getElementById("matchScore").innerText = 0;
    }
}

function editPlayer1()
{

}

function scorePlayer1()
{
    match.player1.increaseScore();
}

function letCallPlayer1()
{

}

function otherPlayer1()
{

}


function editPlayer2()
{
    
}

function scorePlayer2()
{
    match.player2.increaseScore();
}

function letCallPlayer2()
{

}

function otherPlayer2()
{
    
}























class Clock
{
    constructor (elementId)
    {
        this.totalSeconds = 0;
        this.paused = false;
        this.elementId = elementId;
        this.start();
    }

    start()
    {
        var self = this;
  
        this.interval = setInterval(function () {
            self.totalSeconds += 1;
        
            this.h = Math.floor(self.totalSeconds / 3600);
            this.m = Math.floor(self.totalSeconds / 60 % 60);
            this.s = parseInt(self.totalSeconds % 60);
            if (this.s < 10) {this.s = "0" + this.s};  // add zero in front of seconds < 10
            document.getElementById(self.elementId).innerHTML = (h <= 0) ? (m +":"+ s) : (h + ":" + m + ":" + s);
        }, 1000);
    }

    pause () {
        clearInterval(this.interval);
        delete this.interval;
        this.paused = true;
    }
    
    resume () {
        if (!this.interval) 
        {
            this.start();
            this.paused = false;
        }
    }
      
    toggle () {
        this.paused ? this.resume() : this.pause();
    }
      
}

function clockPlayPause()
{
    match.clock.toggle();
    match.currentGame.clock.toggle();
}