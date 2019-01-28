(() => {
	console.log('fired');

	//window.addEventListener("load", changeHeadline); 

	const theButton = document.querySelector("#buttonHolder img");

	function changeHeadline() {
		document.querySelector("h1").textContent = "Hello there!";
		document.querySelector("p").textContent = "This is the subhead!";
	}

	theButton.addEventListener("click", changeHeadline); 
	// set up the puzzle pieces and boards
	//	
	
})();

