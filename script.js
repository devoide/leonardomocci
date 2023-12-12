document.addEventListener("DOMContentLoaded", content_loader);

function content_loader() {
    slideshow()
}

function slideshow() {
    let slideIndex = 1;
    showSlides(slideIndex);

    document.getElementsByClassName("next")[0].addEventListener("click", () => {
        plusSlides(-1);
    });

    document.getElementsByClassName("prev")[0].addEventListener("click", () => {
        plusSlides(1);
    });

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    for (let i=0;i < document.querySelector(".dot").length;i++) {
        document.querySelector(".dot")[i].addEventListener("click", () => {
            currentSlide(i + 1);
        });
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
}