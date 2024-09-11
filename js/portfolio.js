const portfolioGrid = document.getElementById('portfolioGrid');
const filterWebsites = document.getElementById('filterWebsites');
const filterApps = document.getElementById('filterApps');
const filterArtworks = document.getElementById('filterArtworks');
const filterUIUX = document.getElementById('filterUIUX');


filterWebsites.addEventListener('click', () => {
	filterWebsites.classList.add('activeLink', 'medium', 'opacity10');
	filterApps.classList.remove('activeLink', 'medium', 'opacity10');
	filterApps.classList.add('light', 'opacity5');
	filterArtworks.classList.remove('activeLink', 'medium', 'opacity10');
	filterArtworks.classList.add('light', 'opacity5');
	filterUIUX.classList.remove('activeLink', 'medium', 'opacity10');
	filterUIUX.classList.add('light', 'opacity5');
	portfolioGrid.innerHTML = '';
	window.location.hash = 'websites';
	fetch('/json/websites.json')
		.then(response => response.json())
		.then(websites => {
			websites.forEach(website => {
				const portfolioCard = document.createElement('div');
				portfolioCard.classList.add('portfolioCard', 'width100', 'flex', 'flexCol', 'justifyStart', 'gap20');
				portfolioCard.style = 'background: var(--grey); border-radius: 10px;';
				portfolioCard.innerHTML = `
					<div class="portfolioCardImg width100" style="height: 200px; border-radius: 10px 10px 0px 0px; background: url('${website.img}'); background-size: cover; background-position: center;"></div>
					<div class="portfolioCardInfo width80 flex flexCol alignStart gap10">
						<div class="width100 flex flexRow justifyBetween">
							<a href="${website.link}" class="portfolioCardWebsitesLink fontSize14 light" target="_blank" title="More on ${website.name} Project">
								<h4 class="fontSize20">${website.name} <i class="fa-solid fa-square-arrow-up-right"></i></h4>
							</a>
						</div>
						<p class="fontSize14 light width100">${website.description}</p>
						<p class="fontSize14 medium width100 marginB30">
							Technologies:<br>
							<span class="light opacity7">${website.technologies}</span>
						</p>
					</div>
				`;
				portfolioGrid.appendChild(portfolioCard);
			});
		})
		.catch(error => {
			portfolioGrid.innerHTML = '<p class="fontSize14 light">Coming Soon</p>';
		});
});

filterApps.addEventListener('click', () => {
	filterApps.classList.add('activeLink', 'medium', 'opacity10');
	filterWebsites.classList.remove('activeLink', 'medium', 'opacity10');
	filterWebsites.classList.add('light', 'opacity5');
	filterArtworks.classList.remove('activeLink', 'medium', 'opacity10');
	filterArtworks.classList.add('light', 'opacity5');
	filterUIUX.classList.remove('activeLink', 'medium', 'opacity10');
	filterUIUX.classList.add('light', 'opacity5');
	portfolioGrid.innerHTML = '';
	window.location.hash = 'apps';
	fetch('/json/apps.json')
		.then(response => response.json())
		.then(apps => {
			apps.forEach(app => {
				const portfolioCard = document.createElement('div');
				portfolioCard.classList.add('portfolioCard', 'width100', 'flex', 'flexCol', 'justifyStart', 'gap20');
				portfolioCard.style = 'background: var(--grey); border-radius: 10px;';
				portfolioCard.innerHTML = `
					<div class="portfolioCardImg width100" style="height: 200px; border-radius: 10px 10px 0px 0px; background: url('${app.img}'); background-size: cover; background-position: center;"></div>
					<div class="portfolioCardInfo width80 flex flexCol alignStart gap10">
						<div class="width100 flex flexRow justifyBetween">
							<a href="${app.link}" class="portfolioCardAppsLink fontSize14 light" target="_blank" title="More on project ${app.name}">
								<h4 class="fontSize20">${app.name} <i class="fa-solid fa-square-arrow-up-right"></i></h4>
							</a>
						</div>
						<p class="fontSize14 light width100">${app.description}</p>
						<p class="fontSize14 medium width100 marginB30">
							Technologies:<br>
							<span class="light opacity7">${app.technologies}</span>
						</p>
					</div>
				`;
				portfolioGrid.appendChild(portfolioCard);
			});
		})
		.catch(error => {
			portfolioGrid.innerHTML = '<p class="fontSize14 light">Coming Soon</p>';
		});
});

