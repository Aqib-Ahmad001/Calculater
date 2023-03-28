let get = " "
let buttons = document.querySelectorAll(".a1");
let screen = document.querySelector('input')

// for throw error
window.onerror = function () {
    alert("invalid expression")
}
// convert in Array and event press avry btn and logic
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (event) => {
        if (event.target.innerHTML == '=') {
            get = eval(get);
            document.querySelector('input').value = get;
            // get = " "
        }
        else if (event.target.innerHTML == 'C') {
            get = " "
            document.querySelector("input").value = get;
        }
        else {
            get = get + event.target.innerHTML;
            document.querySelector('input').value = get;
        }
    })

})
document.addEventListener('keydown', (event) => {
    // get = ""
    console.log(event.key)
    if (
        event.key == "+" ||
        event.key == "-" ||
        event.key == "*" ||
        event.key == "." ||
        event.key == "/" ||
        event.key == "(" ||
        event.key == ")" ||
        event.key == " " ||
        event.key <= 9) {
        //  get = " "
        get += event.key;
        document.querySelector('input').value = get;
    } else if (event.key == "Enter") {
        console.log(get)
        get = eval(get);
        document.querySelector('input').value = get;
        console.log("uignyyigu")
    } else if (event.key == "Escape") {
        get = ""
        document.querySelector("input").value = get

    } else if (event.key == "Backspace") {
        // get = get.slice(0, -1)
        get = document.querySelector("input").value.slice(0,-1)
        document.querySelector("input").value = get
    }

})






