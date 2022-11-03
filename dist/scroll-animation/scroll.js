const boxes = document.querySelectorAll(".box");

animateBoxes();

function animateBoxes() {
    boxes.forEach((box) => {
        let boxTop = box.getBoundingClientRect().top;
        if(boxTop <window.innerHeight / 5 * 4) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}

window.addEventListener("scroll", animateBoxes);