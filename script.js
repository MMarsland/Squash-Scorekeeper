


startApp()
{
    updateMatchClockLoop(new Date());
    updateGameClockLoop(new Date());
}


updateMatchClockLoop(start)
{
    var now = new Date();
    var h = start.getHours() - now.getHours();
    var m = start.getMinutes() - now.getMinutes();
    var s = start.getSeconds() - now.getSeconds();
    m = fixTime(m);
    s = fixTime(s);
    document.getElementById('matchTime').innerHTML = (h <= 0) ? (m +":"+ s) : (h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}

updateGameClockLoop(start)
{
    var now = new Date();
    var h = start.getHours() - now.getHours();
    var m = start.getMinutes() - now.getMinutes();
    var s = start.getSeconds() - now.getSeconds();
    m = fixTime(m);
    s = fixTime(s);
    document.getElementById('gameTime').innerHTML = (h <= 0) ? (m +":"+ s) : (h + ":" + m + ":" + s);
    var t = setTimeout(startTime, 500);
}

function fixTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }