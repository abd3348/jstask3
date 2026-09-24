function changeFont() {
    let font = document.getElementById("font1").value;
    document.getElementById("title").style.fontFamily = font;
}

function changeSize(){
    let font = document.getElementById("size1").value;
    document.getElementById("title").style.fontSize = font;
}

function changeStyle() {
    let title = document.getElementById("title");

    if (document.getElementById("italic").checked) {
        title.style.fontStyle = "italic";
    } else {
        title.style.fontStyle = "normal";
    }

    if (document.getElementById("bold").checked) {
        title.style.fontWeight = "bold";
    } else {
        title.style.fontWeight = "normal";
    }

    if (document.getElementById("underline").checked) {
        title.style.textDecoration = "underline";
    } else {
        title.style.textDecoration = "none";
    }
}