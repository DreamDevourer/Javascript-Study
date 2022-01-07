function getName() {
    let userInput = document.getElementById("userInput").value;
    console.log("NAME LOGGED: ", userInput);
    // alert("Hello " + userInput + "!");
    document.getElementById("mainParagraph").innerHTML = "So your name is " + userInput + "! It's nice to meet you " + userInput + "!";
}
