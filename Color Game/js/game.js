  var colorDisplay = document.querySelector('.heading div');
  var divs = document.querySelectorAll('.card div');
  var newGame = document.querySelector('.newGame');
  var tryAgain = document.querySelector('#tryAgain');
  var mode = document.querySelectorAll('.mode div');
  var gameOver = false;
  var difficulty = "hard";
  var pickedColor;
  start();

  function start(){
    var colors = generateRandomColors();
    pickedColor = pickColor(colors);
    colorDisplay.innerText = pickedColor;
    setupBlock(colors);
    isGameOver();
  }

  newGame.addEventListener('click', function(){
    reset();
    start();
  });

  for (var i = 0; i < mode.length; i++) {
    mode[i].addEventListener('click', function(){
      mode[0].classList.remove("active");
      mode[1].classList.remove("active");
      this.classList.add('active');
      reset();
      start();
    });
  }

  function isGameOver(){
    for (var i = 0; i < divs.length; i++) {
      divs[i].addEventListener('click', function(){
        if(!gameOver){
            if(this.style.background === pickedColor){
              tryAgain.style.visibility = "visible";
              tryAgain.innerText= "Good Job";
              newGame.innerText = "New Game";
              gameOver = true;
            }else{
                tryAgain.style.visibility = "visible";
                tryAgain.innerText = "Try Again";
                this.style.visibility = "hidden";
            }
        }         
      });
    }
  }

  function randomColorRange(range){
    return Math.floor(Math.random()*range);
  }

  function generateRGB(mode){
    if(mode === "hard"){
      var r = randomColorRange(256);
      var g = randomColorRange(256);
      var b = randomColorRange(256);
      
    }
    else{
       r = randomColorRange(50);
       g = randomColorRange(100);
       b = randomColorRange(150);
    }

    return "rgb(" + r + ", " + g +", " + b + ")";
  }

  function generateRandomColors(){
    var colors = [];
    for (var i = 0; i < divs.length; i++) {
      colors.push(generateRGB(difficulty));
    }
    return colors;
  }

  function setupBlock(colors){
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.background = colors[i];
    }
  }
  function pickColor(colors){
    var correctBlock = randomBlock();
    console.log(correctBlock);
    return colors[correctBlock];
  }

  function randomBlock(){
    return Math.floor(Math.random()* divs.length);
  }

  function reset(){
    for (var i = 0; i < divs.length; i++) {
      divs[i].style.visibility = "visible";
    }
    newGame.innerText = "New Colors";
    tryAgain.innerText = "Try Again";
    tryAgain.style.visibility = "hidden";
    gameOver = false;
  }