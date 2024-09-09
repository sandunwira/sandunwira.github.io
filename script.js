const contactForm = document.getElementById('messageForm');
const contactSubmitBtn = document.getElementById('contactSubmitBtn');
const formStatus = document.getElementById('formStatus');

window.addEventListener("load", function () {
	contactForm.addEventListener("submit", function (e) {
		e.preventDefault();
		const form = e.target;

		// submit form data
		const data = new FormData(contactForm);
		const action = e.target.action;

		form.style.cursor = 'progress';
		formStatus.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Please wait!';
		contactSubmitBtn.disabled = true;
		contactSubmitBtn.style.cursor = 'not-allowed';
		contactSubmitBtn.style.opacity = '0.5';

		fetch(action, {
			method: 'POST',
			body: data,
		})

		.then(() => {
			contactForm.reset();
			formStatus.innerHTML = '<i class="fa-solid fa-circle-check" style="color: var(--green);"></i> Your message has been sent!';
			form.style.cursor = 'default';
			contactSubmitBtn.disabled = false;
			contactSubmitBtn.style.cursor = 'pointer';
			contactSubmitBtn.style.opacity = '1';
			setTimeout(() => {
				formStatus.innerHTML = '';
			}, 4000);
		})

		.catch(() => {
			formStatus.innerHTML = '<i class="fa-solid fa-circle-xmark" style="color: var(--accent);"></i> Oops! Something went wrong. Please try again!';
			form.style.cursor = 'default';
			contactSubmitBtn.disabled = false;
			contactSubmitBtn.style.cursor = 'pointer';
			contactSubmitBtn.style.opacity = '1';
		});
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




function downloadCV() {
	const link = document.createElement('a');
	link.href = '/cv.pdf';
	link.download = 'CV - Sandun Wiratunga.pdf';
	link.click();
}