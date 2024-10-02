let flag = 0;
function controller(x) {
    flag = flag + x;
    slideshow(flag);
}
function slideshow(num) {//flag goes as num here
    let slide = document.getElementsByClassName("slide");
    for (let y of slide) {
        y.style.display = "none";
        if (num == slide.length) {
            flag = 0;
            num = 0;
        }
        else if (num < 0) {
            flag = slide.length - 1;
            num = slide.length - 1;
        }
    }
    slide[num].style.display = "block";
}
slideshow(flag);