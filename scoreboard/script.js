// Team name swap.
let teamElements = document.getElementsByClassName('team-name');

for (let scoreElem of teamElements) {
	scoreElem.addEventListener('click', () => {
		swapTeams();
	});
}

// Score change.
let scoreElements = document.getElementsByClassName('score');

for (let scoreElem of scoreElements) {
	scoreElem.addEventListener('click', (e) => {
		scoreElem.textContent = parseInt(scoreElem.textContent) + 1;
	});
	scoreElem.addEventListener('contextmenu', (e) => {
		scoreElem.textContent = parseInt(scoreElem.textContent) - 1;
		e.preventDefault();
	});
}

// Map scores.
let mapNameElements = document.getElementsByClassName('map-name');
let mapScoreElements = document.getElementsByClassName('map-score');
let mapTeamScoreElements = document.getElementsByClassName('map-team-score');

for (let i = 0; i < mapNameElements.length; i++) {
	let mapNameElem = mapNameElements[i];

	mapNameElem.addEventListener('click', (e) => {
		let mapScoreElem = mapScoreElements[i];

		if (mapScoreElem.classList.contains('show')) {
			mapScoreElem.classList.remove('show');
		} else if (mapNameElem.classList.contains('highlighted')) {
			mapScoreElem.classList.add('show');
			mapNameElem.classList.remove('highlighted');
		} else {
			mapNameElem.classList.add('highlighted');
		}
	});

	mapNameElem.addEventListener('contextmenu', (e) => {
		if (mapNameElem.classList.contains('strike-through')) {
			mapNameElem.classList.remove('strike-through');
		} else {
			mapNameElem.classList.add('strike-through');
		}
		e.preventDefault();
	});
}

for (let mapTeamScoreElem of mapTeamScoreElements) {
	mapTeamScoreElem.addEventListener('click', (e) => {
		mapTeamScoreElem.textContent = parseInt(mapTeamScoreElem.textContent) + 1;
	});
	mapTeamScoreElem.addEventListener('contextmenu', (e) => {
		e.preventDefault();
		mapTeamScoreElem.textContent = parseInt(mapTeamScoreElem.textContent) - 1;
	});
}









function swapTeams() {
	// Team names.
	let firstName = teamElements[0].textContent;
	teamElements[0].textContent = teamElements[1].textContent;
	teamElements[1].textContent = firstName;

	// Map scores.
	for (let i = 0; i < mapTeamScoreElements.length; i += 2) {
		let tempScore = mapTeamScoreElements[i].textContent;
		mapTeamScoreElements[i].textContent = mapTeamScoreElements[i + 1].textContent;
		mapTeamScoreElements[i + 1].textContent = tempScore;
	}
}