//establish race track
//format track
//establish racer
//format racer
//give racer ability to move
//duplicate racer one so you have 2



//alert("up and running");




const track1 = []
const track2 = []


//right arrow moves racer 1 one space per keydown
const movePlayerOne = () => {
  document.getElementById("car1").nextElementSibling.setAttribute("id", "car1");
  document.querySelector("#car1").removeAttribute("id");
  track1.push("mile");
  if (track1.length >= 14) {
      alert("Player One Wins!");
  }
}

//d key moves racer 2 one space per keydown
const movePlayerTwo = () => {
  document.getElementById("car2").nextElementSibling.setAttribute("id", "car2");
  document.querySelector("#car2").removeAttribute("id");
  track2.push("mile");
  if (track2.length >= 14) {
      alert("Player Two Wins!");
  }
}


// Events for right arrow (39) and "D" (68) keys to movePlayer functions
const moveRight = (event) => {
  if (event.keyCode == 39) {
    movePlayerOne();
  }
  if (event.keyCode == 68) {
    movePlayerTwo();
  }
}


// Event listener for keydown
document.onkeydown = moveRight;
