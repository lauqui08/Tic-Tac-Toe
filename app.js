const items = document.querySelectorAll('td');
let player = 'O';
let isWinner = false;
let moves = 0;
items.forEach(item => {
    item.addEventListener('click',(event) => {
        moves++;
        if(moves === 9){
            event.target.classList.add(player.toLowerCase());
            event.target.textContent = player;
            alert('Draw!');
        }else if(!isWinner){
            if(event.target.textContent === '' && player === 'X'){
                event.target.classList.add(player.toLowerCase());
                event.target.textContent = player;
                checkWinner(player);
                player = 'O';
            }else if(event.target.textContent === '' && player === 'O'){
                event.target.classList.add(player.toLowerCase());
                event.target.textContent = player;
                checkWinner(player);
                player = 'X';
            }
        }
       
    });
});

function checkWinner(player){
   if(items[0].textContent === player &&  items[1].textContent === player && items[2].textContent === player ||
    items[3].textContent === player &&  items[4].textContent === player && items[5].textContent === player ||
    items[6].textContent === player &&  items[7].textContent === player && items[8].textContent === player ||
    items[0].textContent === player &&  items[4].textContent === player && items[8].textContent === player ||
    items[2].textContent === player &&  items[4].textContent === player && items[6].textContent === player ||
    items[0].textContent === player &&  items[3].textContent === player && items[6].textContent === player ||
    items[1].textContent === player &&  items[4].textContent === player && items[7].textContent === player ||
    items[2].textContent === player &&  items[5].textContent === player && items[8].textContent === player){
    isWinner = true;
            alert(`${player} Wins`);
   }
};