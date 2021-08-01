let position = 0;

function previousImage() {
    const slider = document.getElementById("slider2")
    if (position < 0 ) {
    position += 400;}
    slider.style.transform = `translateX(${position}px)`;
    }
function nextImage() {
    const slider = document.getElementById("slider2");
    if (position > -1600 ) {
    position -= 400;}
    slider.style.transform = `translateX(${position}px)`;
        }
   