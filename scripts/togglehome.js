window.addEventListener("load", function start() {
    let togglehome = document.createElement("a")
    togglehome.setAttribute("href", "/jomape/index.html")
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
    document.body.appendChild(togglehome)

    togglehome.onmouseover = function() {
		togglehome.style.backgroundColor = "#0f0";
		togglehome.style.backgroundImage = "url('/src/homeblack.svg')";
		togglehome.style.boxShadow = "0 0 10px #0f0";
		togglehome.style.boxShadow += ", 0 0 20px #0f0";
		togglehome.style.boxShadow += ", 0 0 40px #0f0";
		togglehome.style.boxShadow += ", 0 0 80px #0f0";
		togglehome.style.boxShadow += ", 0 0 160px #0f0";
    };

    togglehome.onmouseleave = function() {
        togglehome.style.backgroundColor = "#cc00cc";
        togglehome.style.backgroundImage = "url('/src/home.svg')";
        togglehome.style.boxShadow = "";
    };

});