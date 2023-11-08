let count = 0;
let newTeamName = "";
function changeTeam(element) {
  newTeamName = prompt("Takımın yeni ismini giriniz:");
  document.getElementById(element).textContent = newTeamName;
  counterValue = 15;
  clearInterval(intervalId);
  counter("timer");
}
function removeScore(val, element) {
  count = Number(document.getElementById(element).textContent);
  count -= val;
  if (count < 0) {
    document.getElementById(element).textContent = 0;
  } else {
    document.getElementById(element).textContent = count;
  }
}

function addScore(val, element) {
  count = Number(document.getElementById(element).textContent);
  count += val;
  document.getElementById(element).textContent = count;
  counterValue = 15;
  clearInterval(intervalId);
  counter("timer");
}
function setScore(element) {
  count = Number(prompt("Yeni basket sayısını girin :"));

  if (isNaN(count)) {
    alert("Lütfen geçerli bir sayı girin.");
    return;
  }

  document.getElementById(element).textContent = count;
}

function counter(element) {
  let counterValue = 15;
  let intervalId = setInterval(function () {
    document.getElementById(element).textContent = counterValue + " saniye";
    counterValue--;
    if (counterValue < 0) {
      let scoreHome = parseInt(
        document.getElementById("scoreHome").textContent
      );
      let scoreGuest = parseInt(
        document.getElementById("scoreGuest").textContent
      );
      let winningTeam =
        scoreHome > scoreGuest
          ? "takım-home"
          : scoreGuest > scoreHome
          ? "takım-guest"
          : "Berabere";
      if (newTeamName !== "") {
        if (winningTeam === "takım-home" || winningTeam === "takım-guest") {
          winningTeam = newTeamName;
        }
      }
      alert("Tebrikler " + winningTeam + "!");
      clearInterval(intervalId);
    }
  }, 1000);
}
window.onload = function () {
  counter("timer");
};
