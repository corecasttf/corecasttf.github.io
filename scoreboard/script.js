var teamElements = document.getElementsByClassName('team-name');
console.log(teamElements);
for (var teamElem of teamElements) {
	teamElem.addEventListener('click', () => {
		swapTeams();
	});
}

function swapTeams() {
	var firstName = teamElements[0].textContent;
	teamElements[0].textContent = teamElements[1].textContent;
	teamElements[1].textContent = firstName;
}