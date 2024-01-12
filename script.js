window.addEventListener("load", function () {
	const form = document.getElementById('messageForm');
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		form.style.cursor = 'progress';
		const data = new FormData(form);
		const action = e.target.action;
		fetch(action, {
			method: 'POST',
			body: data,
		})
			.then(() => {
				form.style.cursor = 'default';
				alert("Success!");
				form.reset();
			})
	});
});



const scrollToTopBtn = document.getElementById("toTopBtn");
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = "flex";
	} else {
		scrollToTopBtn.style.display = "none";
	}
}

scrollToTopBtn.addEventListener("click", function () {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});