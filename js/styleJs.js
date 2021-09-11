
let scoreBtn = document.getElementById('view_score_button');

let diceContainer = document.querySelector('.dices_table');
let scoreTableContainer = document.querySelector('.scoretable_container');

let scoreTabgle = document.querySelector('.scoretable');

let scoreTabgleList = document.querySelector('#score_list');

let boardElement = document.querySelector('.board');
const styleJs = {
  resize : function() {
    if (document.getElementById('view_score_button')) {
      let docWidth = document.body.clientWidth;
      if (docWidth > 992) {
        scoreTableContainer.style.position = 'inherit';
        scoreTableContainer.style.padding = '0 10px';
    
        scoreTabgle.classList.remove('display_none')
        scoreTabgle.style.display = 'visible';
        // scoreTabgle.style.width = "30vw";
    
        scoreTabgleList.style.height = "60vh";
        scoreBtn.style.display = "none";
      } else {
        scoreTableContainer.style.position = 'absolute';
        scoreTableContainer.style.padding = '0';
    
        scoreTabgle.classList.add('display_none')
        // scoreTabgle.style.display = 'visible';
    
        scoreTabgleList.style.height = "10vh";
        scoreBtn.style.display = "block";
      }
    }
  },
  EditIaPlayerLog : function() {
    // CELULLE SCORE JOUEUR IA :
    let iaScoreCell = document.querySelector('.score_style_ia');
    iaScoreCell.textContent = ('Score '+ iaPlayer1.player1Name + ' :');
  },
};
// SELECT LISTENER
if ( location.href == "http://localhost/neo/mes-travaux/cul%20de%20chouette/cdc_02_IA_00/index.php?page=stats" ) {
  let selectElement = document.querySelector('#player-select');
  selectElement.addEventListener('input', function () {
  selectElement.options[selectElement.selectedIndex].value;
  let playerName = selectElement.options[selectElement.selectedIndex].text;
  location.href="index.php?page=stats&player="+playerName;
  })
};