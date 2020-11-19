// Team name swap.
let teamElements = document.getElementsByClassName('team-name');

for (let scoreElem of teamElements) {
	scoreElem.addEventListener('click', () => {
		swapTeams();
	});
}

function swapTeams() {
	let firstName = teamElements[0].textContent;
	teamElements[0].textContent = teamElements[1].textContent;
	teamElements[1].textContent = firstName;
}

// Score change
let scoreElements = document.getElementsByClassName('score');

for (let scoreElem of scoreElements) {
	scoreElem.addEventListener('click', (e) => {
		scoreElem.textContent = parseInt(scoreElem.textContent) + 1;
	});
	scoreElem.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		scoreElem.textContent = parseInt(scoreElem.textContent) - 1;
	});
}
