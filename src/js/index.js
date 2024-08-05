let selectedNumber = null;
let previouslySelectedButton = null; 

function handleButtonClick(button) {

    if (previouslySelectedButton) {
        previouslySelectedButton.classList.remove('selected-number');
    }

    selectedNumber = button.querySelector('.number').textContent;

    button.classList.add('selected-number');

    previouslySelectedButton = button;
}

function showCard(cardId) {

    document.querySelectorAll('.card1, .card2').forEach(card => {
        card.classList.add('hidden');
    });

    document.getElementById(cardId).classList.remove('hidden');
}

function handleSubmit() {
    if (selectedNumber) {

        const selectedElement = document.querySelector('.selected');
        selectedElement.textContent = `You selected ${selectedNumber} out of 5`;

        showCard('card2');
    } else {
        alert('Please select a rating before submitting.');
    }
}

document.querySelectorAll('.circles-list .btn').forEach(button => {
    button.addEventListener('click', () => handleButtonClick(button));
});

document.querySelector('.button .btn').addEventListener('click', handleSubmit);
