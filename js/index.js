function indexPersonalize() {
    let userName = prompt("Please enter your name", "");
    if (userName != null) {
        document.getElementById("user").innerHTML =
        "Nice to meet you, " + userName + "!";
  }
}