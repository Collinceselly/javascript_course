let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

  let isAutoPlaying = false;
  let intervalId;

  function autoplay() {

    if (!isAutoPlaying) {
      intervalId = setInterval(() => {
        const playerMove = pickComputerMove(); // Ensure that both the player move and computer move are auto generated
        playGame(playerMove)
      }, 1000);
      isAutoPlaying = true;

    }
    else{
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
    
  }

  document.querySelector('.js_rock_button')  // Using addEventListner to rock other than using regular onclick function - recommended option.
    .addEventListener('click', () => {
      playGame('rock')
    })

  document.querySelector('.js_paper_button') // Using addEventListner to paper other than using regular onclick function - recommended option.
    .addEventListener('click', () => {
      playGame('paper')
    })


    document.querySelector('.js_autoplay_button')
      .addEventListener('click', () => {
        autoplay()
      })
  
    
    document.body.addEventListener('keydown', (event) => {
       if (event.key === 'r') {
        playGame('rock')
       }

       else if (event.key === 'p') {
        playGame('paper')
       }

       else if (event.key === 's') {
        playGame('scissors')
       }
      
       else {
        alert('You have hit the wrong key')
       }
    })

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors') {
      if (computerMove === 'rock') {
        result = 'You lose.';
      } else if (computerMove === 'paper') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'Tie.';
      }

    } else if (playerMove === 'paper') {
      if (computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'Tie.';
      } else if (computerMove === 'scissors') {
        result = 'You lose.';
      }
      
    } else if (playerMove === 'rock') {
      if (computerMove === 'rock') {
        result = 'Tie.';
      } else if (computerMove === 'paper') {
        result = 'You lose.';
      } else if (computerMove === 'scissors') {
        result = 'You win.';
      }
    }

    if (result === 'You win.') {
      score.wins += 1;
    } else if (result === 'You lose.') {
      score.losses += 1;
    } else if (result === 'Tie.') {
      score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js_result').innerHTML = `${result}`;

    document.querySelector('.js_outcome').innerHTML = `You 
    <img src="images/${playerMove}-emoji.png" alt="" class="move_icon">
    <img src="images/${computerMove}-emoji.png" alt="" class="move_icon">
    Comuter`;
}

  function updateScoreElement() {
    document.querySelector('.js_score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = 'rock';
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = 'paper';
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = 'scissors';
    }

    return computerMove;
  }

  