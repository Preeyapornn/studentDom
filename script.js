alert('My Most favorite food is ' + document.getElementById('favorFood').children[0].textContent);

let food = document.createElement('li')
food.textContent = 'KFC'

let ulElement = document.getElementById('favorFood')
ulElement.appendChild(food)

alert('My second favorite food is ' + ulElement.children[1].textContent)