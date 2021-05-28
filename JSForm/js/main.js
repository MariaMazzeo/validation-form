function animatedForm() {
	const arrows = document.querySelectorAll('.fa-arrow-down');

	arrows.forEach(function (arrow, index) {
		
		arrow.addEventListener('click', () => {
			const input = arrow.previousElementSibling;
			const parent = arrow.parentElement;
			const nextForm = parent.nextElementSibling;

			//check for validation
			if (input.type === 'text' && validateUser(input, index)) {
				nextSlide(parent, nextForm);
			} else if (input.type === 'email' && validateEmail(input, index)) {
				nextSlide(parent, nextForm);
			} else if (input.type === 'password' && validateUser(input, index)) {
				nextSlide(parent, nextForm);
			} else {
				parent.style.animation = 'shake 0.5s ease';
			}
			// get rid of animation
			parent.addEventListener('animationend', () => {
				parent.style.animation = '';
			});
		});
	});
}

function validateUser(user, index) {
	if (user.value.length < 6) {
		error('rgb(234,100,100)', index);

	} else {
		error('rgb(156,218,241)', index);
		return true;
	}
}
function validateEmail(email, index) {

	const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (validation.test(email.value)) {
		error('rgb(156,218,241)', index);
		return true;
	} else {
		error('rgb(234, 100, 100)', index);

	}
}

function nextSlide(parent, nextForm) {
	parent.classList.add('innactive');
	parent.classList.remove('active');
	nextForm.classList.add('active');
}

function error(color, i) {

	document.getElementById('change').style.backgroundColor = color;
	document.getElementsByClassName('error-msg')[i].style.display = "block";

}

animatedForm();

