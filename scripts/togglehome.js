window.addEventListener("load", function start() {
    let togglehome = document.createElement("a")
    togglehome.setAttribute("href", "/jomape/index.html")
    togglehome.setAttribute("id", "toggleh")
    togglehome.style.position = "fixed"
    togglehome.style.top = "10%"
    togglehome.style.right = "5%"
    togglehome.style.width = "5vh"
    togglehome.style.height = "5vh";
	togglehome.style.backgroundColor = "#cc00cc";
	togglehome.style.backgroundImage = "url('/jomape/src/home.svg')"
	togglehome.style.backgroundSize = "cover"
	togglehome.style.backgroundPosition = "center center"
	togglehome.style.border = "0px solid transparent"
	togglehome.style.borderRadius = "50%";
	togglehome.style.cursor = "pointer";
	togglehome.style.overflow = "hidden";
	togglehome.style.display = "flex";
    togglehome.style.alignItems = "center";
    togglehome.style.justifyContent = "center";
    togglehome.style.zIndex = "300";
    togglehome.style.transition = "0.5s";
    togglehome.style.boxShadow = "0 0 0 #cc00cc";
    document.body.appendChild(togglehome);

    toggleh.addEventListener("mouseenter", change);
    toggleh.addEventListener("focusin", change);
    toggleh.addEventListener("mouseleave", back);
    toggleh.addEventListener("focusout", back);


    function change() {
		toggleh.style.backgroundColor = "#0f0";
		toggleh.style.backgroundImage = "url('/jomape/src/homeblack.svg')";
		toggleh.style.boxShadow = "0 0 10px #0f0";
		toggleh.style.boxShadow += ", 0 0 20px #0f0";
		toggleh.style.boxShadow += ", 0 0 40px #0f0";
		toggleh.style.boxShadow += ", 0 0 80px #0f0";
		toggleh.style.boxShadow += ", 0 0 160px #0f0";
    };

	function back() {
        togglehome.style.backgroundColor = "#cc00cc";
        togglehome.style.backgroundImage = "url('/jomape/src/home.svg')";
        togglehome.style.boxShadow = "";
    };
});

