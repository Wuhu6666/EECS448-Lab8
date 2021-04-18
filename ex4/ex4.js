document.addEventListener("DOMContentLoaded", () => {
    let border_red, border_green, border_blue=0,background_red, background_green, background_blue= 0; 
    let text = document.querySelector("#text");
    document.querySelector("#borderRed").addEventListener("input", () => {
        border_red = document.querySelector("#borderRed").value;
    })
    document.querySelector("#borderGreen").addEventListener("input", () => {
        border_green = document.querySelector("#borderGreen").value;
    })
    document.querySelector("#borderBlue").addEventListener("input", () => {
        border_blue = document.querySelector("#borderBlue").value;
    })
    document.querySelector("#borderWidth").addEventListener("input", () => {
        border_width = document.querySelector("#borderWidth").value;
    })
    document.querySelector("#bgRed").addEventListener("input", () => {
        background_red = document.querySelector("#bgRed").value;
    })
    document.querySelector("#bgGreen").addEventListener("input", () => {
        background_green = document.querySelector("#bgGreen").value;
    })
    document.querySelector("#bgBlue").addEventListener("input", () => {
        background_blue = document.querySelector("#bgBlue").value;
    })
    document.querySelector("#apply").addEventListener("click", () => {
        text.style.backgroundColor = rgb(background_red, background_green, background_blue);
        text.style.border = border(border_width, border_red, border_green, border_blue);
    })
});

function rgb(red, green, blue) {
    return "rgb("+red+","+green+","+blue+")";
}

function border(width, red, green, blue) {
    let color = rgb(red,green,blue);
    let border = width.concat(" solid ");
    return border.concat(color);
}
