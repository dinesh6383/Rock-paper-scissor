//initializing the value:-
let userScore = 0;
let computerScore = 0;

//function when user wins:-
function uwins(){
  userScore++;
  $(".uscore").text(userScore);
  $(".review").text("❤️ USER WINS!!").fadeIn(300).fadeOut(300).fadeIn(300);
}
//function when computer wins:-
function cwins(){
  computerScore++;
  $(".cscore").text(computerScore);
  $(".review").text("COMPUTER WINS!! ❤️").fadeIn(300).fadeOut(300).fadeIn(300);
}
//function when the match draw:-
function draw() {
  $(".review").text("❤️ MATCH DRAWWW!!! ❤️").fadeIn(300).fadeOut(300).fadeIn(300);
}
//function for comp to select:-
function compClick() {
  let tools = ["p", "r", "s"];
  let values = Math.floor(Math.random() * 3);
  let buttons = tools[values];
  compAnime(buttons);
  return buttons;

}

//function for comp animation:-
function compAnime(letters) {
  $("." + letters).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

//function for user to select:-
function userClick() {
  $(".urock").click(function() {
    $(".urock").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    game("r");
  });
  $(".upaper").click(function() {
    $(".upaper").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    game("p");
  });
  $(".uscissor").click(function() {
    $(".uscissor").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    game("s");
  });
}
userClick();

//function to check who wins:-
function game(userChoice){
  let computerChoice = compClick();
  let result = userChoice + computerChoice;
  switch (result) {
    case "rs":
    case "sp":
    case "pr":
      uwins();
      break;
    case "sr":
    case "ps":
    case "rp":
      cwins();
      break;
    case "rr":
    case "pp":
    case "ss":
      draw();
      break;
  }
}
game();

//reload the page on clicking a button:-
$(".btn").click(()=> location.reload());
