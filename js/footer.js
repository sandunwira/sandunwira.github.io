const footer = document.getElementsByTagName('footer')[0];

footer.classList.add('flex', 'height100', 'width100');
footer.innerHTML = `
	<p class="light marginT30 m-marginT25 marginB30 m-marginB25">CRAFTED WITH <i class="fa-solid fa-heart"></i> FROM <a href="https://github.com/sandunwira/sandunwira.github.io" target="_blank">SANDUN</a></p>
`;