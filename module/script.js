const users = [
    { id: 1, name: 'Ґеральт із Рівії', image: 'img/user1.jpg' },
    { id: 2, name: 'Цірілла', image: 'img/user2.jpg' },
    { id: 3, name: 'Трісс Мерігольд', image: 'img/user3.jpg' },
    { id: 4, name: 'Йеннефер', image: 'img/user4.jpg' },
    { id: 5, name: 'Ума', image: 'img/user5.jpg' },
    { id: 6, name: 'Геральт із Рівного', image: 'img/user6.jpg' },
];

function renderUsers() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';

    for (let i = 0; i < 3; i++) {
        if (users[i]) {
            const card = `
                <div class="card">
                    <img src="${users[i].image}" class="user-photo">
                    <h3 class="user-name">${users[i].name}</h3>
                    <button class="close-btn" onclick="removeUser(${i})">Close</button>
                </div>
            `;
            cardsContainer.innerHTML += card;
        }
    }
}

function removeUser(index) {
    users.splice(index, 1);

    renderUsers();
}

renderUsers();
