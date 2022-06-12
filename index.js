let sections = ["inicio","fol","fuh","iso","lm","plar","sgbd"];

window.addEventListener('DOMContentLoaded', (event) => {
	tgbutton.addEventListener('click', function() {
	let chk = right_bar.getElementsByClassName("button")
	if(chk[0]) {
		while(chk[0]) {
			right_bar.removeChild(chk[0])
		}
	} else {
		for(let i=0;i<sections.length;i++) {
			let button = document.createElement("div");
			let link = document.createElement("a");
			let span = document.createElement("span");
			span.innerHTML = sections[i];
			link.setAttribute("href","#"+sections[i]);
			link.appendChild(span)
			button.setAttribute("class", "button");
			button.appendChild(link)
			right_bar.appendChild(button)
		}
	}
		let t = document.querySelector(".toggle");
		let rb = document.querySelector(".rightbar");
		t.classList.toggle("activate");
		rb.classList.toggle("activate");
	});

});

