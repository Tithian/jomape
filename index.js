
window.addEventListener('DOMContentLoaded', (event) => {
	tgbutton.addEventListener('click', function() {
		let t = document.querySelector(".toggle");
		let rb = document.querySelector(".rightbar");
		t.classList.toggle("activate");
		rb.classList.toggle("activate");
		drawing();
	});

});

