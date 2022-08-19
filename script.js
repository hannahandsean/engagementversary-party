let song = document.querySelector('#roma');

let playAttempt = setInterval(() => {
    song.play()
      .then(() => {
        clearInterval(playAttempt);
      })
      .catch((error) => {
        console.log('error');
      });
  }, 3000);