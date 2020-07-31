var form;
var song;
var songs = ['Please Dont Go.mp3','7 Years.mp3','Drag Me Down.mp3','Rescue Me.mp3','Shape of You.mp3','The Man.mp3'];
var play,pause,next,previous;

var songCount = songs.length; // number of songs in the music dir

var currentSong = 0;          // current song number

function preload(){
  song = loadSound(songs[currentSong]);
}

function setup() {
  createCanvas(400,400);
//Play Button
play = createButton('PLAY');
play.position(displayWidth/2-135,displayHeight/2+30);
play.size(150,25);
//play.style('background-color',col);

//Pause button
pause = createButton('PAUSE');
pause.position(displayWidth/2+15,displayHeight/2+30)
pause.size(150,25);

//Next Button
next = createButton('NEXT');
next.position(displayWidth/2-135,displayHeight/2+55);
next.size(150,25);

//Previous Button
previous = createButton('PREVIOUS');
previous.position(displayWidth/2+15,displayHeight/2+55)
previous.size(150,25);

//Loop sound
song.loop();
//stop the sound
song.stop();

//  form = new Form();
}

function draw() {
  background(rgb(162, 255, 255));
  drawSprites();
  textFont('Georgia')
  textSize(20);
  fill(0);
  text(song,displayWidth/2,displayHeight/2-10);
  text(songs[currentSong], 30, 300);
  text(song.currentTime().toFixed(3), 30, 330);

/*  if (play.mouseClicked()) {
    if ( song.isPlaying() ) {
    song.stop();
  } else {
    song.play();
  }
*/
play.mousePressed(playSound);
pause.mousePressed(stopSound);
next.mousePressed(nextSong);
previous.mousePressed(previousSong);

//console.log(song);
}

function playSound(){
  if (song.isPlaying() == false) {
    song.play();
  }
}

function stopSound(){
  if (song.isPlaying() == true) {
    song.stop()
  }
}

function nextSong(){
  currentSong = currentSong + 1 ;
  song.stop()
  song.play();

}

function previousSong(){
  currentSong = currentSong - 1 ;
  song.stop()
  song.play();

}
/*  if (mousePressedOver(play)) {
    song.play();
  }*/
//  form.display();

/*
function clickButton(){
  son1.play
}*/
