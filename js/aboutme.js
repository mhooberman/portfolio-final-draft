document.querySelector("#ttt_button").addEventListener("click", function() {
	console.log("Clicked to view @twinstalktaste");
    window.alert("You clicked a button to view @twinstalktaste. If you wish to view it, press 'OK' and you will be taken to a separate page on Instagram.")
    window.open("https://www.instagram.com/twinstalktaste/")
});

document.querySelector("#workout").addEventListener("click", function() {
	console.log("Clicked to view Marlee's favorite workout video");
    window.alert("You clicked a button to view Marlee's favorite workout video. If you wish to view it, press 'OK' and you will be taken to a separate page on YouTube.")
    window.open("https://www.youtube.com/watch?v=MTF8-wuTH4Y")
});

document.querySelector("#comm").addEventListener("click", function() {
    console.log("Clicked the communication image")
    window.alert("You clicked this image to view Marlee's editorial work. If you wish to view it, press 'OK' and you will be taken to a separate page to view the content.")
    window.location.href = "editorial_features.html";
});