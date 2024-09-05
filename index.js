const contactBarNode = document.querySelector("#contact-bar");

function contactBarToWhite() {
    const rect = contactBarNode.getBoundingClientRect;
    console.log(rect.top, rect.left);
}

window.addEventListener("keydown", (event) => {
    if(event.key==="a") contactBarToWhite();
})