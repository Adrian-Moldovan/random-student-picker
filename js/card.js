console.log('card.js loaded...');

function createCard(parentElem, student){
    let card = document.createElement('div');
    card.classList.add('card');
    parentElem.appendChild(card);

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    card.appendChild(cardHeader);

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    card.appendChild(cardBody);

    let cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer');
    card.appendChild(cardFooter);
}