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
      audio.currentTime = 0; // Reset audio to start
    }
  });
});
