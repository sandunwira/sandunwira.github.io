const socialsGrid = document.getElementById('socialsGrid');

fetch('/json/socials.json')
		.then(response => response.json())
		.then(socials => {
			socials.forEach(social => {
				const socialCard = document.createElement('a');
				socialCard.classList.add('flex', 'width100');
				socialCard.href = social.link;
				socialCard.target = '_blank';
				socialCard.innerHTML = `
					<div class="socialCard flex justifyBetween width100" id="${social.id}">
						${social.icon}

						<div class="flex textLeft width80">
							<h4 class="regular width100">${social.name}</h4>
						</div>

						<i class="fa-solid fa-square-arrow-up-right"></i>
					</div>
				`;
				socialsGrid.appendChild(socialCard);
			});
		})
		.catch(error => {
			console.error(error);
		});