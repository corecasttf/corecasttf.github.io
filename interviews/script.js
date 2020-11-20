// Team winners.
let teamElements = document.getElementsByClassName('team');
let winnerElem = document.getElementById('winner');
let winningTeamElem = document.getElementById('winning-team');

for (let teamElem of teamElements) {
	teamElem.addEventListener('click', (e) => {
		winningTeamElem.textContent = teamElem.textContent;
		winnerElem.style.display = 'block';
	});
}

// Map scores.
let mapNameElements = document.getElementsByClassName('map-name');
let mapScoreElements = document.getElementsByClassName('map-score');
let mapTeamScoreElements = document.getElementsByClassName('map-team-score');

for (let i = 0; i < mapNameElements.length; i++) {
	let mapNameElem = mapNameElements[i];

	mapNameElem.addEventListener('click', (e) => {
		if (!mapNameElem.classList.contains('strike-through')) {
			let mapScoreElem = mapScoreElements[i];

			if (mapScoreElem.classList.contains('show')) {
				mapScoreElem.classList.remove('show');
			} else {
				mapScoreElem.classList.add('show');
			}
		}
	});

	mapNameElem.addEventListener('contextmenu', (e) => {
		if (mapNameElem.classList.contains('strike-through')) {
			mapNameElem.classList.remove('strike-through');
		} else {
			mapNameElem.classList.add('strike-through');

			let mapScoreElem = mapScoreElements[i];
			mapScoreElem.classList.remove('show');
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
