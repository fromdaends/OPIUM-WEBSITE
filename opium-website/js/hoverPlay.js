document.querySelectorAll('section > article img').forEach((img) => {
  const audioMap = {
    "Red.jpg": "../assets/SKY.mp3",
    "MUSIC.jpg": "../assets/OPMBABI.mp3",
    "SelfTitled.jpg": "../assets/LOCATION.mp3",
    "DieLit.jpg": "../assets/FELLINLUV.mp3",
  };

  const audio = new Audio(audioMap[img.src.split('/').pop()]);

  img.addEventListener('mouseover', () => {
    if (audio) audio.play();
  });

  img.addEventListener('mouseout', () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0; 
    }
  });
});


// Where I found how to make a hoverplay, this code was taken from this link: 
// https://www.w3schools.com/jsref/met_audio_play.asp#:~:text=The%20play()%20method%20starts,%2C%20attached%20on%20the%20audio).