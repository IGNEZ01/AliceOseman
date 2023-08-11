function clickMenu() {
    if (itens.style.display =='flex') {
        itens.style.display ='none';
    } else {
        itens.style.display ='flex';
    }
}
// Select all slides
const slides = document.querySelectorAll(".slides");

// loop through slides and set each slides translateX property to index * 100% 
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 30}%)`;
});
