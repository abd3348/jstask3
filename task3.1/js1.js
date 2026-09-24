function displayOrder() {

    // getElementById()
    let name = document.getElementById("name").value;

    // getElementById()
    let order = document.getElementById("order").value;

    // getElementsByTagName()
    let inputs = document.getElementsByTagName("input");

    // getElementsByClassName()
    let result = document.getElementsByClassName("result")[0];

    // querySelector()
    let button = document.querySelector("#submitBtn");

    result.innerHTML = "Hello " + name + "! Your order is " + order + ".";

    console.log(inputs);
    console.log(button);
}


function changeColor() {

    let button = document.getElementById("submitBtn");

    button.style.backgroundColor = "orange";
}


function returnColor() {

    let button = document.getElementById("submitBtn");

    button.style.backgroundColor = "#333";
}