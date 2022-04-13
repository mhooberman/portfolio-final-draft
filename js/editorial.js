document.querySelector("#escape").addEventListener("click", function() {
	console.log("Clicked to go back to Marlee's 'About Me' page");
    window.alert("You clicked a button to return to Marlee's 'About Me' page. If you wish to continue, press 'OK' and you will be taken back to the 'About Me' page.")
    window.location.href = "about.html";
});

document.querySelector("#article1").addEventListener("click", function() {
	console.log("Clicked to view Marlee's article about peanut butter");
    window.alert("You clicked a button to view Marlee's article about peanut butter. If you wish to continue, press 'OK' and you will be taken to the article page.")
    window.open("https://spoonuniversity.com/lifestyle/why-powdered-peanut-butter-just-doesn-t-cut-it");
});

document.querySelector("#article2").addEventListener("click", function() {
	console.log("Clicked to view Marlee's article about smoothies");
    window.alert("You clicked a button to view Marlee's article about smoothies. If you wish to continue, press 'OK' and you will be taken to the article page.")
    window.open("https://citylifestyle.com/detroit-mi/articles/food-and-beverage/best-local-acai-bowls");
});

document.querySelector("#article3").addEventListener("click", function() {
    console.log("Clicked to view Marlee's article about ice cream");
    window.alert("You clicked a button to view Marlee's article about ice cream. If you wish to continue, press 'OK' and you will be taken to the article page.")
    window.open("    https://citylifestyle.com/detroit-mi/articles/food-and-beverage/local-ice-cream-your-kids-will-love");
});