filterArtworks.addEventListener('click', () => {
	filterArtworks.classList.add('activeLink', 'medium', 'opacity10');
	filterWebsites.classList.remove('activeLink', 'medium', 'opacity10');
	filterWebsites.classList.add('light', 'opacity5');
	filterApps.classList.remove('activeLink', 'medium', 'opacity10');
	filterApps.classList.add('light', 'opacity5');
	filterUIUX.classList.remove('activeLink', 'medium', 'opacity10');
	filterUIUX.classList.add('light', 'opacity5', 'opacity5');
	portfolioGrid.innerHTML = '';
	window.location.hash = 'artworks';
	fetch('/json/artworks.json')
		.then(response => response.json())
		.then(artworks => {
			artworks.forEach(artwork => {
				const portfolioCard = document.createElement('div');
				portfolioCard.classList.add('portfolioCard', 'width100', 'flex', 'flexCol', 'alignCenter', 'justifyCenter', 'gap20');
				portfolioCard.style = `aspect-ratio: 1/1; border-radius: 10px; background: url('${artwork.img}'), #404040; background-size: contain; background-repeat: no-repeat; background-position: center;`;
				if (artwork.featured === true) {
					portfolioCard.innerHTML = `
						<a class="portfolioCardArtworksLink medium textUpperCase flex flexRow alignCenter justifyCenter width100 gap05" style="aspect-ratio: 1/1;" href="${artwork.link}" target="_blank">${artwork.platform} <i class="fa-solid fa-square-arrow-up-right"></i></a>
					`;
				} else if (artwork.featured === false) {
					portfolioCard.innerHTML = '';
				}
				portfolioGrid.appendChild(portfolioCard);
			});
		})
		.catch(error => {
			portfolioGrid.innerHTML = '<p class="fontSize14 light">Coming Soon</p>';
		});
});



filterUIUX.addEventListener('click', () => {
	filterUIUX.classList.add('activeLink', 'medium', 'opacity10');
	filterWebsites.classList.remove('activeLink', 'medium', 'opacity10');
	filterWebsites.classList.add('light', 'opacity5');
	filterApps.classList.remove('activeLink', 'medium', 'opacity10');
	filterApps.classList.add('light', 'opacity5');
	filterArtworks.classList.remove('activeLink', 'medium', 'opacity10');
	filterArtworks.classList.add('light', 'opacity5');
	portfolioGrid.innerHTML = '';
	window.location.hash = 'uiux';
	fetch('/json/uiux.json')
		.then(response => response.json())
		.then(uiux => {
			uiux.forEach(uiux => {
				const portfolioCard = document.createElement('div');
				portfolioCard.classList.add('portfolioCard', 'width100', 'flex', 'flexCol', 'justifyStart', 'gap20');
				portfolioCard.style = 'background: var(--grey); border-radius: 10px;';
				portfolioCard.innerHTML = `
					<div class="portfolioCardImg width100" style="height: 200px; border-radius: 10px 10px 0px 0px; background: url('${uiux.img}'); background-size: cover; background-position: center;"></div>
					<div class="portfolioCardInfo width80 flex flexCol alignStart gap10">
						<div class="width100 flex flexRow justifyBetween">
							<a href="${uiux.link}" class="portfolioCardUIUXLink fontSize14 light" target="_blank" title="More on ${uiux.name} Project">
								<h4 class="fontSize20">${uiux.name} <i class="fa-solid fa-square-arrow-up-right"></i></h4>
							</a>
						</div>
						<p class="fontSize14 light width100 marginB30">${uiux.description}</p>
					</div>
				`;
				portfolioGrid.appendChild(portfolioCard);
			});
		})
		.catch(error => {
			portfolioGrid.innerHTML = '<p class="fontSize14 light">Coming Soon</p>';
		}
	);
});


window.addEventListener('load', () => {
	if (window.location.hash === '#websites') {
		filterWebsites.click();
	} else if (window.location.hash === '#apps') {
		filterApps.click();
	} else if (window.location.hash === '#artworks') {
		filterArtworks.click();
	} else if (window.location.hash === '#uiux') {
		filterUIUX.click();
	} else {
		filterWebsites.click();
	}
});