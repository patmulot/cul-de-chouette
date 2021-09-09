
//----------DICE VALUES :----------
let diceValue1;
let diceValue2;
let diceValue3;
//---------------------------------


let btn = document.getElementById('lancer');
btn.addEventListener('click', launchBtnChouette);

function launchBtnChouette() {
    
    if ( btn.value === 'Lancer la Chouette') {
        btn = document.getElementById('lancer');
        // dices random :
        let diceValue1 = Math.floor( Math.random() * (6 - 1 + 1) ) + 1;
        let diceValue2 = Math.floor( Math.random() * (6 - 1 + 1) ) + 1;
        // values chouette :
        dice1 = document.getElementById('dice1');
        dice2 = document.getElementById('dice2');
        dice1.textContent = diceValue1;
        dice2.textContent = diceValue2;

        // alert('Vous venez de Lancer la Chouette et avez fait un '+ diceValue1 + ' et un ' + diceValue2);
        // alert('Vous pouvez lancer le cul de la chouette');

        btn.value = 'Lancer le cul de la Chouette';
        // let cdc = 'Vous pouvez lancer le cul de la chouette';
    } else {
        //btn = document.getElementById('lancer');
    // dices random :
    let diceValue3 = Math.floor( Math.random() * (6 - 1 + 1) ) + 1;
    // values cul de la chouette :
    dice3 = document.getElementById('dice3');
    dice3.textContent = diceValue3;

    // alert('Vous venez de lancer le cul de la chouette et avez fait un '+ diceValue3);
    btn.value = 'vous avez finit de jouer';
    btn.addEventListener('click', launchBtnCdc);
    }
}