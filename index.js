let player1Count = 0,
  player2Count = 0;

let totalp1 = 0,
  totalp2 = 0;

const button1 = document.getElementById("btn1");
const button2 = document.getElementById("btn2");
const p1 = document.querySelector(".p1");
const p2 = document.querySelector(".p2");
const holdbtn = document.getElementById("hold");
const restartbtn = document.getElementById("restart");

restartbtn.addEventListener("click", (e) => {
  document.location.reload();
});

let last = 0;

button1.addEventListener("click", (e) => {
  e.preventDefault();
  var randomno1 = Math.floor(Math.random() * 6) + 1; //  generates no from 1 to 6
  console.log(p1.textContent);
  var randomimgsource1 = "images/dice" + randomno1 + ".png"; //address of the diffrent dice imgs

  document.querySelector(".img1").setAttribute("src", randomimgsource1);

  if (randomno1 === 1) {
    player1Count = 0;
    button1.disabled = true;
    button2.disabled = false;
    p1.textContent = `Player 1's Count : ${player1Count}`;
  } else {
    player1Count += randomno1;
  }

  p1.textContent = `Player 1's Count : ${player1Count}`;

  if (totalp1 >= 20 || player1Count >= 20) {
    document.querySelector(".final").innerHTML = "😍Player1 winss !!!";
    button1.disabled = true;
    button2.disabled = true;
  }
});

console.log(p2);
button2.addEventListener("click", (e) => {
  e.preventDefault();
  var randomno2 = Math.floor(Math.random() * 6) + 1; //  generates no from 1 to 6
  console.log(p2.textContent);
  var randomimgsource2 = "images/dice" + randomno2 + ".png"; //address of the diffrent dice imgs
  console.log(randomimgsource2);
  document.querySelector(".img2").setAttribute("src", randomimgsource2);

  if (randomno2 === 1) {
    player2Count = 0;

    button2.disabled = true;
    button1.disabled = false;
    p1.textContent = `Player 1's Count : ${player2Count}`;
  } else {
    player2Count += randomno2;
  }

  p2.textContent = `Player 2's Count : ${player2Count}`;

  let f = true;
  if (totalp2 >= 20 || player2Count >= 20) {
    document.querySelector(".final").innerHTML = "😍Player2 winss !!!";
    button1.disabled = true;
    button2.disabled = true;
    f = false;
  }

  // if (f == true) {
  //   button2.disabled = true;
  //   button1.disabled = false;
  // }
});

holdbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (last == 1) {
    totalp2 += player2Count;
    document.querySelector(".total2").textContent = totalp2;
    console.log(document.querySelector(".total2").textContent);
    last = 0;

    button2.disabled = true;
    button1.disabled = false;
    player2Count = 0;
    p2.textContent = `Player 2's Count : ${player2Count}`;
  } else if (last == 0) {
    totalp1 += player1Count;
    document.querySelector(".total1").textContent = totalp1;
    console.log(document.querySelector(".total1").textContent);
    last = 1;

    button1.disabled = true;
    button2.disabled = false;
    player1Count = 0;
    p1.textContent = `Player 1's Count : ${player1Count}`;
  }
});
